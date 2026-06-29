import { useFetchMoviesByCategoryQuery } from '@/app/api/endpoints/moviesApi'
import { MoviesSection } from '@/common/components/moviesSection'
import { useParams } from 'react-router-dom'
import { CategoryMenu } from './CategoryMenu/CategoryMenu'
import s from './CategoryMovies.module.css'
import { getCategoryTitle } from '../api/constants'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Pagination } from '@/common/components/pagination/Pagination'

export const CategoryMovies = () => {
  const [currentPage, setCurrentPage] = useState(1)
  console.log(currentPage)
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
      <CategoryMenu />
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
