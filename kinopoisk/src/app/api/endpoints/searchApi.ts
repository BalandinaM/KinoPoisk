import { withZodCatch } from '@/common/utils'
import { baseApi } from '../baseApi'
import type { SearchParams } from '../types'
import { ApiEndpoints } from '@/common/constants'
import { searchResponseSchema } from '../schemas'

export const searchApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchMovies: build.query({
      query: ({ query, page = 1, language = 'ru-RU' }: SearchParams) => ({
        url: `${ApiEndpoints.Search}`,
        params: { query, language, page },
      }),
      ...withZodCatch(searchResponseSchema),
    }),
  }),
})

export const { useSearchMoviesQuery } = searchApi
