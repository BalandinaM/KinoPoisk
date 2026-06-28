import { Link } from 'react-router-dom'
import s from './MoviesSection.module.css'
import type { Movie } from '@/app/api/types'
import { MoviePreview } from './moviePreview'

type Variant = 'mainPage' | 'default'

type Props = {
  sectionTitle: string
  link?: string
  movies?: Movie[]
  limit?: number
  variant?: Variant
}

export const MoviesSection = ({
  sectionTitle,
  link,
  movies,
  limit,
  variant = 'default',
}: Props) => {
  const moviesToShow = limit ? movies?.slice(0, limit) : movies

  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>{sectionTitle}</h2>
        {link && (
          <Link to={link} className={s.viewMore}>
            Показать больше
          </Link>
        )}
      </div>
      <div
        className={`${s.list} ${variant === 'mainPage' ? s.listMainPage : ''}`}
      >
        {moviesToShow?.map(movie => {
          return <MoviePreview movie={movie} />
        })}
      </div>
    </section>
  )
}
