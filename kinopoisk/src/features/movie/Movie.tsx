import { useFetchMovieDetailsQuery } from '@/app/api/endpoints/movieApi'
import { useParams } from 'react-router-dom'
import { MovieInfo } from './movieInfo/MovieInfo'
import { MovieSimular } from './movieSimular/MovieSimular'
import { MovieCast } from './movieCast/MovieCast'

export const Movie = () => {
  const { movie_id } = useParams<{ movie_id: string }>()
  const movieId = Number(movie_id)

  const { data: movieDetails, isLoading } = useFetchMovieDetailsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  console.log(movieDetails)

  if (!movie_id || !movieDetails) {
    return <p>Ничего не найдено...</p>
  }

  if (isLoading) return <p>Загрузка...</p>

  return (
    <section>
      <MovieInfo movie={movieDetails} />
      <MovieCast />
      <MovieSimular />
    </section>
  )
}
