import { useSearchMoviesQuery } from '@/app/api/endpoints/searchApi'
import { MoviesSection } from '@/common/components/moviesSection'
import { useSearchParams } from 'react-router-dom'
import { SearchInput } from './searchInput'
import s from './SearchPage.module.css'

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const { data: searchResult, isLoading } = useSearchMoviesQuery(
    { query: query || '', page: 1, language: 'ru-RU' },
    { skip: !query }
  )

  return (
    <div className={s.wrap}>
      {isLoading && <p>Загрузка...</p>}
      <SearchInput />
      {searchResult && (
        <MoviesSection
          sectionTitle={`Результаты поиска по запросу "${query}"`}
          movies={searchResult?.results}
        />
      )}
    </div>
  )
}
