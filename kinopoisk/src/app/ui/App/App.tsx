import { Routing } from '@/app/routing'
import './App.css'
import { Header } from '@/common/components/Header'

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  )
}
