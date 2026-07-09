import type { Genre } from '@/app/api/types'

type Props = {
  genres?: Genre[]
  handleGenreToggle: (id: number) => void
}

export const GenresFilter = ({ genres, handleGenreToggle }: Props) => {
  return (
    <div>
      {genres?.map(item => {
        return (
          <button
            key={item.id}
            // className={`${s.genreButton} ${genres.includes(item.id) ? s.active : ''}`}
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
