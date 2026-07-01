import type { MovieDetails } from '@/app/api/types'
import { useImageUrl } from '@/common/hooks'
import s from './MovieInfo.module.css'
import { getRuntime, getYear } from '@/common/utils'

type Props = {
  movie: MovieDetails
}

export const MovieInfo = ({
  movie: {
    title,
    poster_path,
    release_date,
    vote_average,
    runtime,
    overview,
    genres,
  },
}: Props) => {
  const { getPosterUrl, isLoading } = useImageUrl()
  const posterUrl = getPosterUrl(poster_path, 'w342')
  const yearRelease = getYear(release_date)
  const runTime = getRuntime(runtime)

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={s.movieInfo}>
      <div className={s.wrapImg}>
        <img
          src={posterUrl}
          alt={title}
          width={280}
          height={420}
          className={s.image}
        />
      </div>
      <div className={s.wrapInfo}>
        <div className={s.wrapTitle}>
          <h3 className={s.title}>{title}</h3>
          <span className={s.linkBack}>
            <a href="#">Назад</a>
          </span>
        </div>
        <div className={s.details}>
          <span className={s.detailsItem}>
            <strong>Год релиза:</strong> {yearRelease}
          </span>
          <span className={s.detailsItem}>
            <strong>Продолжительность:</strong> {runTime}
          </span>
          <span className={s.detailsItem}>
            <strong>Рейтинг:</strong> {vote_average.toFixed(1)}
          </span>
        </div>

        <p className={s.overview}>{overview}</p>

        <div className={s.genresWrap}>
          <h4 className={s.genresTitle}>Жанры</h4>
          <ul className={s.genresList}>
            {genres?.map(item => (
              <li key={item.id} className={s.genreItem}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
