import { MoviesCategory } from '@/common/constants'

type CategoryValue = (typeof MoviesCategory)[keyof typeof MoviesCategory]

export const CATEGORY_TITLES: Record<CategoryValue, string> = {
  [MoviesCategory.NowPlaying]: 'Сейчас в прокате',
  [MoviesCategory.Popular]: 'Популярные фильмы',
  [MoviesCategory.TopRated]: 'Фильмы с высоким рейтингом',
  [MoviesCategory.Upcoming]: 'Скоро в прокате',
}

export const isValidCategory = (
  category: string
): category is CategoryValue => {
  return Object.values(MoviesCategory).includes(category as CategoryValue)
}

export const getCategoryTitle = (category: string): string => {
  if (isValidCategory(category)) {
    return CATEGORY_TITLES[category]
  }
  return category
}

export const categoryItems = [
  { to: MoviesCategory.NowPlaying, label: 'Сейчас в прокате' },
  { to: MoviesCategory.Popular, label: 'Популярные фильмы' },
  { to: MoviesCategory.TopRated, label: 'С высоким рейтингом' },
  { to: MoviesCategory.Upcoming, label: 'Скоро в прокате' },
]
