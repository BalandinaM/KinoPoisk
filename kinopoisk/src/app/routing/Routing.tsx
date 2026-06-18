import { PageNotFound } from '@/common/components/PageNotFound'
import { Path } from '@/common/constants'
import { CategoryMovies } from '@/features/categoryMovies/ui'
import { Favorites } from '@/features/favorites/ui'
import { FilteredMovies } from '@/features/filteredMovies/ui'
import { MainPage } from '@/features/mainPage/ui'
import { Search } from '@/features/search/ui'
import { Routes, Route } from 'react-router-dom'

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<MainPage />} />
      <Route path={Path.CategoryMovies} element={<CategoryMovies />} />
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.Search} element={<Search />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
