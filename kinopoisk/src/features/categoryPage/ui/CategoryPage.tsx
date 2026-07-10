import { useFetchMoviesByCategoryQuery } from '@/app/api/endpoints/moviesApi'
import { useParams } from 'react-router-dom'
import { CategoryMenu } from './categoryMenu'
import s from './CategoryPage.module.css'
import { getCategoryTitle } from '../api/constants'
import { useEffect, useState } from 'react'
import { Pagination } from '@/common/components/pagination/Pagination'
import { MoviesSection } from '@/common/components/moviesSection'
import { MoviesSectionSkeleton } from '@/common/components/moviesSection/moviesSectionSkeleton'
import { PAGINATION } from '@/common/constants'

export const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(PAGINATION.DEFAULT_PAGE)
  const { category } = useParams<{ category: string }>()

  const { data: movies, isLoading } = useFetchMoviesByCategoryQuery({
    category: category || 'popular',
    page: currentPage,
    language: 'ru-RU',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <div className={s.wrap}>
      <CategoryMenu setCurrentPage={setCurrentPage} />
      {isLoading ? (
        <MoviesSectionSkeleton variant="default" count={20} />
      ) : (
        <>
          <MoviesSection
            sectionTitle={getCategoryTitle(category || 'popular')}
            movies={movies?.results}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesCount={movies?.total_pages || PAGINATION.DEFAULT_PAGE}
          />
        </>
      )}
    </div>
  )
}
