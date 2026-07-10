import { handleErrors } from '@/common/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: async (args, api, extraOptions) => {
    // await new Promise(resolve => setTimeout(resolve, 5000)) // delay
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      headers: {
        accept: 'application/json',
      },
      prepareHeaders: headers => {
        headers.set(
          'Authorization',
          `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        )
        return headers
      },
    })(args, api, extraOptions)

    if (result.error) {
      handleErrors(result.error)
    }

    return result
  },

  endpoints: () => ({}),
})
