import {
  useFetchMovieCreditsQuery,
  useFetchMovieDetailsQuery,
} from '@/app/api/endpoints/movieApi'
import { useParams } from 'react-router-dom'
import { MovieInfo } from './movieInfo/MovieInfo'
import { MovieSimular } from './movieSimular/MovieSimular'
import { MovieCast } from './movieCast/MovieCast'
import s from './Movie.module.css'

export const Movie = () => {
  const { movie_id } = useParams<{ movie_id: string }>()
  const movieId = Number(movie_id)

  const { data: movieDetails, isLoading } = useFetchMovieDetailsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  const { data: movieCredits, isLoadingCredits } = useFetchMovieCreditsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  if (!movie_id || !movieDetails || !movieCredits) {
    return <p>Ничего не найдено...</p>
  }

  if (isLoading) return <p>Загрузка...</p>

  return (
    <section className={s.wrap}>
      <MovieInfo movie={movieDetails} />
      <MovieCast credits={movieCredits.cast} />
      <MovieSimular />
    </section>
  )
}
