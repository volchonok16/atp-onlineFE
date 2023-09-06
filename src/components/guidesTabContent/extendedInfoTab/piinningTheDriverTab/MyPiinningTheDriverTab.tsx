import { useEffect, useState } from 'react'

import { DriverHoldingTable } from './DriverHoldingTable/DriverHoldingTable'
import css from './piinningTheDriverTab.module.scss'

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
  getDriverHoldingDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'

export const PinningTheDriverTab = () => {
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
    dispatch(getDriverHoldingDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section className={css.pinningTheDriverTab__wrapper}>
      <div className={css.pinningTheDriverTab__table_wrapper}>
        <DriverHoldingTable />

        <div className={css.pinningTheDriverTab__buttons_wrapper}>
          <div className={css.pinningTheDriverTab__buttons}>
            <IconButton typeOfIcon="Добавить" />
            <IconButton
              typeOfIcon="Удалить"
              actionTitle="удалить"
              onClickHandler={actionTitleHandler}
            />
            <IconButton typeOfIcon="Сохранить" />
            <IconButton typeOfIcon="Отменить" />
          </div>

          <FuncButton title="Акты" />
        </div>
      </div>

      <div className={css.pinningTheDriverTab__buttonsBlock_wrapper}>
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
