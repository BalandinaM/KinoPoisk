import { useFetchMoviesByCategoryQuery } from '@/app/api/endpoints/moviesApi'
import { useParams } from 'react-router-dom'
import { CategoryMenu } from './CategoryMenu/CategoryMenu'
import s from './CategoryPage.module.css'
import { getCategoryTitle } from '../api/constants'
import { useEffect, useState } from 'react'
import { Pagination } from '@/common/components/pagination/Pagination'
import { MoviesSection } from '@/common/components/moviesSection'

export const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { category } = useParams<{ category: string }>()

  const { data: movies, isLoading } = useFetchMoviesByCategoryQuery({
    category: category || 'popular',
    page: currentPage,
    language: 'ru-RU',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  if (isLoading) {
    return <div className={s.loader}>Загрузка...</div>
  }

  return (
    <div className={s.wrap}>
      <CategoryMenu setCurrentPage={setCurrentPage} />
      <MoviesSection
        sectionTitle={getCategoryTitle(category || 'popular')}
        movies={movies?.results}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={movies?.total_pages || 1}
      />
    </div>
  )
}
