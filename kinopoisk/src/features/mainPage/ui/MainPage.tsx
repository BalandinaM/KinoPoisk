import { MoviesSection } from '@/common/components/moviesSection'
import s from './MainPage.module.css'
import { MoviesCategory } from '@/common/constants'
import { WelcomeSection } from './welcomeSection'
import { useMoviesCategories } from './hooks'
import { getCategoryTitle } from '@/features/categoryPage/api/constants'
import { WelcomeSkeleton } from './welcomeSkeleton'
import { MoviesSectionSkeleton } from '@/common/components/moviesSection/moviesSectionSkeleton'

export const MainPage = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } =
    useMoviesCategories()

  // eslint-disable-next-line no-constant-condition
  if (isLoading) {
    return (
      <>
        <WelcomeSkeleton />
        <div className={s.wrap}>
          <MoviesSectionSkeleton variant="limitShow" count={6} />
          <MoviesSectionSkeleton variant="limitShow" count={6} />
          <MoviesSectionSkeleton variant="limitShow" count={6} />
          <MoviesSectionSkeleton variant="limitShow" count={6} />
        </div>
      </>
    )
  }

  return (
    <>
      {/* <WelcomeSkeleton /> */}
      <WelcomeSection movies={popular!.results} />
      <div className={s.wrap}>
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.NowPlaying)}
          movies={nowPlaying!.results}
          link={`/movies/${MoviesCategory.NowPlaying}`}
          limit={6}
          variant="limitShow"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.Popular)}
          movies={popular!.results}
          link={`/movies/${MoviesCategory.Popular}`}
          limit={6}
          variant="limitShow"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.TopRated)}
          movies={topRated!.results}
          link={`/movies/${MoviesCategory.TopRated}`}
          limit={6}
          variant="limitShow"
        />
        <MoviesSection
          sectionTitle={getCategoryTitle(MoviesCategory.Upcoming)}
          movies={upcoming!.results}
          link={`/movies/${MoviesCategory.Upcoming}`}
          limit={6}
          variant="limitShow"
        />
      </div>
    </>
  )
}
