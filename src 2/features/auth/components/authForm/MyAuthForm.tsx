import { useState, FC } from 'react'
import { useForm } from 'react-hook-form'

import css from './authForm.module.scss'

import eyeClose from '../../../../assets/img/eyeCloseIcon.svg'
import eyeOpen from '../../../../assets/img/eyeOpenIcon.svg'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { LoginDataType } from '../../api/api'
import { signInThunk } from '../../model/authReducer'

type AuthDataType = LoginDataType

export const AuthForm: FC = () => {
  const dispatch = useAppDispatch()
  const isAuthError = useAppSelector((state) => state.auth.isAuthError)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const { register, handleSubmit } = useForm<AuthDataType>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const onClickSubmitHandler = (data: AuthDataType) => {
    dispatch(signInThunk(data))
  }

  return (
    <section>
      <form
        className={css.authForm__wrapper}
        onSubmit={handleSubmit(onClickSubmitHandler)}
      >
        <h3 className={css.authForm__title}>Авторизация</h3>

        <div className={css.authForm__inputBlock_wrapper}>
          <div className={css.authForm__input_wrapper}>
            <input
              className={
                isAuthError
                  ? `${css.authForm__input} ${css.authForm__input__error}`
                  : css.authForm__input
              }
              type="text"
              id="username"
              placeholder=" "
              {...register('username')}
            />

            <label className={css.authForm__input_label} htmlFor="username">
              Логин
            </label>
          </div>

          <div className={css.authForm__input_wrapper}>
            <input
              className={
                isAuthError
                  ? `${css.authForm__input} ${css.authForm__input__error}`
                  : css.authForm__input
              }
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              placeholder=" "
              {...register('password')}
            />

            <label className={css.authForm__input_label} htmlFor="password">
              Пароль
            </label>

            <button
              className={css.authForm__input_eyeBtn}
              onClick={() => {
                setIsShowPassword(!isShowPassword)
              }}
            >
              {isShowPassword ? (
                <img src={eyeOpen} alt="eye open" />
              ) : (
                <img src={eyeClose} alt="eye close" />
              )}
            </button>

            {isAuthError && (
              <div className={css.authForm__input_message}>
                <span style={{ color: 'red' }}>Неверный логин или пароль!</span>
              </div>
            )}
          </div>
        </div>

        <button className={css.authForm__button} type="submit">
          ВХОД
        </button>
      </form>
    </section>
  )
}
