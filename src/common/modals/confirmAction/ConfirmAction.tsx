import { FC } from 'react'

import css from './confirmAction.module.scss'

import questionIcon from '../../../assets/img/confirmActionIcon.svg'

import { Actions } from '../../../features/dataEditing/tabs/carsData/CarsData'
import { FuncButton } from '../../buttons/funcButton/MyFuncButton'
import { Modal } from '../Modal'

type PropsType = {
  actionTitle: Actions
  onClose: VoidFunction
  onAction: VoidFunction
  positiveLabel?: string
  negativeLabel?: string
}

export const ConfirmAction: FC<PropsType> = ({
  onClose,
  onAction,
  actionTitle,
  positiveLabel,
  negativeLabel,
}) => {
  const capitalizeActionTitle =
    actionTitle[0]?.toUpperCase() + actionTitle.slice(1)

  const chooseMessage = () => {
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
    <Modal>
      <div className={css.popup}>
        <img src={questionIcon} alt="question" />
        <p>{chooseMessage()}</p>
        <div className={css.btnBlock}>
          <FuncButton
            title={positiveLabel || capitalizeActionTitle}
            onClickHandler={onAction}
          />
          <FuncButton
            onClickHandler={onClose}
            title={negativeLabel || 'Отменить'}
          />
        </div>
      </div>
    </Modal>
  )
}
