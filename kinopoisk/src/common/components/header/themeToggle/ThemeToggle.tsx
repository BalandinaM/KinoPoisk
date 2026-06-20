import { IconButton } from '@mui/material'
import { useTheme } from '@common/hooks/useTheme'
import { Brightness7, Brightness4 } from '@mui/icons-material'

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme()

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <IconButton onClick={handleClick} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}
