import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { errorToast } from './errorToast'
import { isTmdbError } from './isTmdbErrors'

export const handleErrors = (error: FetchBaseQueryError) => {
  if (!error) return

  // 1. Ошибки TMDB (все, включая 404, 429, 500 и т.д.)
  if (error.data && isTmdbError(error.data)) {
    errorToast(error.data.status_message)
    return
  }

  // 2. Технические ошибки (сеть, парсинг, таймаут)
  if (
    error.status === 'FETCH_ERROR' ||
    error.status === 'PARSING_ERROR' ||
    error.status === 'CUSTOM_ERROR' ||
    error.status === 'TIMEOUT_ERROR'
  ) {
    errorToast(error.error || 'Network error. Please check your connection.')
    return
  }

  // 3. Всё остальное (страховка)
  errorToast('Something went wrong. Please try again later.')
}
