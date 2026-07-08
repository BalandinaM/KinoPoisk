import { ApiEndpoints } from '@/common/constants'
import { baseApi } from '../baseApi'
import { configurationSchema } from '../schemas/movie.zod'
import { withZodCatch } from '@/common/utils'

export const configApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getConfig: build.query({
      query: () => ({
        url: ApiEndpoints.Configuration,
      }),
      ...withZodCatch(configurationSchema),
    }),
  }),
})

export const { useGetConfigQuery } = configApi
