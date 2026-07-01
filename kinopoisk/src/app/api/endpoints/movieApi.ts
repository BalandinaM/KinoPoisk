import { withZodCatch } from '@/common/utils'
import { baseApi } from '../baseApi'
import type { CreditsParams, DetailsParams } from '../types'
import { ApiEndpoints } from '@/common/constants'
import { creditsSchema, movieDetailsSchema } from '../schemas'

export const movieApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchMovieDetails: build.query({
      query: ({
        movie_id,
        language = 'ru-RU',
        append_to_response,
      }: DetailsParams) => ({
        url: `${ApiEndpoints.Movie}/${movie_id}`,
        params: { language, append_to_response },
      }),
      ...withZodCatch(movieDetailsSchema),
    }),
    fetchMovieCredits: build.query({
      query: ({
        movie_id,
        language = 'ru-RU',
        // append_to_response,
      }: CreditsParams) => ({
        url: `${ApiEndpoints.Movie}/${movie_id}/credits`,
        params: { language },
        // params: { language, append_to_response },
      }),
      ...withZodCatch(creditsSchema),
    }),
  }),
})

export const { useFetchMovieDetailsQuery, useFetchMovieCreditsQuery } = movieApi
