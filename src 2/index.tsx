// eslint-disable-next-line check-file/filename-naming-convention
import './index.css'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from './app/model/store'
import reportWebVitals from './reportWebVitals'
import { router } from './routes/router'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h2>Loading ....</h2>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
)

reportWebVitals()
