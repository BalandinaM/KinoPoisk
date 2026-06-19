import s from './Header.module.css'
import { Logo } from './logo/Logo'
import { NavMenu } from './navMenu/NavMenu'
import { ThemeToggle } from './themeToggle/ThemeToggle'

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <NavMenu />
      <ThemeToggle />
    </header>
  )
}
