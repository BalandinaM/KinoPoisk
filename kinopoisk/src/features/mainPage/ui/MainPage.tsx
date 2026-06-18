import { useFetchNowPlayingMoviesQuery } from '@/app/api/endpoints/moviesApi'

export const MainPage = () => {
  const { data } = useFetchNowPlayingMoviesQuery({ page: 1, language: 'ru-RU' })
  console.log(data)

  return <div>MainPage</div>
}
