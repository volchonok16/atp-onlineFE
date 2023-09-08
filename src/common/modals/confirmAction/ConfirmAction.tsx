import { FC, ReactNode } from 'react'

import css from './confirmAction.module.scss'

import questionIcon from '../../../assets/img/confirmActionIcon.svg'
//import { CarType } from '../../../features/dataEditing/tabs/carsData/api/api'
import { Actions } from '../../../features/dataEditing/tabs/carsData/CarsData'
import { FuncButton } from '../../buttons/funcButton/MyFuncButton'

type PropsType = {
  actionTitle: Actions
  onClose: () => void
  onAction: () => void
  //actionButton: ReactNode
}

export const ConfirmAction: FC<PropsType> = ({
  onClose,
  onAction,
  actionTitle,
  //actionButton,
}) => {
  const capitalizeActionTitle =
    actionTitle[0]?.toUpperCase() + actionTitle.slice(1)
  const confirmAction = () => {
    console.log('confirmAction')
    onClose()
    onAction()
  }
  const chooseMessage = () => {
    console.log('chooseMessage')
    if (
      actionTitle === Actions.add ||
      actionTitle === Actions.update ||
      actionTitle === Actions.delete
    ) {
      return `Вы действительно хотите ${actionTitle} строку?`
    } else {
      return `Вы действительно хотите ${actionTitle} изменения?`
    }
  }

  return (
    <div className={css.modal}>
      <div className={css.popup}>
        <img src={questionIcon} alt="question" />
        <p>{chooseMessage()}</p>
        <div className={css.btnBlock}>
          {/*{actionButton}*/}
          <FuncButton
            title={capitalizeActionTitle}
            onClickHandler={confirmAction}
          />
          <FuncButton onClickHandler={onClose} title="Отменить" />
        </div>
      </div>
    </div>
  )
}
