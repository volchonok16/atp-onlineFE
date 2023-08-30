import React from 'react'

import css from './iconButton.module.scss'

import closeIcon from '../../../assets/img/closeIcon.svg'
import editIcon from '../../../assets/img/editIcon.svg'
import deleteLineIcon from '../../../assets/img/minusIcon.svg'
import nextLineIcon from '../../../assets/img/nextIcon.svg'
import addLineIcon from '../../../assets/img/plusIcon.svg'
import previousLineIcon from '../../../assets/img/previousIcon.svg'
import saveIcon from '../../../assets/img/saveIcon.svg'
import searchIcon from '../../../assets/img/searchIcon.svg'
import toTheFirstLineIcon from '../../../assets/img/toTheFirstLineIcon.svg'
import toTheLastLineIcon from '../../../assets/img/toTheLastLineIcon.svg'
import { ActionTitleType } from '../../modals/confirmAction/ConfirmAction'

type ButtonPropsType = {
  typeOfIcon: string
  actionTitle?: ActionTitleType
  onClickHandler?: (actionTitle: ActionTitleType | undefined) => void
}

export const IconButton: React.FC<ButtonPropsType> = ({
  onClickHandler,
  typeOfIcon,
  actionTitle,
}) => {
  return (
    <button
      className={css.button}
      onClick={() => (onClickHandler ? onClickHandler(actionTitle) : '')}
    >
      {typeOfIcon === 'Поиск' && <img src={searchIcon} alt="Поиск" />}
      {typeOfIcon === 'Отменить' && <img src={closeIcon} alt="отменить" />}
      {typeOfIcon === 'Сохранить' && <img src={saveIcon} alt="Сохранить" />}
      {typeOfIcon === 'Добавить' && <img src={addLineIcon} alt="Добавить" />}
      {typeOfIcon === 'Удалить' && <img src={deleteLineIcon} alt="Удалить" />}
      {typeOfIcon === 'Следующий' && <img src={nextLineIcon} alt="Следующий" />}
      {typeOfIcon === 'Предыдущий' && (
        <img src={previousLineIcon} alt="Предыдущий" />
      )}
      {typeOfIcon === 'В начало' && (
        <img src={toTheFirstLineIcon} alt="В начало" />
      )}
      {typeOfIcon === 'В конец' && (
        <img src={toTheLastLineIcon} alt="В конец" />
      )}
      {typeOfIcon === 'Редактировать' && (
        <img src={editIcon} alt="Редактировать" />
      )}
    </button>
  )
}
