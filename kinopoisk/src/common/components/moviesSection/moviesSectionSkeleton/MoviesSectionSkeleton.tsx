// common/components/moviesSection/MoviesSectionSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './MoviesSectionSkeleton.module.css'

type Props = {
  count?: number
  variant?: 'default' | 'limitShow'
  structureVariant?: 'default' | 'noHeader'
}

export const MoviesSectionSkeleton = ({
  count = 6,
  variant = 'limitShow',
  structureVariant = 'default',
}: Props) => {
  const listClass = variant === 'limitShow' ? s.listLimitShow : s.listDefault

  return (
    <section className={s.section}>
      {structureVariant === 'default' && (
        <div className={s.header}>
          <Skeleton width={200} height={32} className={s.skeletonTitle} />
          <Skeleton width={120} height={36} className={s.skeletonViewMore} />
        </div>
      )}
      <div className={`${s.list} ${listClass}`}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={s.card}>
            <div className={s.imageWrapper}>
              <Skeleton
                className={s.skeletonImage}
                width="100%"
                height="100%"
              />
            </div>
            <Skeleton width="80%" height={25} className={s.skeletonTitleText} />
          </div>
        ))}
      </div>
    </section>
  )
}
