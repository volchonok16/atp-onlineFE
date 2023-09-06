import { useEffect, useState } from 'react'

import { PassesDataTable } from './PassesDataTable/PassesDataTable'
import css from './passesTab.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import {
  ActionTitleType,
  ConfirmAction,
} from '../../../../common/modals/confirmAction/ConfirmAction'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  getActiveEquipmentID,
  getPassesDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'

export const PassesTab = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [actionTitle, setActionTitle] = useState<ActionTitleType>('сохранить')
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: ActionTitleType | undefined) => {
    if (actionTitle) {
      setActionTitle(actionTitle)
      openModal()
    }
  }

  const dispatch = useAppDispatch()
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)

  useEffect(() => {
    dispatch(getPassesDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section className={css.passesTab__wrapper}>
      <div className={css.passesTab__table_wrapper}>
        <PassesDataTable />

        <div className={css.passesTab__table_buttons}>
          <IconButton typeOfIcon="Добавить" />
          <IconButton
            typeOfIcon="Удалить"
            actionTitle="удалить"
            onClickHandler={actionTitleHandler}
          />
          <IconButton typeOfIcon="Сохранить" />
          <IconButton typeOfIcon="Отменить" />
        </div>
      </div>

      <div className={css.passesTab__routeBlock_wrapper}>
        <span className={css.passesTab__routeBlock_title}>
          Маршрут движения
        </span>

        <div className={css.passesTab__routeBlock}></div>
      </div>

      <div className={css.passesTab__buttons_wrapper}>
        <FuncButton title="Сохранить " />
        <FuncButton title="Отменить" />
      </div>

      {isOpen && (
        <ConfirmAction
          actionTitle={actionTitle}
          onAbort={closeModal}
          onConfirm={showAction}
        />
      )}
    </section>
  )
}
