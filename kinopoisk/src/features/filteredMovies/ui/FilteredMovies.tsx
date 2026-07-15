import s from './FilteredMovies.module.css'
import {
  useFetchGenreMovieListQuery,
  useFetchSortedMoviesQuery,
} from '@/app/api/endpoints/filterApi'
import type { SortOption } from '@/app/api/types'
import { useEffect } from 'react'
import { initialStateFilter } from '../model'
import { MoviesSection } from '@/common/components/moviesSection'
import { RatingSlider } from './ratingSlider'
import { useDebounceValue } from '@/common/hooks'
import { SortFilter } from './sortFilter'
import { GenresFilter } from './genresFilter'
import { MoviesSectionSkeleton } from '@/common/components/moviesSection/moviesSectionSkeleton'
import { Pagination } from '@/common/components/pagination/Pagination'
import { PAGINATION } from '@/common/constants'
import { useSearchParams } from 'react-router-dom'

export const FilteredMovies = () => {
  const { data: genresData, isLoading: isLoadingGenres } =
    useFetchGenreMovieListQuery({
      language: 'ru-RU',
    })
  const [searchParams, setSearchParams] = useSearchParams()
  const sort =
    (searchParams.get('sort') as SortOption) || initialStateFilter.sort
  const genres =
    searchParams.get('genres')?.split(',').map(Number) ||
    initialStateFilter.genres
  const ratingMin =
    Number(searchParams.get('ratingMin')) || initialStateFilter.ratingGte
  const ratingMax =
    Number(searchParams.get('ratingMax')) || initialStateFilter.ratingLte
  const ratingRange: [number, number] = [ratingMin, ratingMax]
  const currentPage =
    Number(searchParams.get('page')) || PAGINATION.DEFAULT_PAGE

  const debounceSort = useDebounceValue(sort)
  const debounceRating = useDebounceValue(ratingRange)
  const debounceGenres = useDebounceValue(genres)

  const { data: moviesSorted, isLoading } = useFetchSortedMoviesQuery({
    with_genres: debounceGenres.length ? debounceGenres.join(',') : undefined,
    sort_by: debounceSort,
    vote_average_gte: debounceRating[0],
    vote_average_lte: debounceRating[1],
    page: currentPage,
  })

  const updateFilters = (
    updates: Record<string, string | number | number[]>
  ) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev)
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === null || value === '') {
          params.delete(key)
        } else if (Array.isArray(value)) {
          params.set(key, value.join(','))
        } else {
          params.set(key, String(value))
        }
      })

      params.set('page', String(PAGINATION.DEFAULT_PAGE))

      return params
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handleRatingChange = (newRange: [number, number]) => {
    updateFilters({
      ratingMin: newRange[0],
      ratingMax: newRange[1],
    })
  }

  const handleGenreToggle = (genreId: number) => {
    const newGenres = genres.includes(genreId)
      ? genres.filter(id => id !== genreId)
      : [...genres, genreId]
    updateFilters({ genres: newGenres })
  }

  const handlePageChange = (page: number) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev)
      params.set('page', String(page))
      return params
    })
  }

  const handleResetFilters = () => {
    setSearchParams({})
  }

  return (
    <div className={s.wrap}>
      <div className={s.wrapFilters}>
        <div className={s.wrapSortAndRating}>
          <SortFilter
            sort={sort}
            setSort={newSort => updateFilters({ sort: newSort })}
          />
          <RatingSlider
            value={ratingRange}
            onChange={newValue => {
              handleRatingChange(newValue)
            }}
          />
        </div>
        <GenresFilter
          genres={genresData?.genres}
          selectedGenres={genres}
          handleGenreToggle={handleGenreToggle}
          isLoading={isLoadingGenres}
        />
        <button className={s.resetButton} onClick={handleResetFilters}>
          Сбросить фильтры
        </button>
      </div>
      {isLoading ? (
        <MoviesSectionSkeleton
          variant="default"
          count={20}
          structureVariant="noHeader"
        />
      ) : (
        <>
          <MoviesSection movies={moviesSorted?.results} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={page => handlePageChange(page)}
            pagesCount={moviesSorted?.total_pages || PAGINATION.DEFAULT_PAGE}
          />
        </>
      )}
    </div>
  )
}
