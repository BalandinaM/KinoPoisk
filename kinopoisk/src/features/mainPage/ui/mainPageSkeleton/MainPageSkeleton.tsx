import { MoviesSectionSkeleton } from '@/common/components/moviesSection/moviesSectionSkeleton'
import { WelcomeSkeleton } from '../welcomeSkeleton'
import s from './../MainPage.module.css'

export const MainPageSkeleton = () => {
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
