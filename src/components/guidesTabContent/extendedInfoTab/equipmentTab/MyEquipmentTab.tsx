import { useEffect, useState } from 'react'

import { CarEquipmentTable } from './CarEquipmentTable/CarEquipmentTable'
import css from './equipmentTab.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'
import { Actions } from '../../../../features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  getActiveEquipmentID,
  getCarEquipmentDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'

export const EquipmentTab = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [actionTitle, setActionTitle] = useState<Actions>(Actions.save)
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: Actions | undefined) => {
    if (actionTitle) {
      setActionTitle(actionTitle)
      openModal()
    }
  }

  const dispatch = useAppDispatch()
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)

  useEffect(() => {
    dispatch(getCarEquipmentDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section className={css.equipmentTab__wrapper}>
      <div className={css.equipmentTab__table_wrapper}>
        <CarEquipmentTable />

        <div className={css.equipmentTab__buttons_wrapper}>
          <div className={css.equipmentTab__buttons}>
            <IconButton typeOfIcon="Добавить" />
            <IconButton
              typeOfIcon="Удалить"
              actionTitle={Actions.delete}
              onClickHandler={actionTitleHandler}
            />
            <IconButton typeOfIcon="Сохранить" />
            <IconButton typeOfIcon="Отменить" />
          </div>

          <FuncButton title="Акт комплектации" />
        </div>
      </div>

      <div className={css.equipmentTab__buttonsBlock_wrapper}>
        <FuncButton title="Сохранить " />
        <FuncButton title="Отменить" />
      </div>

      {isOpen && (
        <ConfirmAction
          actionTitle={actionTitle}
          onClose={closeModal}
          onAction={showAction}
        />
      )}
    </section>
  )
}
