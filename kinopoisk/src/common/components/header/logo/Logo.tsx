import { Path } from '@/common/constants'
import { Link } from 'react-router-dom'
import s from './Logo.module.css'

export const Logo = () => {
  return (
    <div className={s.logoWrapper}>
      <Link to={Path.Main}>
        <img
          src="/long_logo_tmdb.svg"
          alt="Logo TMDB"
          width={150}
          height={30}
        />
      </Link>
    </div>
  )
}
