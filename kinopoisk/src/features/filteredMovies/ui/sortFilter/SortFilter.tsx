import type { SortOption } from '@/app/api/types'
import { SORT_OPTIONS } from '../../model/filterConstants'

type Props = {
  sort: SortOption
  setSort: (string: SortOption) => void
}

export const SortFilter = ({ sort, setSort }: Props) => {
  return (
    <select value={sort} onChange={e => setSort(e.target.value as SortOption)}>
      {SORT_OPTIONS.map(item => (
        <option id={item.value} key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  )
}
