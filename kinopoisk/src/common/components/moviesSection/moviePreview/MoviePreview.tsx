import type { Movie } from '@/app/api/types'
import { useFavorite, useImageUrl } from '@/common/hooks'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import s from './MoviePreview.module.css'
import { Link } from 'react-router-dom'

type Props = {
  data: Movie
}

export const MoviePreview = ({ data }: Props) => {
  const { getPosterUrl, isLoading } = useImageUrl()
  const { isFavorite, toggleFavorite } = useFavorite(data.id)

  const getRatingColor = (rating: number) => {
    if (rating < 5) return 'low'
    if (rating < 8) return 'medium'
    return 'high'
  }

  if (isLoading || !data) {
    return <div>Загрузка...</div>
  }

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggleFavorite({
      id: data.id,
      title: data.title,
      posterUrl: data.poster_path,
      voteAverage: data.vote_average,
    })
  }

  // if (data) {
  const posterUrl = getPosterUrl(data.poster_path, 'w342')

  return (
    <article key={data.id} className={s.card}>
      <Link to={`/movie/${data.id}`} className={s.link}>
        <img
          src={posterUrl}
          alt={data.title}
          width={180}
          height={270}
          className={s.image}
        />
        <h4 className={s.title}>{data.title}</h4>
        <div
          className={s.rating}
          data-rating={getRatingColor(data.vote_average)}
        >
          {data.vote_average.toFixed(1)}
        </div>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className={`${s.favoriteButton} ${isFavorite ? s.active : ''}`}
      >
        {isFavorite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
      </button>
    </article>
  )
  // }
}
