import { useLazySearchMoviesQuery } from '@/app/api/endpoints/searchApi'
import { useState } from 'react'

export const SearchInput = () => {
  const [search, setSearch] = useState('')

  // const debounceSearch = useDebounceValue(search)
  const [triggerSearch, { data, isLoading }] = useLazySearchMoviesQuery()
  console.log(data)

  if (isLoading) return <h1>Skeleton loader...</h1>

  const handleSearch = () => {
    triggerSearch({ query: search, page: 1, language: 'ru-RU' })
  }

  return (
    <div>
      <input
        type="search"
        onChange={e => setSearch(e.currentTarget.value)}
        placeholder={'Search playlist by title'}
      />
      <button onClick={handleSearch}>Искать</button>
    </div>
  )
}
