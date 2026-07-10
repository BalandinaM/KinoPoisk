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
    const queries = Object.values(state.baseApi.queries || {})

    console.log(
      '📊 Все запросы:',
      queries.map(q => ({
        endpointName: q?.endpointName,
        status: q?.status,
      }))
    )

    const hasActiveQueries = queries.some(query => {
      // 1. Если запрос не в статусе 'pending' — пропускаем
      if (query?.status !== 'pending') return false

      // 2. Если эндпоинт в исключениях — возвращаем false (не показываем лоадер)
      if (excludedEndpoints.includes(query.endpointName)) {
        console.log('⚠️ Исключён:', query.endpointName)
        return false // ← ✅ просто false!
      }

      // 3. Все остальные 'pending' запросы — показываем лоадер
      console.log('✅ Активен:', query.endpointName)
      return true // ← ✅ раскомментировать!
    })

    console.log('🔍 hasActiveQueries:', hasActiveQueries)
    return hasActiveQueries
  })
}
