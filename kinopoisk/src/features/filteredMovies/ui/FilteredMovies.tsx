import {
  useFetchGenreMovieListQuery,
  useFetchSortedMoviesQuery,
} from '@/app/api/endpoints/filterApi'
import type { SortOption } from '@/app/api/types'
import { useState } from 'react'
import { initialStateFilter } from '../model'
import { MoviesSection } from '@/common/components/moviesSection'
import { RatingSlider } from './ratingSlider'
import { useDebounceValue } from '@/common/hooks'
import { SortFilter } from './sortFilter'
import { GenresFilter } from './genresFilter'

export const FilteredMovies = () => {
  const { data: genresData } = useFetchGenreMovieListQuery({
    language: 'ru-RU',
  })
  const [sort, setSort] = useState<SortOption>(initialStateFilter.sort)
  const [genres, setGenres] = useState<number[]>([])
  const [ratingRange, setRatingRange] = useState<[number, number]>([
    initialStateFilter.ratingGte,
    initialStateFilter.ratingLte,
  ])

  const debounceSort = useDebounceValue(sort)
  const debounceRating = useDebounceValue(ratingRange)
  const debounceGenres = useDebounceValue(genres)

  const { data: moviesSorted } = useFetchSortedMoviesQuery({
    with_genres: debounceGenres.length ? debounceGenres.join(',') : undefined,
    sort_by: debounceSort,
    vote_average_gte: debounceRating[0],
    vote_average_lte: debounceRating[1],
    page: 1,
  })
  console.log(genresData)
  console.log(moviesSorted)

  const handleGenreToggle = (genreId: number) => {
    setGenres(prev =>
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    )
  }

  return (
    <div>
      <SortFilter sort={sort} setSort={setSort} />
      <RatingSlider
        value={ratingRange}
        onChange={newValue => {
          setRatingRange(newValue)
        }}
      />
      <GenresFilter
        genres={genresData?.genres}
        handleGenreToggle={handleGenreToggle}
      />
      <MoviesSection movies={moviesSorted?.results} />
    </div>
  )
}
