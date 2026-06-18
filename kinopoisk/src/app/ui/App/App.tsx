import { Routing } from '@/app/routing'
import './App.css'
import { Header } from '@/common/components/Header'
import { Toaster } from 'sonner'

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routing />
      <Toaster richColors position="top-right" closeButton={true} />
    </div>
  )
}
