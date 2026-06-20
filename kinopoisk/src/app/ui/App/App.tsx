import { Routing } from '@/app/routing'
import './App.css'
import { Header } from '@/common/components/header'
import { Toaster } from 'sonner'
import { useTheme } from '@/common/hooks/useTheme'
import { Footer } from '@/common/components/footer'

export const App = () => {
  const { mode } = useTheme()

  return (
    <div className="app" data-theme={mode}>
      <Header />
      <main className="main-content">
        <Routing />
      </main>
      <Footer />
      <Toaster richColors position="top-right" closeButton={true} />
    </div>
  )
}
