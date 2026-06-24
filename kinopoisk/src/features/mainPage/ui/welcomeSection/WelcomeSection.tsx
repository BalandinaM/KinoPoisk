import type { Movie } from '@/app/api/types'
import s from './WelcomeSection.module.css'
import { useImageUrl } from '@/common/hooks'
import { useState } from 'react'
import { SearchInput } from '@/features/search/ui'

type Props = {
  movies: Movie[]
}

export const WelcomeSection = ({ movies }: Props) => {
  const { getBackdropUrl } = useImageUrl()

  const [randomMovie] = useState(() => {
    const randomIndex = Math.floor(Math.random() * movies.length)
    return movies[randomIndex]
  })
  const backdropPath = randomMovie.backdrop_path
  const backdropUrl = getBackdropUrl(backdropPath, 'original')

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17% 79.17%),
    url(${backdropUrl})`,
  }

  return (
    <div className={s.section} style={backgroundStyle}>
      <SearchInput />
    </div>
  )
}
