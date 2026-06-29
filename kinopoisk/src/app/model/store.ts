import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { configApi, moviesApi } from '../api/endpoints'
import { themeReducer } from './slices/themeSlice'
import { baseApi } from '../api/baseApi'
import { favoritesReducer } from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoritesReducer,
    // [moviesApi.reducerPath]: moviesApi.reducer,
    // [configApi.reducerPath]: configApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
