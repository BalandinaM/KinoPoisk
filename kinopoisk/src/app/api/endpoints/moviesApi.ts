import { baseApi } from '../baseApi'
import { moviesResponseSchema } from '../schemas'
import type { MoviesListParams } from '../types'

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchNowPlayingMovies: build.query({
      query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
        return {
          method: 'get',
          url: `movie/now_playing`,
          params: { page, language },
        }
      },
      responseSchema: moviesResponseSchema,
    }),
    fetchPopularMovies: build.query({
      query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
        return {
          method: 'get',
          url: `movie/popular`,
          params: { page, language },
        }
      },
      responseSchema: moviesResponseSchema,
    }),
    fetchTopRatedMovies: build.query({
      query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
        return {
          method: 'get',
          url: `movie/top_rated`,
          params: { page, language },
        }
      },
      responseSchema: moviesResponseSchema,
    }),
    fetchUpcomingMovies: build.query({
      query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
        return {
          method: 'get',
          url: `movie/upcoming`,
          params: { page, language },
        }
      },
      responseSchema: moviesResponseSchema,
    }),
  }),
})

export const {
  useFetchNowPlayingMoviesQuery,
  useFetchPopularMoviesQuery,
  useFetchTopRatedMoviesQuery,
  useFetchUpcomingMoviesQuery,
} = moviesApi
