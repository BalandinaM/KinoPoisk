import type { FavoriteMovie } from '@/app/api/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type FavoritesState = {
  items: FavoriteMovie[]
}

const getInitialFavorites = (): FavoriteMovie[] => {
  const raw = localStorage.getItem('favorites')
  return raw ? JSON.parse(raw) : []
}

const initialState: FavoritesState = {
  items: getInitialFavorites(),
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  selectors: {
    selectFavorites: state => state.items,
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteMovie>) => {
      const exists = state.items.some(item => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
        localStorage.setItem('favorites', JSON.stringify(state.items))
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
    toggleFavorite: (state, action: PayloadAction<FavoriteMovie>) => {
      const exists = state.items.some(item => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
  },
})

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoritesSlice.actions
export const { selectFavorites } = favoritesSlice.selectors
export const favoritesReducer = favoritesSlice.reducer
