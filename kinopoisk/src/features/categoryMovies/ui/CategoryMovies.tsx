import { useFetchMoviesByCategoryQuery } from '@/app/api/endpoints/moviesApi'
import { MoviesSection } from '@/common/components/moviesSection'
import { useParams } from 'react-router-dom'

export const CategoryMovies = () => {
  const { category } = useParams<{ category: string }>()

  const { data: movies } = useFetchMoviesByCategoryQuery({
    category: category || 'popular',
    page: 1,
    language: 'ru-RU',
  })

  return (
    <MoviesSection
      sectionTitle={category || 'popular'}
      movies={movies?.results}
    />
  )
}
