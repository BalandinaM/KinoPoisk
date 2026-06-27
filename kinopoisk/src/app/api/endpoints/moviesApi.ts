import { withZodCatch } from '@/common/utils'
import { baseApi } from '../baseApi'
import { moviesResponseSchema } from '../schemas'
import type { CategoryParams } from '../types'
import { ApiEndpoints } from '@/common/constants'

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    // fetchNowPlayingMovies: build.query({
    //   query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
    //     return {
    //       url: ApiEndpoints.NowPlaying,
    //       params: { page, language },
    //     }
    //   },
    //   ...withZodCatch(moviesResponseSchema),
    // }),
    // fetchPopularMovies: build.query({
    //   query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
    //     return {
    //       url: ApiEndpoints.Popular,
    //       params: { page, language },
    //     }
    //   },
    //   ...withZodCatch(moviesResponseSchema),
    // }),
    // fetchTopRatedMovies: build.query({
    //   query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
    //     return {
    //       url: ApiEndpoints.TopRated,
    //       params: { page, language },
    //     }
    //   },
    //   ...withZodCatch(moviesResponseSchema),
    // }),
    // fetchUpcomingMovies: build.query({
    //   query: ({ page = 1, language = 'ru-RU' }: MoviesListParams) => {
    //     return {
    //       url: ApiEndpoints.Upcoming,
    //       params: { page, language },
    //     }
    //   },
    //   ...withZodCatch(moviesResponseSchema),
    // }),
    fetchMoviesByCategory: build.query({
      query: ({ category, page = 1, language = 'ru-RU' }: CategoryParams) => {
        return {
          url: `${ApiEndpoints.Movie}/${category}`,
          params: { page, language },
        }
      },
      ...withZodCatch(moviesResponseSchema),
    }),
  }),
})

export const {
  // useFetchNowPlayingMoviesQuery,
  // useFetchPopularMoviesQuery,
  // useFetchTopRatedMoviesQuery,
  // useFetchUpcomingMoviesQuery,
  useFetchMoviesByCategoryQuery,
} = moviesApi
