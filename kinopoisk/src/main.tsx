import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app/ui/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/model/store'
import '@/common/styles/variables.css'
import { SkeletonTheme } from 'react-loading-skeleton'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <SkeletonTheme
        baseColor="var(--color-bg)"
        highlightColor="var(--color-border)"
      >
        <App />
      </SkeletonTheme>
    </Provider>
  </BrowserRouter>
)
