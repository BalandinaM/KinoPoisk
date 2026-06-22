import { Path } from '@/common/constants'
import { NavLink, useLocation } from 'react-router-dom'
import s from './NavMenu.module.css'

const navItems = [
  { to: Path.Main, label: 'Главная' },
  { to: Path.CategoryMovies, label: 'Фильмы по категориям' },
  { to: Path.FilteredMovies, label: 'Отфильтровать фильмы' },
  { to: Path.Search, label: 'Поиск' },
  { to: Path.Favorites, label: 'Избранное' },
]

export const NavMenu = () => {
  const location = useLocation()
  return (
    <nav>
      <ul className={s.list}>
        {navItems.map(item => {
          const isActive =
            item.to === '/movie/:category'
              ? location.pathname.startsWith('/movie/')
              : location.pathname === item.to
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
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
