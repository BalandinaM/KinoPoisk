import { useGetConfigQuery } from '@/app/api/endpoints/configApi'

export const useImageUrl = () => {
  const { data: config } = useGetConfigQuery({})

  const baseUrl =
    config?.images?.secure_base_url || 'https://image.tmdb.org/t/p/'
  const posterSizes = config?.images?.poster_sizes || ['w500']

  // Функция для получения полного URL постера
  const getPosterUrl = (path: string | null, size: string = 'w500'): string => {
    if (!path) return '/placeholder.webp' // заглушка, если нет картинки

    // Проверяем, что размер есть в списке доступных
    const validSize = posterSizes.includes(size) ? size : 'w500'

    return `${baseUrl}${validSize}${path}`
  }

  // Функция для получения фонового изображения
  const getBackdropUrl = (
    path: string | null,
    size: string = 'w780'
  ): string => {
    if (!path) return '/placeholder-backdrop.webp'
    return `${baseUrl}${size}${path}`
  }

  return { getPosterUrl, getBackdropUrl, isLoading: !config }
}
