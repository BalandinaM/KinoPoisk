import { withZodCatch } from '@/common/utils'
import { baseApi } from '../baseApi'
import { moviesResponseSchema } from '../schemas'
import type { CategoryParams } from '../types'
import { ApiEndpoints } from '@/common/constants'

export const moviesApi = baseApi.injectEndpoints({
  endpoints: build => ({
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

export const { useFetchMoviesByCategoryQuery } = moviesApi
