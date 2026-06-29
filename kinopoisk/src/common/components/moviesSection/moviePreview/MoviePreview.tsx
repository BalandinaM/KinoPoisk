import type { FavoriteMovie, Movie } from '@/app/api/types'
import { useFavorite, useImageUrl } from '@/common/hooks'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import s from './MoviePreview.module.css'
import { Link } from 'react-router-dom'

type Props = {
  movie: Movie | FavoriteMovie
}

export const MoviePreview = ({ movie }: Props) => {
  const { getPosterUrl, isLoading } = useImageUrl()
  const { isFavorite, toggle } = useFavorite()

  const getRatingColor = (rating: number) => {
    if (rating < 5) return 'low'
    if (rating < 8) return 'medium'
    return 'high'
  }

  if (isLoading || !movie) {
    return <div>Загрузка...</div>
  }

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggle({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    })
  }

  const posterUrl = getPosterUrl(movie.poster_path, 'w342')

  return (
    <article key={movie.id} className={s.card}>
      <Link to={`/movie/${movie.id}`} className={s.link}>
        <div className={s.imageWrapper}>
          <img
            src={posterUrl}
            alt={movie.title}
            width={180}
            height={270}
            className={s.image}
          />
          <div
            className={s.rating}
            data-rating={getRatingColor(movie.vote_average)}
          >
            {movie.vote_average?.toFixed(1)}
          </div>
        </div>
        <h4 className={s.title}>{movie.title}</h4>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className={`${s.favoriteButton} ${isFavorite(movie.id) ? s.active : ''}`}
      >
        {isFavorite(movie.id) ? (
          <FavoriteOutlinedIcon />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </button>
    </article>
  )
}
