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

export const Movie = () => {
  const { movie_id } = useParams<{ movie_id: string }>()
  const movieId = Number(movie_id)

  const {
    data: movieDetails,
    isLoading,
    isFetching,
  } = useFetchMovieDetailsQuery({ movie_id: movieId }, { skip: !movieId })

  const { data: movieCredits } = useFetchMovieCreditsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  const { data: moviesSimular } = useFetchMovieSimularQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  if (isLoading || isFetching) return <p>Загрузка...</p>

  if (!movie_id || !movieDetails || !movieCredits || !moviesSimular) {
    return <p>Ничего не найдено...</p>
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
