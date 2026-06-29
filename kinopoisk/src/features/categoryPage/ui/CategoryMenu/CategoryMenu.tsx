import { MoviesCategory } from '@/common/constants'
import { NavLink, useParams } from 'react-router-dom'
import s from './CategoryMenu.module.css'

const categoryItems = [
  { to: MoviesCategory.NowPlaying, label: 'Сейчас в прокате' },
  { to: MoviesCategory.Popular, label: 'Популярные' },
  { to: MoviesCategory.TopRated, label: 'С высоким рейтингом' },
  { to: MoviesCategory.Upcoming, label: 'Скоро в прокате' },
]

type Props = {
  setCurrentPage: (arg: number) => void
}

export const CategoryMenu = ({ setCurrentPage }: Props) => {
  const { category } = useParams<{ category: string }>()

  return (
    <nav>
      <ul className={s.list}>
        {categoryItems.map(item => {
          const isActive = category === item.to

          return (
            <li key={item.to} onClick={() => setCurrentPage(1)}>
              <NavLink
                to={`/movies/${item.to}`}
                className={`${s.link} ${isActive ? s.activeLink : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
