import type { TmdbError } from '../types'

export function isTmdbError(data: unknown): data is TmdbError {
  return (
    typeof data === 'object' &&
    data !== null &&
    'status_code' in data &&
    'status_message' in data
  )
}
