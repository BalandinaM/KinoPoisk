import type { Genre } from '@/app/api/types'
import s from './GenresFilter.module.css'
import Skeleton from 'react-loading-skeleton'

type Props = {
  genres?: Genre[]
  selectedGenres: number[]
  handleGenreToggle: (id: number) => void
  isLoading: boolean
}

export const GenresFilter = ({
  genres,
  handleGenreToggle,
  selectedGenres,
  isLoading,
}: Props) => {
  if (isLoading) {
    return (
      <div className={s.wrap}>
        {Array.from({ length: 19 }).map((_, i) => (
          <Skeleton key={i} width={100} height={32} borderRadius={8} />
        ))}
      </div>
    )
  }

  return (
    <div className={s.wrap}>
      {genres?.map(item => {
        return (
          <button
            key={item.id}
            className={`${s.button} ${selectedGenres.includes(item.id) ? s.buttonActive : ''}`}
            onClick={() => handleGenreToggle(item.id)}
            type="button"
          >
            {item.name}
          </button>
        )
      })}
    </div>
  )
}
