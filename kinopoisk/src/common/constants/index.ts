export const Path = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
  NotFound: '*',
} as const

// пока не использую, но пусть будет, вдруг пригодится
export const ApiEndpoints = {
  Popular: '/movie/popular',
  TopRated: '/movie/top_rated',
  Upcoming: '/movie/upcoming',
  NowPlaying: '/movie/now_playing',
  Search: '/search/movie',
} as const
