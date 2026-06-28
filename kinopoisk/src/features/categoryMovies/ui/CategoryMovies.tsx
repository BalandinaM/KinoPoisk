import { useFetchMoviesByCategoryQuery } from '@/app/api/endpoints/moviesApi'
import { MoviesSection } from '@/common/components/moviesSection'
import { useParams } from 'react-router-dom'
import { CategoryMenu } from './CategoryMenu/CategoryMenu'
import s from './CategoryMovies.module.css'
import { getCategoryTitle } from '../api/constants'

export const CategoryMovies = () => {
  console.log('render')

  const { category } = useParams<{ category: string }>()

  const { data: movies, isLoading } = useFetchMoviesByCategoryQuery({
    category: category || 'popular',
    page: 1,
    language: 'ru-RU',
  })

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
    </div>
  )
}
