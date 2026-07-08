import {
  useFetchGenreMovieListQuery,
  useFetchSortedMoviesQuery,
} from '@/app/api/endpoints/filterApi'

export const FilteredMovies = () => {
  const { data: genres } = useFetchGenreMovieListQuery({ language: 'ru-RU' })
  const { data: moviesSorted } = useFetchSortedMoviesQuery({
    with_genres: '80',
    sort_by: 'popularity.desc',
    vote_average_gte: 0.0,
    vote_average_lte: 10.0,
    page: 1,
  })
  console.log(genres)
  console.log(moviesSorted)

  return <div>FilteredMovies</div>
}
