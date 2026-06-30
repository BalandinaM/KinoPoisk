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

  if (query === null || query === '') {
    return (
      <div className={s.wrap}>
        <SearchInput />
      </div>
    )
  }

  return (
    <div className={s.wrap}>
      <SearchInput />
      {isLoading && <p>Загрузка...</p>}
      {searchResult?.results.length != 0 ? (
        <MoviesSection
          sectionTitle={`Результаты поиска по запросу "${query}"`}
          movies={searchResult?.results}
        />
      ) : (
        <p>
          {`По вашему запросу "${query}" ни чего не найдено, попробуйте изменить запрос`}
        </p>
      )}
    </div>
  )
}
