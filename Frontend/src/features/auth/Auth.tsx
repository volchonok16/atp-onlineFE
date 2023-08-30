import { Navigate } from 'react-router-dom'

import css from './auth.module.scss'
import { AuthForm } from './components/authForm/MyAuthForm'

import { useAppSelector } from '../../hooks/useAppSelector'
import { DATA_PREPARATION_TAB, ORDERS } from '../../routes/paths'

export const AuthLayout = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to={`${ORDERS}/${DATA_PREPARATION_TAB}`} />
  }

  return (
    <section className={css.authLayout__wrapper}>
      <AuthForm />
    </section>
  )
}
