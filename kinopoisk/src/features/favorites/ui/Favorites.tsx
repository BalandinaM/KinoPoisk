import { MoviesSection } from '@/common/components/moviesSection'
import { useFavorite } from '@/common/hooks'
import s from './Favorites.module.css'
import { useEffect, useState } from 'react'
import { Pagination } from '@/common/components/pagination/Pagination'

const PAGE_SIZE = 20

export const Favorites = () => {
  const { favorites } = useFavorite()
  const [currentPage, setCurrentPage] = useState(1)

  const getTotalPages = () => Math.ceil(favorites.length / PAGE_SIZE)

  const getPaginatedMovies = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE
    return favorites.slice(startIndex, endIndex)
  }

  const paginatedMovies = getPaginatedMovies()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  if (favorites.length === 0) {
    return (
      <div className={s.empty}>
        <p>У вас пока нет избранных фильмов</p>
      </div>
    )
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
