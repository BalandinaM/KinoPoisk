export const Path = {
  Main: '/',
  CategoryMovies: '/movies/:category',
  PopularMovies: '/movies/popular',
  FilteredMovies: '/filtered',
  Search: '/search',
  Favorites: '/favorites',
  Movie: '/movie/:movie_id',
  NotFound: '*',
} as const

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
} as const

export const MoviesCategory = {
  NowPlaying: 'now_playing',
  Popular: 'popular',
  TopRated: 'top_rated',
  Upcoming: 'upcoming',
} as const

export const categoryTitles = {
  popular: 'Популярные фильмы',
  now_playing: 'Сейчас в прокате',
  top_rated: 'Фильмы с высоким рейтингом',
  upcoming: 'Скоро в прокате',
} as const

export const PAGINATION = {
  DEFAULT_PAGE: 1,
}
