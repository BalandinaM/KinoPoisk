import { Routing } from '@/app/routing'
import './App.css'
import { Header } from '@/common/components/Header'
import { Toaster } from 'sonner'
import { useTheme } from '@/common/hooks/useTheme'

export const App = () => {
  const { mode } = useTheme()

  return (
    <div className="app" data-theme={mode}>
      <Header />
      <Routing />
      <Toaster richColors position="top-right" closeButton={true} />
    </div>
  )
}
