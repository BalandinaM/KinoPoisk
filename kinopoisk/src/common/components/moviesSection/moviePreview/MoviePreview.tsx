import type { Movie } from '@/app/api/types'
import { useImageUrl } from '@/common/hooks'

type Props = {
  data?: Movie
}

export const MoviePreview = ({ data }: Props) => {
  const { getPosterUrl, isLoading } = useImageUrl()

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (data) {
    const posterUrl = getPosterUrl(data.poster_path, 'w342')

    return (
      <li key={data.id}>
        <img src={posterUrl} alt={data.title} width={180} height={270} />
        <h4>{data.title}</h4>
      </li>
    )
  }
}
