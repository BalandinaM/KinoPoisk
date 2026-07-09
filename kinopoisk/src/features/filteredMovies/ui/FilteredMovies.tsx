import {
  useFetchGenreMovieListQuery,
  useFetchSortedMoviesQuery,
} from '@/app/api/endpoints/filterApi'
import type { SortOption } from '@/app/api/types'
import { useEffect, useRef, useState } from 'react'
import { initialStateFilter } from '../model'
import { MoviesSection } from '@/common/components/moviesSection'
import { RATING, SORT_OPTIONS } from '../model/filterConstants'
import { RatingSlider } from './RatingSlider/RatingSlider'
// import TwoThumbs from './range/Range'

export const FilteredMovies = () => {
  const { data: genresData } = useFetchGenreMovieListQuery({
    language: 'ru-RU',
  })
  const [sort, setSort] = useState<SortOption>(initialStateFilter.sort)
  const [genres, setGenres] = useState<number[]>([])
  // const [ratingGte, setRatingGte] = useState(initialStateFilter.ratingGte)
  // const [ratingLte, setRatingLte] = useState(initialStateFilter.ratingLte)
  const [ratingRange, setRatingRange] = useState<[number, number]>([
    initialStateFilter.ratingGte,
    initialStateFilter.ratingLte,
  ])

  const { data: moviesSorted } = useFetchSortedMoviesQuery({
    with_genres: genres.length ? genres.join(',') : undefined,
    sort_by: sort,
    vote_average_gte: ratingRange[0],
    vote_average_lte: ratingRange[1],
    page: 1,
  })
  console.log(genresData)
  console.log(moviesSorted)

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
      <ul>
        <div>
          <RatingSlider
            value={ratingRange}
            onChange={newValue => {
              console.log('Новое значение:', newValue)
              setRatingRange(newValue)
            }}
          />
          <p>
            Рейтинг: {ratingRange[0].toFixed(1)} - {ratingRange[1].toFixed(1)}
          </p>
        </div>
        {genresData?.genres.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>

      <MoviesSection movies={moviesSorted?.results} />
    </div>
  )
}
