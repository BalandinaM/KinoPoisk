import type { CastMember } from '@/app/api/types'
import { useImageUrl } from '@/common/hooks'
import s from './MovieCast.module.css'

type Props = {
  credits: CastMember[]
}

export const MovieCast = ({ credits }: Props) => {
  const { getPosterUrl } = useImageUrl()
  const topActors = credits.slice(0, 6)

  console.log(topActors)
  return (
    <div className={s.castSection}>
      <h3 className={s.title}>В главных ролях</h3>
      <ul className={s.list}>
        {topActors.map(item => (
          <li key={item.id} className={s.card}>
            <div className={s.imageWrapper}>
              <img
                src={getPosterUrl(item.profile_path, 'w45')}
                alt={item.name}
                className={s.image}
              />
            </div>
            <div className={s.info}>
              <p className={s.actorName}>{item.name}</p>
              <p className={s.characterName}>{item.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
