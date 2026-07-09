import type { SortOption } from '@/app/api/types'
import type { InitialStateType } from './types'

export const RATING = {
  MIN: 0,
  MAX: 10,
  STEP: 0.1,
} as const

export const initialStateFilter: InitialStateType = {
  sort: 'popularity.desc',
  genres: [],
  ratingGte: RATING.MIN,
  ratingLte: RATING.MAX,
}

export const SORT_OPTIONS: { name: string; value: SortOption }[] = [
  { name: 'Популярные по убыванию', value: 'popularity.desc' },
  { name: 'Популярные по возрастанию', value: 'popularity.asc' },
  { name: 'Рейтинг по убыванию', value: 'vote_average.desc' },
  { name: 'Рейтинг по возрастанию', value: 'vote_average.asc' },
  { name: 'Дата релиза по убыванию', value: 'release_date.desc' },
  { name: 'Дата релиза по возрастанию', value: 'release_date.asc' },
  { name: 'Название А-Я', value: 'original_title.asc' },
  { name: 'Название Я-А', value: 'original_title.desc' },
] as const
