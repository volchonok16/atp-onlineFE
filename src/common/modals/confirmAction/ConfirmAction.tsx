import { FC } from 'react'

import css from './confirmAction.module.scss'

import questionIcon from '../../../assets/img/confirmActionIcon.svg'
import { CarType } from '../../../features/dataEditing/tabs/carsData/api/api'
import { FuncButton } from '../../buttons/funcButton/MyFuncButton'

// Модальное окно для подтверждения действия

export type ActionTitleType =
  | 'удалить'
  | 'редактировать'
  | 'добавить'
  | 'сохранить'
  | 'отменить'

type PropsType = {
  actionTitle: ActionTitleType
  onClose: () => void
  onAction: (car?: CarType) => void
}

export const ConfirmAction: FC<PropsType> = ({
  onClose,
  onAction,
  actionTitle,
}) => {
  const capitalizeActionTitle =
    actionTitle[0]?.toUpperCase() + actionTitle.slice(1)
  const confirmAction = () => {
    onAction()
    onClose()
  }
  const chooseMessage = () => {
    if (
      actionTitle === 'добавить' ||
      actionTitle === 'редактировать' ||
      actionTitle === 'удалить'
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
          <FuncButton
            title={capitalizeActionTitle}
            onClickHandler={confirmAction}
          />
          <FuncButton title="Отменить" onClickHandler={onClose} />
        </div>
      </div>
    </div>
  )
}
