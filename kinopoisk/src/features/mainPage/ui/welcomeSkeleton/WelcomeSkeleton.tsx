// import Skeleton from 'node_modules/@mui/material/Skeleton/Skeleton.d.mts'
import s from './WelcomeSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const WelcomeSkeleton = () => {
  return (
    <section className={s.skeletonSection}>
      <div className={s.content}>
        <Skeleton className={s.skeletonWelcome} width={100} height={20} />
        <Skeleton className={s.skeletonTitle} width={350} height={48} />
        <Skeleton className={s.skeletonSubtitle} width={250} height={24} />
        <div className={s.skeletonSearchWrapper}>
          <Skeleton className={s.skeletonSearchInput} height={40} />
          <Skeleton className={s.skeletonSearchButton} width={80} height={40} />
        </div>
      </div>
    </section>
  )
}
