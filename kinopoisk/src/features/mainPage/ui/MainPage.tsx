import {
  useFetchNowPlayingMoviesQuery,
  useFetchPopularMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchUpcomingMoviesQuery,
} from '@/app/api/endpoints/moviesApi'
import { MoviesSection } from '@/common/components/moviesSection'
import s from './MainPage.module.css'
import { MoviesCategory } from '@/common/constants'
import { WelcomeSection } from './welcomeSection'

export const MainPage = () => {
  const { data: nowPlaying, isLoading: isLoadingNowPlaying } =
    useFetchNowPlayingMoviesQuery({
      page: 1,
      language: 'ru-RU',
    })

  const { data: popular, isLoading: isLoadingPopular } =
    useFetchPopularMoviesQuery({
      page: 1,
      language: 'ru-RU',
    })

  const { data: topRated, isLoading: isLoadingTopRated } =
    useFetchTopRatedMoviesQuery({
      page: 1,
      language: 'ru-RU',
    })

  const { data: upcoming, isLoading: isLoadingUpcoming } =
    useFetchUpcomingMoviesQuery({
      page: 1,
      language: 'ru-RU',
    })

  const isLoading =
    isLoadingNowPlaying ||
    isLoadingPopular ||
    isLoadingTopRated ||
    isLoadingUpcoming

  if (isLoading) {
    return <div className={s.loader}>Загрузка...</div>
  }

  return (
    <>
      <WelcomeSection movies={popular!.results} />
      <div className={s.wrap}>
        <MoviesSection
          sectionTitle={'Сейчас в прокате'}
          movies={nowPlaying!.results}
          link={`/movies/${MoviesCategory.NowPlaying}`}
          limit={6}
        />
        <MoviesSection
          sectionTitle={'Популярные фильмы'}
          movies={popular!.results}
          link={`/movies/${MoviesCategory.Popular}`}
          limit={6}
        />
        <MoviesSection
          sectionTitle={'С высоким рейтингом'}
          movies={topRated!.results}
          link={`/movies/${MoviesCategory.TopRated}`}
          limit={6}
        />
        <MoviesSection
          sectionTitle={'Скоро в прокате'}
          movies={upcoming!.results}
          link={`/movies/${MoviesCategory.Upcoming}`}
          limit={6}
        />
      </div>
    </>
  )
}
