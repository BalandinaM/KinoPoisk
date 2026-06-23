import { useFetchMovieDetailsQuery } from '@/app/api/endpoints/movieApi'
import { useParams } from 'react-router-dom'

export const Movie = () => {
  const { movie_id } = useParams<{ movie_id: string }>()
  const movieId = Number(movie_id)

  const { data: movieDetails, isLoading } = useFetchMovieDetailsQuery(
    { movie_id: movieId },
    { skip: !movieId }
  )

  if (!movie_id) {
    return <p>Ничего не найдено...</p>
  }

  if (isLoading) return <p>Загрузка...</p>

  return (
    <div>
      <h1>{movieDetails?.title}</h1>
    </div>
  )
}
