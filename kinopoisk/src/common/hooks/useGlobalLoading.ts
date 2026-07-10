import { moviesApi } from '@/app/api/endpoints'
import { configApi } from '@/app/api/endpoints'
import type { RootState } from '@/app/model/store.ts'
import { useSelector } from 'react-redux'

// Список эндпоинтов для исключения из глобального индикатора
const excludedEndpoints = [
  moviesApi.endpoints.fetchMoviesByCategory.name,
  configApi.endpoints.getConfig.name,
]

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    // Получаем все активные запросы из RTK Query API
    const queries = Object.values(state.baseApi.queries || {})
    const mutations = Object.values(state.baseApi.mutations || {})

    const hasActiveQueries = queries.some(query => {
      if (query?.status !== 'pending') return
      if (excludedEndpoints.includes(query.endpointName)) {
        const completedQueries = queries.filter(q => q?.status === 'fulfilled')
        return completedQueries.length > 0
      }
    })

    const hasActiveMutations = mutations.some(
      mutation => mutation?.status === 'pending'
    )

    return hasActiveQueries || hasActiveMutations
  })
}
