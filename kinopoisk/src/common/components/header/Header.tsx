import s from './Header.module.css'
import { Logo } from './logo'
import { NavMenu } from './navMenu'
import { ThemeToggle } from './themeToggle'

export const Header = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <Logo />
        <NavMenu />
        <ThemeToggle />
      </header>
    </div>
  )
}
