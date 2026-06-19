import { Path } from '@/common/constants'
import { NavLink } from 'react-router-dom'
import s from './NavMenu.module.css'

const navItems = [
  { to: Path.Main, label: 'Main' },
  { to: Path.CategoryMovies, label: 'Category Movies' },
  { to: Path.FilteredMovies, label: 'Filtered Movies' },
  { to: Path.Search, label: 'Search' },
  { to: Path.Favorites, label: 'Favorites' },
]

export const NavMenu = () => {
  return (
    <nav>
      <ul className={s.list}>
        {navItems.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `${s.link} ${isActive ? s.activeLink : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
