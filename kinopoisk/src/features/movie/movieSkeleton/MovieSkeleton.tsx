import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './MovieSkeleton.module.css'

export const MovieSkeleton = () => {
  return (
    <section className={s.wrap}>
      <div className={s.infoSkeleton}>
        <div className={s.posterSkeleton}>
          <Skeleton
            className={s.posterImage}
            width={280}
            height={420}
            borderRadius={12}
          />
        </div>
        <div className={s.detailsSkeleton}>
          <div className={s.headerSkeleton}>
            <Skeleton width={300} height={40} borderRadius={8} />
            <Skeleton width={100} height={40} borderRadius={8} />
          </div>
          <div className={s.metaSkeleton}>
            <Skeleton width={120} height={20} borderRadius={4} />
            <Skeleton width={140} height={20} borderRadius={4} />
            <Skeleton width={100} height={20} borderRadius={4} />
          </div>
          <Skeleton
            className={s.overviewSkeleton}
            count={3}
            height={20}
            borderRadius={4}
          />
          <div className={s.genresSkeleton}>
            <Skeleton width={80} height={24} borderRadius={20} />
            <Skeleton width={100} height={24} borderRadius={20} />
            <Skeleton width={90} height={24} borderRadius={20} />
            <Skeleton width={70} height={24} borderRadius={20} />
          </div>
        </div>
      </div>
      <div className={s.castSkeleton}>
        <Skeleton
          width={200}
          height={32}
          borderRadius={8}
          className={s.titleSkeleton}
        />
        <div className={s.castListSkeleton}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={s.castCardSkeleton}>
              <Skeleton
                className={s.castImageSkeleton}
                width={180}
                height={180}
                borderRadius={12}
              />
              <Skeleton width="80%" height={16} borderRadius={4} />
              <Skeleton width="60%" height={14} borderRadius={4} />
            </div>
          ))}
        </div>
      </div>
      <div className={s.similarSkeleton}>
        <Skeleton
          width={200}
          height={32}
          borderRadius={8}
          className={s.titleSkeleton}
        />
        <div className={s.similarListSkeleton}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={s.similarCardSkeleton}>
              <Skeleton
                className={s.similarImageSkeleton}
                width="100%"
                height="100%"
                borderRadius={12}
              />
              <Skeleton width="80%" height={16} borderRadius={4} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
