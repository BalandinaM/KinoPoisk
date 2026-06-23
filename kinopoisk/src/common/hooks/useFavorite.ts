import { useState } from 'react'

// Тип для фильма в избранном
type FavoriteMovie = {
  id: number
  title: string
  posterUrl: string | null
  voteAverage: number
}

export const useFavorite = (movieId: number) => {
  // 1. При первом рендере проверяем localStorage
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.some((movie: FavoriteMovie) => movie.id === movieId)
  })

  // 2. Функция для добавления/удаления
  const toggleFavorite = (movie: FavoriteMovie) => {
    // 3. Берём текущий список из localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

    // 4. Проверяем, есть ли уже такой фильм
    const exists = favorites.some((item: FavoriteMovie) => item.id === movie.id)

    if (exists) {
      // 5. Если есть — удаляем
      const updated = favorites.filter(
        (item: FavoriteMovie) => item.id !== movie.id
      )
      localStorage.setItem('favorites', JSON.stringify(updated))
      setIsFavorite(false)
    } else {
      // 6. Если нет — добавляем
      favorites.push(movie)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setIsFavorite(true)
    }
  }

  // 7. Возвращаем состояние и функцию
  return { isFavorite, toggleFavorite }
}
