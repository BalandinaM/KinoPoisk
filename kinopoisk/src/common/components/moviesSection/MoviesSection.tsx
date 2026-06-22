import { Link } from 'react-router-dom'
import s from './MoviesSection.module.css'
import type { Movie } from '@/app/api/types'
import { MoviePreview } from './moviePreview'

type Props = {
  sectionTitle: string
  link?: string
  data?: Movie[]
  limit?: number
}

export const MoviesSection = ({ sectionTitle, link, data, limit }: Props) => {
  const moviesToShow = limit ? data?.slice(0, limit) : data

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
      <ul className={s.list}>
        {moviesToShow?.map(movie => {
          return <MoviePreview data={movie} />
        })}
      </ul>
    </section>
  )
}
