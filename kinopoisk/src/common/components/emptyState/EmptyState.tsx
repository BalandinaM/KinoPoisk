import s from './EmptyState.module.css'

export const EmptyState = ({
  message = 'Нет данных',
}: {
  message?: string
}) => {
  return (
    <div className={s.empty}>
      <p>{message}</p>
    </div>
  )
}
