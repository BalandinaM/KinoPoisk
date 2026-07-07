import { Routing } from '@/app/routing'
import './App.css'
import { Header } from '@/common/components/header'
import { Toaster } from 'sonner'
import { useTheme } from '@/common/hooks/useTheme'
import { Footer } from '@/common/components/footer'
import { useGlobalLoading } from '@/common/hooks'
import { LinearProgress } from '@/common/components/linearProgress'
import { useGetConfigQuery } from '@/app/api/endpoints/configApi'

export const App = () => {
  useGetConfigQuery({})

  const { mode } = useTheme()
  const isGlobalLoading = useGlobalLoading()

  return (
    <div className="app" data-theme={mode}>
      <Header />
      {isGlobalLoading && <LinearProgress />}
      <main className="main-content">
        <Routing />
      </main>
      <Footer />
      <Toaster richColors position="top-right" closeButton={true} />
    </div>
  )
}
