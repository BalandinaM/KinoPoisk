import { ApiEndpoints } from '@/common/constants'
import { withZodCatch } from '@/common/utils'
import { baseApi } from '../baseApi'
import { genresResponseSchema, moviesResponseSchema } from '../schemas'
import type { BaseParams, DiscoverParams } from '../types'

export const filterApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchGenreMovieList: build.query({
      query: ({ language = 'ru-RU' }: BaseParams) => {
        return {
          url: `${ApiEndpoints.Genres}`,
          params: { language },
        }
      },
      ...withZodCatch(genresResponseSchema),
    }),
    fetchSortedMovies: build.query({
      query: ({
        with_genres,
        sort_by,
        vote_average_gte,
        vote_average_lte,
        page,
        language = 'ru-RU',
      }: DiscoverParams) => {
        return {
          url: `${ApiEndpoints.Discover}`,
          params: {
            with_genres,
            sort_by,
            'vote_average.gte': vote_average_gte,
            'vote_average.lte': vote_average_lte,
            page,
            language,
          },
        }
      },
      ...withZodCatch(moviesResponseSchema),
    }),
  }),
})

export const { useFetchGenreMovieListQuery, useFetchSortedMoviesQuery } =
  filterApi
