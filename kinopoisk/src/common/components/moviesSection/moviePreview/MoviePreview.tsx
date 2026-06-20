import type { Movie } from '@/app/api/types'

type Props = {
  data?: Movie
}

export const MoviePreview = ({ data }: Props) => {
  if (data) {
    return (
      <li key={data.id}>
        <img src="zaglushka.webp" alt="" width={180} height={270} />
        <h4>{data.title}</h4>
      </li>
    )
  }
}
