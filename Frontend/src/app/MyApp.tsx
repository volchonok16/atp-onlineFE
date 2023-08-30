import { Navigate, Outlet } from 'react-router-dom'

import css from './app.module.scss'

import { Header } from './components/header/Header'

import { useAppSelector } from '../hooks/useAppSelector'

import { AUTH } from '../routes/paths'

export const App = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  if (!isLoggedIn) {
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
