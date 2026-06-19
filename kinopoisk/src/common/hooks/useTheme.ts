import { toggleTheme } from '@app/model/slices/themeSlice'
import { useAppDispatch } from './useAppDispatch'
import { useAppSelector } from './useAppSelector'

export const useTheme = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.theme.mode)

  return {
    mode,
    toggleTheme: () => dispatch(toggleTheme()),
    isDark: mode === 'dark',
  }
}
