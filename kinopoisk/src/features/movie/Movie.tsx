import {
  useFetchMovieCreditsQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieSimularQuery,
} from '@/app/api/endpoints/movieApi'
import { useParams } from 'react-router-dom'
import { MovieInfo } from './movieInfo/MovieInfo'
import { MovieCast } from './movieCast/MovieCast'
import s from './Movie.module.css'
import { MoviesSection } from '@/common/components/moviesSection'
import { MovieSkeleton } from './movieSkeleton'
import { EmptyState } from '@/common/components/emptyState'

export const Movie = () => {
  const { movie_id } = useParams<{ movie_id: string }>()
  const movieId = Number(movie_id)

  const { data: movieDetails, isLoading } = useFetchMovieDetailsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  const { data: movieCredits } = useFetchMovieCreditsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  const { data: moviesSimular } = useFetchMovieSimularQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  if (isLoading) {
    return <MovieSkeleton />
  }

  if (!movie_id || !movieDetails || !movieCredits || !moviesSimular) {
    return <EmptyState message={'К сожалению информация о фильме не найдена'} />
  }

  return (
    <section className={s.wrap}>
      <MovieInfo movie={movieDetails} />
      <MovieCast credits={movieCredits.cast} />
      <MoviesSection
        sectionTitle={'Похожие фильмы'}
        movies={moviesSimular.results}
        limit={6}
        variant="limitShow"
      />
    </section>
  )
}
