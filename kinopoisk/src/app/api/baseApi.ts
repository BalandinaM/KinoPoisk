import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      accept: 'application/json',
    },
    //это что бы добавить апикей в параметры запроса
    paramsSerializer: params => {
      const searchParams = new URLSearchParams()

      // Всегда добавляем api_key
      searchParams.append('api_key', import.meta.env.VITE_API_KEY)

      // Добавляем остальные параметры
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value))
        }
      })

      return searchParams.toString()
    },
  }),
  endpoints: () => ({}),
})
