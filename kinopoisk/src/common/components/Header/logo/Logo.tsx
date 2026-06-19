import { Path } from '@/common/constants'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div>
      <Link to={Path.Main}>
        <img src="/logo_tmdb.svg" alt="TMDB" width={50} height={30} />
      </Link>
    </div>
  )
}
