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
import { MoviesSectionSkeleton } from '@/common/components/moviesSection/moviesSectionSkeleton'
import { Pagination } from '@/common/components/pagination/Pagination'
import { PAGINATION } from '@/common/constants'

export const FilteredMovies = () => {
  const { data: genresData } = useFetchGenreMovieListQuery({
    language: 'ru-RU',
  })
  const [sort, setSort] = useState<SortOption>(initialStateFilter.sort)
  const [genres, setGenres] = useState<number[]>(initialStateFilter.genres)
  const [ratingRange, setRatingRange] = useState<[number, number]>([
    initialStateFilter.ratingGte,
    initialStateFilter.ratingLte,
  ])
  const [currentPage, setCurrentPage] = useState(PAGINATION.DEFAULT_PAGE)

  const debounceSort = useDebounceValue(sort)
  const debounceRating = useDebounceValue(ratingRange)
  const debounceGenres = useDebounceValue(genres)

  const { data: moviesSorted, isLoading } = useFetchSortedMoviesQuery({
    with_genres: debounceGenres.length ? debounceGenres.join(',') : undefined,
    sort_by: debounceSort,
    vote_average_gte: debounceRating[0],
    vote_average_lte: debounceRating[1],
    page: currentPage,
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

  const handleResetFilters = () => {
    setSort(initialStateFilter.sort)
    setGenres(initialStateFilter.genres)
    setRatingRange([initialStateFilter.ratingGte, initialStateFilter.ratingLte])
    setCurrentPage(PAGINATION.DEFAULT_PAGE)
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
      <button onClick={handleResetFilters}>Сбросить фильтры</button>
      {isLoading ? (
        <MoviesSectionSkeleton variant="default" count={20} />
      ) : (
        <>
          <MoviesSection movies={moviesSorted?.results} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesCount={moviesSorted?.total_pages || 1}
          />
        </>
      )}
    </div>
  )
}
