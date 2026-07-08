import { withZodCatch } from '@/common/utils'
import { baseApi } from '../baseApi'
import type { CreditsParams, DetailsParams, SimilarParams } from '../types'
import { ApiEndpoints } from '@/common/constants'
import {
  creditsSchema,
  movieDetailsSchema,
  similarMoviesResponseSchema,
} from '../schemas'

export const movieApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchMovieDetails: build.query({
      query: ({ movie_id, language = 'ru-RU' }: DetailsParams) => ({
        url: `${ApiEndpoints.Movie}/${movie_id}`,
        params: { language },
      }),
      ...withZodCatch(movieDetailsSchema),
    }),
    fetchMovieCredits: build.query({
      query: ({ movie_id, language = 'ru-RU' }: CreditsParams) => ({
        url: `${ApiEndpoints.Movie}/${movie_id}/credits`,
        params: { language },
      }),
      ...withZodCatch(creditsSchema),
    }),
    fetchMovieSimular: build.query({
      query: ({ movie_id, language = 'ru-RU', page = 1 }: SimilarParams) => ({
        url: `${ApiEndpoints.Movie}/${movie_id}/similar`,
        params: { language, page },
      }),
      ...withZodCatch(similarMoviesResponseSchema),
    }),
  }),
})

export const {
  useFetchMovieDetailsQuery,
  useFetchMovieCreditsQuery,
  useFetchMovieSimularQuery,
} = movieApi
