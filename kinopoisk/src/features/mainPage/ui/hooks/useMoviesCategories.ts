import { useFetchMoviesByCategoryQuery } from '@/app/api/endpoints/moviesApi'
import { MoviesCategory } from '@/common/constants'

export const useMoviesCategories = () => {
  const nowPlaying = useFetchMoviesByCategoryQuery({
    category: MoviesCategory.NowPlaying,
    page: 1,
    language: 'ru-RU',
  })

  const popular = useFetchMoviesByCategoryQuery({
    category: MoviesCategory.Popular,
    page: 1,
    language: 'ru-RU',
  })

  const topRated = useFetchMoviesByCategoryQuery({
    category: MoviesCategory.TopRated,
    page: 1,
    language: 'ru-RU',
  })

  const upcoming = useFetchMoviesByCategoryQuery({
    category: MoviesCategory.Upcoming,
    page: 1,
    language: 'ru-RU',
  })

  const isLoading =
    nowPlaying.isLoading ||
    popular.isLoading ||
    topRated.isLoading ||
    upcoming.isLoading

  return {
    nowPlaying: nowPlaying.data,
    popular: popular.data,
    topRated: topRated.data,
    upcoming: upcoming.data,
    isLoading,
  }
}
