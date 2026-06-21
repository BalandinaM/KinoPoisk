import { Path } from '@/common/constants'
import { NavLink, useLocation } from 'react-router-dom'
import s from './NavMenu.module.css'

const navItems = [
  { to: Path.Main, label: 'Main' },
  { to: Path.CategoryMovies, label: 'Category Movies' },
  { to: Path.FilteredMovies, label: 'Filtered Movies' },
  { to: Path.Search, label: 'Search' },
  { to: Path.Favorites, label: 'Favorites' },
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
