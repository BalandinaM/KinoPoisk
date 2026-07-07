import { MoviesSection } from '@/common/components/moviesSection'
import s from './MainPage.module.css'
import { MoviesCategory } from '@/common/constants'
import { WelcomeSection } from './welcomeSection'
import { useMoviesCategories } from './hooks'
import { getCategoryTitle } from '@/features/categoryPage/api/constants'
import { EmptyState } from '@/common/components/emptyState'
import { MainPageSkeleton } from './mainPageSkeleton'

export const MainPage = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } =
    useMoviesCategories()

  if (isLoading) {
    return <MainPageSkeleton />
  }

  if (!nowPlaying || !popular || !topRated || !upcoming) {
    return <EmptyState message="Данные временно недоступны" />
  }

  return (
    <>
      {/* <WelcomeSkeleton /> */}
      <WelcomeSection movies={popular.results} />
      <div className={s.wrap}>
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.NowPlaying)}
          movies={nowPlaying.results}
          link={`/movies/${MoviesCategory.NowPlaying}`}
          limit={6}
          variant="limitShow"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.Popular)}
          movies={popular.results}
          link={`/movies/${MoviesCategory.Popular}`}
          limit={6}
          variant="limitShow"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.TopRated)}
          movies={topRated.results}
          link={`/movies/${MoviesCategory.TopRated}`}
          limit={6}
          variant="limitShow"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.Upcoming)}
          movies={upcoming.results}
          link={`/movies/${MoviesCategory.Upcoming}`}
          limit={6}
          variant="limitShow"
        />
      </div>
    </>
  )
}
