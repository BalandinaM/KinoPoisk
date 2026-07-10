import { moviesApi } from '@/app/api/endpoints'
import { configApi } from '@/app/api/endpoints'
import type { RootState } from '@/app/model/store.ts'
import { useSelector } from 'react-redux'

const excludedEndpoints = [
  moviesApi.endpoints.fetchMoviesByCategory.name,
  configApi.endpoints.getConfig.name,
]

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = Object.values(state.baseApi.queries || {})

    const hasActiveQueries = queries.some(query => {
      // 1. Если запрос не в статусе 'pending' — пропускаем
      if (query?.status !== 'pending') return false

      // 2. Если эндпоинт в исключениях — возвращаем false (не показываем лоадер)
      if (excludedEndpoints.includes(query.endpointName)) {
        return false
      }

      // 3. Все остальные 'pending' запросы — показываем лоадер
      return true
    })

    return hasActiveQueries
  })
}
