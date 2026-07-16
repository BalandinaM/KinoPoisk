import { DesktopMenu } from './desktopMenu'
import s from './Header.module.css'
import { useMediaQuery } from 'react-responsive'
import { MobileMenu } from './mobileMenu'

export const Header = () => {
  const isLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  })

  return (
    <div className={s.container}>
      <header>{isLaptop ? <MobileMenu /> : <DesktopMenu />}</header>
    </div>
  )
}
