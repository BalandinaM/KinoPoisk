import { Path } from '@/common/constants'
import s from './PageNotFound.module.css'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>Страница не найдена</h2>
      <p className={s.description}>
        Похоже, вы попали на несуществующую страницу. Проверьте адрес или
        вернитесь на главную.
      </p>
      <Link to={Path.Main} className={s.button}>
        На главную
      </Link>
    </div>
  )
}
