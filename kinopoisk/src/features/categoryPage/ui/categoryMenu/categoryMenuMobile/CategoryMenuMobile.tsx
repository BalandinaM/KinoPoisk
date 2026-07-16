import { categoryItems } from '@/features/categoryPage/api/constants'
import { useParams, useNavigate } from 'react-router-dom'
import s from './CategoryMenuMobile.module.css'
import { PAGINATION } from '@/common/constants'

type Props = {
  setCurrentPage: (page: number) => void
}

export const CategoryMenuMobile = ({ setCurrentPage }: Props) => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value
    setCurrentPage(PAGINATION.DEFAULT_PAGE)
    navigate(`/movies/${newCategory}`)
  }

  return (
    <select
      className={s.select}
      value={category || 'popular'}
      onChange={handleChange}
    >
      {categoryItems.map(item => (
        <option key={item.to} value={item.to}>
          {item.label}
        </option>
      ))}
    </select>
  )
}
