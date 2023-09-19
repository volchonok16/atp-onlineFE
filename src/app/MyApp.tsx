import { Navigate, Outlet } from 'react-router-dom'

import css from './app.module.scss'

import { Header } from './components/header/Header'

import { AUTH } from '../routes/paths'
import { getToken } from '../utils/getToken'

export const App = () => {
  const isToken = getToken()

  if (!isToken) {
    return <Navigate to={AUTH} />
  }

  return (
    <div className={css.app__wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
