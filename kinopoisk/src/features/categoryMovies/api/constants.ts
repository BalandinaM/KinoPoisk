import { MoviesCategory } from '@/common/constants'

type CategoryValue = (typeof MoviesCategory)[keyof typeof MoviesCategory]
// Type: 'now_playing' | 'popular' | 'top_rated' | 'upcoming'

export const CATEGORY_TITLES: Record<CategoryValue, string> = {
  [MoviesCategory.NowPlaying]: 'Сейчас в прокате',
  [MoviesCategory.Popular]: 'Популярные фильмы',
  [MoviesCategory.TopRated]: 'Фильмы с высоким рейтингом',
  [MoviesCategory.Upcoming]: 'Скоро в прокате',
}

// Безопасная функция с type guard
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
