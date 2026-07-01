export const getRatingColor = (rating: number) => {
  if (rating < 5) return 'low'
  if (rating < 8) return 'medium'
  return 'high'
}
