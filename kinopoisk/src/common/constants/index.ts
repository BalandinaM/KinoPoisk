export const Path = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filtered',
  Search: '/search',
  Favorites: '/favorites',
  NotFound: '*',
}

export const ApiEndpoints = {
  NowPlaying: '/movie/now_playing',
  Popular: '/movie/popular',
  TopRated: '/movie/top_rated',
  Upcoming: '/movie/upcoming',

  Search: '/search/movie',
  Discover: '/discover/movie',

  Movie: '/movie',
  Credits: (id: number) => `/movie/${id}/credits`,
  Similar: (id: number) => `/movie/${id}/similar`,

  Genres: '/genre/movie/list',

  Configuration: '/configuration',
}
