import { categoryTitles } from '../constants'

export const getCategoryTitle = (category: string) => {
  return categoryTitles[category as keyof typeof categoryTitles] || category
}
