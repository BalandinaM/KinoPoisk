import { Path } from '@/common/constants'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './SearchInput.module.css'

export const SearchInput = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`${Path.Search}?query=${search}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={s.wrapper}>
      <input
        type="search"
        className={s.input}
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        placeholder={'Поиск фильма по названию...'}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        disabled={!search.trim()}
        className={s.button}
      >
        Искать
      </button>
    </div>
  )
}
