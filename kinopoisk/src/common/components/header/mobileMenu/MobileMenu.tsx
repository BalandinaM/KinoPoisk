import { useState } from 'react'
import { Logo } from '../logo'
import { NavMenu } from '../navMenu'
import { ThemeToggle } from '../themeToggle'
import s from './MobileMenu.module.css'

export const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className={s.wrap}>
      <div className={s.wrapHeaderMenu}>
        <button className={s.button} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {isOpenMenu ? 'x' : '☰'}
        </button>
        <Logo />
        <ThemeToggle />
      </div>
      {isOpenMenu && <NavMenu closeMenu={setIsOpenMenu} />}
    </div>
  )
}
