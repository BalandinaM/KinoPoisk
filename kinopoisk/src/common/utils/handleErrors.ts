import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { errorToast } from './errorToast'
import { isTmdbError } from './isTmdbErrors'

export const handleErrors = (error: FetchBaseQueryError) => {
  if (!error) return

  if (error.data && isTmdbError(error.data)) {
    errorToast(error.data.status_message)
    return
  }

  if (
    error.status === 'FETCH_ERROR' ||
    error.status === 'PARSING_ERROR' ||
    error.status === 'CUSTOM_ERROR' ||
    error.status === 'TIMEOUT_ERROR'
  ) {
    errorToast(error.error || 'Network error. Please check your connection.')
    return
  }

  errorToast('Something went wrong. Please try again later.')
}
