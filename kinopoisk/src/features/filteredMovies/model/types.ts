import type { SortOption } from '@/app/api/types'

export type InitialStateType = {
  sort: SortOption
  ratingGte: number
  ratingLte: number
}
