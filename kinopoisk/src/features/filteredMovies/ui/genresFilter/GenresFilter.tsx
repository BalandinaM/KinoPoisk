import type { Genre } from '@/app/api/types'
import s from './GenresFilter.module.css'

type Props = {
  genres?: Genre[]
  selectedGenres: number[]
  handleGenreToggle: (id: number) => void
}

export const GenresFilter = ({
  genres,
  handleGenreToggle,
  selectedGenres,
}: Props) => {
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
