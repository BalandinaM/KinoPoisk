import {
  useFetchGenreMovieListQuery,
  useFetchSortedMoviesQuery,
} from '@/app/api/endpoints/filterApi'
import type { SortOption } from '@/app/api/types'
import { useState } from 'react'
import { initialStateFilter } from '../model'
import { MoviesSection } from '@/common/components/moviesSection'
import { SORT_OPTIONS } from '../model/filterConstants'

export const FilteredMovies = () => {
  const { data: genresData } = useFetchGenreMovieListQuery({
    language: 'ru-RU',
  })
  const [sort, setSort] = useState<SortOption>(initialStateFilter.sort)
  const [genres, setGenres] = useState<number[]>([])
  const [ratingGte, setRatingGte] = useState(initialStateFilter.ratingGte)
  const [ratingLte, setRatingLte] = useState(initialStateFilter.ratingLte)

  const { data: moviesSorted } = useFetchSortedMoviesQuery({
    with_genres: genres.length ? genres.join(',') : undefined,
    sort_by: sort,
    vote_average_gte: ratingGte,
    vote_average_lte: ratingLte,
    page: 1,
  })
  console.log(genresData)
  console.log(moviesSorted)

  return (
    <div>
      <select
        //className={finalSelectClassName}
        //onChange={onChangeCallback}
        value={sort}
        //{...restProps}
      >
        {SORT_OPTIONS.map(item => (
          <option id={item.value} key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <ul>
        {genresData?.genres.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>

      <MoviesSection movies={moviesSorted?.results} />
    </div>
  )
}
