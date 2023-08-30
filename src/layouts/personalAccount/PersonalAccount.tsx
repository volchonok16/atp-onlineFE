import { useNavigate } from 'react-router-dom'

import css from './personalAccountStyle.module.scss'

import { FuncButton } from '../../common/buttons/funcButton/MyFuncButton'

export const PersonalAccount = () => {
  const navigate = useNavigate()

  const goToMainPage = () => {
    navigate(-1)
  }

  return (
    <div className={css.container}>
      <span className={css.text}>Here will be your Personal Data</span>
      <FuncButton
        title={'Вернутся на главную страницу'}
        onClickHandler={goToMainPage}
      />
    </div>
  )
}
