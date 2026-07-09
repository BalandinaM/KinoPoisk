import {
  useFetchGenreMovieListQuery,
  useFetchSortedMoviesQuery,
} from '@/app/api/endpoints/filterApi'
import type { SortOption } from '@/app/api/types'
import { useState } from 'react'
import { initialStateFilter } from '../model'
import { MoviesSection } from '@/common/components/moviesSection'
import { SORT_OPTIONS } from '../model/filterConstants'
import { RatingSlider } from './RatingSlider/RatingSlider'
import { useDebounceValue } from '@/common/hooks'

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
      <select
        value={sort}
        onChange={e => setSort(e.target.value as SortOption)}
      >
        {SORT_OPTIONS.map(item => (
          <option id={item.value} key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <div>
        <RatingSlider
          value={ratingRange}
          onChange={newValue => {
            console.log('Новое значение:', newValue)
            setRatingRange(newValue)
          }}
        />
        <p>
          Рейтинг {ratingRange[0].toFixed(1)} - {ratingRange[1].toFixed(1)}
        </p>
      </div>
      <div>
        {genresData?.genres.map(item => {
          return (
            <button
              key={item.id}
              // className={`${s.genreButton} ${genres.includes(item.id) ? s.active : ''}`}
              onClick={() => handleGenreToggle(item.id)}
              type="button"
            >
              {item.name}
            </button>
          )
        })}
      </div>
      <MoviesSection movies={moviesSorted?.results} />
    </div>
  )
}
