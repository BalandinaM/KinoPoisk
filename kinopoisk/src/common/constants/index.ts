export const Path = {
  Main: '/',
  CategoryMovies: '/movies/:category',
  FilteredMovies: '/filtered',
  Search: '/search',
  Favorites: '/favorites',
  Movie: '/movie/:movie_id',
  NotFound: '*',
}

export const ApiEndpoints = {
  NowPlaying: '/movies/now_playing',
  Popular: '/movies/popular',
  TopRated: '/movies/top_rated',
  Upcoming: '/movies/upcoming',

  Search: '/search/movie',
  Discover: '/discover/movie',

  Movie: '/movie',
  Credits: (id: number) => `/movie/${id}/credits`,
  Similar: (id: number) => `/movie/${id}/similar`,

  Genres: '/genre/movie/list',

  Configuration: '/configuration',
}

// export const MoviesCategory = {
//   NowPlaying: 'now_playing',
//   Popular: 'popular',
//   TopRated: 'top_rated',
//   Upcoming: 'upcoming',
// }
