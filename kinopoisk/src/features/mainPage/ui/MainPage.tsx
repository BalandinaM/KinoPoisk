import { MoviesSection } from '@/common/components/moviesSection'
import s from './MainPage.module.css'
import { MoviesCategory } from '@/common/constants'
import { WelcomeSection } from './welcomeSection'
import { useMoviesCategories } from './hooks'
import { getCategoryTitle } from '@/features/categoryMovies/api/constants'

export const MainPage = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } =
    useMoviesCategories()

  if (isLoading) {
    return <div className={s.loader}>Загрузка...</div>
  }

  return (
    <>
      <WelcomeSection movies={popular!.results} />
      <div className={s.wrap}>
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.NowPlaying)}
          movies={nowPlaying!.results}
          link={`/movies/${MoviesCategory.NowPlaying}`}
          limit={6}
          variant="mainPage"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.Popular)}
          movies={popular!.results}
          link={`/movies/${MoviesCategory.Popular}`}
          limit={6}
          variant="mainPage"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.TopRated)}
          movies={topRated!.results}
          link={`/movies/${MoviesCategory.TopRated}`}
          limit={6}
          variant="mainPage"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.Upcoming)}
          movies={upcoming!.results}
          link={`/movies/${MoviesCategory.Upcoming}`}
          limit={6}
          variant="mainPage"
        />
      </div>
    </>
  )
}
