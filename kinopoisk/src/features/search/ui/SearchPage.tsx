import { useSearchMoviesQuery } from '@/app/api/endpoints/searchApi'
import { MoviesSection } from '@/common/components/moviesSection'
import { useSearchParams } from 'react-router-dom'
import { SearchInput } from './searchInput'
import s from './SearchPage.module.css'
import { useEffect, useState } from 'react'
import { Pagination } from '@/common/components/pagination/Pagination'
import { MoviesSectionSkeleton } from '@/common/components/moviesSection/moviesSectionSkeleton'

export const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const { data: searchResult, isLoading } = useSearchMoviesQuery(
    { query: query || '', page: currentPage, language: 'ru-RU' },
    { skip: !query }
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  if (query === null || query === '') {
    return (
      <div className={s.wrap}>
        <SearchInput setCurrentPage={setCurrentPage} />
      </div>
    )
  }

  return (
    <div className={s.wrap}>
      <SearchInput setCurrentPage={setCurrentPage} />
      {isLoading && (
        <MoviesSectionSkeleton
          variant="default"
          count={20}
          structureVariant="noHeader"
        />
      )}
      {searchResult?.results.length != 0 ? (
        <>
          <MoviesSection
            sectionTitle={`Результаты поиска по запросу "${query}"`}
            movies={searchResult?.results}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesCount={searchResult?.total_pages || 1}
          />
        </>
      ) : (
        <p>
          {`По вашему запросу "${query}" ни чего не найдено, попробуйте изменить запрос`}
        </p>
      )}
    </div>
  )
}
