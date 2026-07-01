import { getRatingColor } from '@/common/utils'
import s from './Rating.module.css'

type Props = {
  rating: number
  className?: string
}

export const Rating = ({ rating }: Props) => {
  return (
    <div className={s.rating} data-rating={getRatingColor(rating)}>
      {rating.toFixed(1)}
    </div>
  )
}
