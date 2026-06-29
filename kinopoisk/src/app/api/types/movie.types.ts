import { z } from 'zod'
import {
  castMemberSchema,
  configurationSchema,
  creditsSchema,
  crewMemberSchema,
  genreSchema,
  genresResponseSchema,
  movieDetailsSchema,
  movieSchema,
  moviesResponseSchema,
  productionCompanySchema,
  productionCountrySchema,
  searchResponseSchema,
  similarMoviesResponseSchema,
  spokenLanguageSchema,
} from '../schemas'

export type Genre = z.infer<typeof genreSchema>
export type ProductionCompany = z.infer<typeof productionCompanySchema>
export type ProductionCountry = z.infer<typeof productionCountrySchema>
export type SpokenLanguage = z.infer<typeof spokenLanguageSchema>
export type Movie = z.infer<typeof movieSchema>
export type MoviesResponse = z.infer<typeof moviesResponseSchema>
export type MovieDetails = z.infer<typeof movieDetailsSchema>
export type CastMember = z.infer<typeof castMemberSchema>
export type CrewMember = z.infer<typeof crewMemberSchema>
export type Credits = z.infer<typeof creditsSchema>
export type SimilarMoviesResponse = z.infer<typeof similarMoviesResponseSchema>
export type GenresResponse = z.infer<typeof genresResponseSchema>
export type Configuration = z.infer<typeof configurationSchema>
export type SearchResponse = z.infer<typeof searchResponseSchema>

// ===== Базовые параметры =====
export type BaseParams = {
  page?: number
  language?: string
  region?: string
}

// ===== Для популярных, топ-рейтинг, скоро, сейчас в кино =====
export type MoviesListParams = BaseParams

// ===== Для поиска =====
export type SearchParams = BaseParams & {
  query: string
  include_adult?: boolean
  year?: number
  primary_release_year?: number
}

// ===== Для выбора категории  =====
export type CategoryParams = BaseParams & {
  category: string
}

// ===== Для фильтрации (discover) =====
export type DiscoverParams = BaseParams & {
  sort_by?: SortOption
  vote_average_gte?: number
  vote_average_lte?: number
  with_genres?: string
  without_genres?: string
  year?: number
  primary_release_year?: number
  with_original_language?: string
  include_adult?: boolean
}

// ===== Для деталей фильма =====
export type DetailsParams = {
  movie_id: number
  language?: string
  append_to_response?: string
}

// ===== Для кредитов (актёры) =====
export type CreditsParams = {
  movie_id: number
  language?: string
}

// ===== Для похожих фильмов =====
export type SimilarParams = {
  movie_id: number
  page?: number
  language?: string
}

// ===== Тип для сортировки =====
export type SortOption =
  | 'popularity.desc'
  | 'popularity.asc'
  | 'vote_average.desc'
  | 'vote_average.asc'
  | 'release_date.desc'
  | 'release_date.asc'
  | 'original_title.asc'
  | 'original_title.desc'

export type FavoriteMovie = {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
}
