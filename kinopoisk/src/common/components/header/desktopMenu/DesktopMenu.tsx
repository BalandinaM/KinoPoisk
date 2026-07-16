import { Logo } from '../logo'
import { NavMenu } from '../navMenu'
import { ThemeToggle } from '../themeToggle'
import s from './DesktopMenu.module.css'

export const DesktopMenu = () => {
  return (
    <div className={s.wrap}>
      <Logo />
      <NavMenu />
      <ThemeToggle />
    </div>
  )
}
