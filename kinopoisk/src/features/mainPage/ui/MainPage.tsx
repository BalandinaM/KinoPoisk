import {
  useFetchNowPlayingMoviesQuery,
  useFetchPopularMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchUpcomingMoviesQuery,
} from '@/app/api/endpoints/moviesApi'
import { MoviesSection } from '@/common/components/moviesSection'
import s from './MainPage.module.css'

export const MainPage = () => {
  const { data: nowPlaying } = useFetchNowPlayingMoviesQuery({
    page: 1,
    language: 'ru-RU',
  })
  const { data: popular } = useFetchPopularMoviesQuery({
    page: 1,
    language: 'ru-RU',
  })
  const { data: topRated } = useFetchTopRatedMoviesQuery({
    page: 1,
    language: 'ru-RU',
  })
  const { data: upcoming } = useFetchUpcomingMoviesQuery({
    page: 1,
    language: 'ru-RU',
  })

  return (
    <div className={s.wrap}>
      <MoviesSection
        sectionTitle={'Сейчас в прокате'}
        data={nowPlaying?.results}
        link="#"
        limit={6}
      />
      <MoviesSection
        sectionTitle={'Популярные фильмы'}
        data={popular?.results}
        link="#"
        limit={6}
      />
      <MoviesSection
        sectionTitle={'С высоким рейтингом'}
        data={topRated?.results}
        link="#"
        limit={6}
      />
      <MoviesSection
        sectionTitle={'Скоро в прокате'}
        data={upcoming?.results}
        link="#"
        limit={6}
      />
    </div>
  )
}
