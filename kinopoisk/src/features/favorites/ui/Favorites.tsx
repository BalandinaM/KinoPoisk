import { MoviesSection } from '@/common/components/moviesSection'
import { useFavorite } from '@/common/hooks'

export const Favorites = () => {
  const { favorites } = useFavorite()

  return <MoviesSection sectionTitle="Избранное" movies={favorites} />
}
