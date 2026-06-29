import {
  selectFavorites,
  toggleFavorite,
} from '@/app/model/slices/favoritesSlice'
import { useAppDispatch } from './useAppDispatch'
import { useAppSelector } from './useAppSelector'

export const useFavorite = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(selectFavorites)

  const isFavorite = (movieId: number) => {
    return favorites.some(item => item.id === movieId)
  }

  const toggle = (movie: {
    id: number
    title: string
    poster_path: string | null
    vote_average: number
  }) => {
    dispatch(
      toggleFavorite({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
      })
    )
  }

  return { favorites, isFavorite, toggle }
}
