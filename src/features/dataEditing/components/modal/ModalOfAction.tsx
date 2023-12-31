import { FC } from 'react'

import css from './ModalOfAction.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
export type PropsType = {
  onClose: VoidFunction
}
export const ModalOfAction: FC<PropsType> = ({ onClose }) => {
  return (
    <div className={css.popup}>
      <p className={css.text}>Выберете, пожалуйста, строку</p>
      <FuncButton title={'Ок'} onClickHandler={onClose} />
    </div>
  )
}
