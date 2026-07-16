import { Path } from '@/common/constants'
import { NavLink, useLocation } from 'react-router-dom'
import s from './NavMenu.module.css'

const navItems = [
  { to: Path.Main, label: 'Главная' },
  { to: Path.PopularMovies, label: 'Категории' },
  { to: Path.FilteredMovies, label: 'Фильтрация' },
  { to: Path.Search, label: 'Поиск' },
  { to: Path.Favorites, label: 'Избранное' },
]

export const NavMenu = () => {
  const location = useLocation()
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navItems.map(item => {
          const isActive =
            item.to === Path.PopularMovies
              ? location.pathname.startsWith('/movies/')
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
