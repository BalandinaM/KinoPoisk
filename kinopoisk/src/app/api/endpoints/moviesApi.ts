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
  }),
})

export const { useFetchNowPlayingMoviesQuery } = moviesApi
