import { PageNotFound } from '@/common/components/pageNotFound'
import { Path } from '@/common/constants'
import { CategoryPage } from '@/features/categoryPage/ui/CategoryPage'
import { Favorites } from '@/features/favorites/ui'
import { FilteredMovies } from '@/features/filteredMovies/ui'
import { MainPage } from '@/features/mainPage/ui'
import { Movie } from '@/features/movie'
import { SearchPage } from '@/features/search/ui'
import { Routes, Route } from 'react-router-dom'

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<MainPage />} />
      <Route path={Path.CategoryMovies} element={<CategoryPage />} />
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.Search} element={<SearchPage />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.Movie} element={<Movie />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
