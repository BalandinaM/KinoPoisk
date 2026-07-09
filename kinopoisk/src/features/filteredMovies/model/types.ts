import type { SortOption } from '@/app/api/types'

export type InitialStateType = {
  sort: SortOption
  genres: number[]
  ratingGte: number
  ratingLte: number
}
