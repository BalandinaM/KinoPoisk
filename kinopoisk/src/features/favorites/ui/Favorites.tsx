import { MoviesSection } from '@/common/components/moviesSection'
import { useFavorite } from '@/common/hooks'
import s from './Favorites.module.css'
import { useEffect, useState } from 'react'
import { Pagination } from '@/common/components/pagination/Pagination'
import { EmptyState } from '@/common/components/emptyState'
import { PAGINATION } from '@/common/constants'

const PAGE_SIZE = 20

export const Favorites = () => {
  const { favorites } = useFavorite()
  const [currentPage, setCurrentPage] = useState(PAGINATION.DEFAULT_PAGE)

  const getTotalPages = () => Math.ceil(favorites.length / PAGE_SIZE)

  const getPaginatedMovies = () => {
    const startIndex = (currentPage - PAGINATION.DEFAULT_PAGE) * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE
    return favorites.slice(startIndex, endIndex)
  }

  const paginatedMovies = getPaginatedMovies()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  if (favorites.length === 0) {
    return <EmptyState message={'У вас пока нет избранных фильмов'} />
  }

  return (
    <div className={s.wrap}>
      <MoviesSection sectionTitle="Избранное" movies={paginatedMovies} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={getTotalPages()}
      />
    </div>
  )
}
