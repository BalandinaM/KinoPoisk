import type { Movie } from '@/app/api/types'
import s from './WelcomeSection.module.css'
import { useImageUrl } from '@/common/hooks'
import { useState } from 'react'
import { SearchInput } from '@/features/search/ui/searchInput'

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
    <section className={s.section} style={backgroundStyle}>
      <div className={s.content}>
        <p className={s.welcome}>WELCOME</p>
        <h1 className={s.title}>Ищете что посмотреть?</h1>
        <p className={s.subtitle}>Начните поиск с TMDB</p>
        <SearchInput />
      </div>
    </section>
    // <div className={s.section} style={backgroundStyle}>
    //   <p>welcome</p>
    //   <SearchInput title={'Ищете что посмотреть? Начните поиск с TMDB'} />
    // </div>
  )
}
