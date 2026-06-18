import { z } from 'zod'

// ===== Базовые схемы =====

// Схема для жанра
export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

// Схема для production компании
export const productionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
})

// Схема для production страны
export const productionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
})

// Схема для spoken языка
export const spokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
})

// ===== Схема фильма (основная) =====

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string().nullable(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
  release_date: z.string().nullable(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  adult: z.boolean(),
  original_language: z.string(),
  original_title: z.string(),
  video: z.boolean(),
})

// ===== Схема для списка фильмов (ответ API) =====

export const moviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(movieSchema),
  total_pages: z.number(),
  total_results: z.number(),
})

// ===== Схема для детальной информации о фильме =====

export const movieDetailsSchema = movieSchema.extend({
  belongs_to_collection: z
    .object({
      id: z.number(),
      name: z.string(),
      poster_path: z.string().nullable(),
      backdrop_path: z.string().nullable(),
    })
    .nullable(),
  budget: z.number(),
  genres: z.array(genreSchema),
  homepage: z.string().nullable(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  production_companies: z.array(productionCompanySchema),
  production_countries: z.array(productionCountrySchema),
  revenue: z.number(),
  runtime: z.number().nullable(),
  spoken_languages: z.array(spokenLanguageSchema),
  status: z.string(),
  tagline: z.string().nullable(),
})

// ===== Схема для актёра =====

export const castMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
  order: z.number(),
})

export const crewMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  job: z.string(),
  department: z.string(),
  profile_path: z.string().nullable(),
})

// ===== Схема для кредитов (актёры и съёмочная группа) =====

export const creditsSchema = z.object({
  id: z.number(),
  cast: z.array(castMemberSchema),
  crew: z.array(crewMemberSchema),
})

// ===== Схема для похожих фильмов =====

export const similarMoviesResponseSchema = moviesResponseSchema

// ===== Схема для жанров (список) =====

export const genresResponseSchema = z.object({
  genres: z.array(genreSchema),
})

// ===== Схема для конфигурации картинок =====

export const configurationSchema = z.object({
  images: z.object({
    base_url: z.string(),
    secure_base_url: z.string(),
    backdrop_sizes: z.array(z.string()),
    logo_sizes: z.array(z.string()),
    poster_sizes: z.array(z.string()),
    profile_sizes: z.array(z.string()),
    still_sizes: z.array(z.string()),
  }),
  change_keys: z.array(z.string()),
})

// ===== Схема для поиска =====

export const searchResponseSchema = moviesResponseSchema
