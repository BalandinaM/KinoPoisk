import { PAGINATION } from '@/common/constants'
import { categoryItems } from '@/features/categoryPage/api/constants'
import { NavLink, useParams } from 'react-router-dom'
import s from './CategoryMenuDesktop.module.css'

type Props = {
  setCurrentPage: (page: number) => void
}

export const CategoryMenuDesktop = ({ setCurrentPage }: Props) => {
  const { category } = useParams<{ category: string }>()
  return (
    <nav>
      <ul className={s.list}>
        {categoryItems.map(item => {
          const isActive = category === item.to

          return (
            <li
              key={item.to}
              onClick={() => setCurrentPage(PAGINATION.DEFAULT_PAGE)}
            >
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
