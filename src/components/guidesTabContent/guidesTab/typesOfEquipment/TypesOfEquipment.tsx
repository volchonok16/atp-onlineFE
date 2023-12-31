import { useEffect, useState } from 'react'

import { MechanismTypesTable } from './mechanismTypesTable/MechanismTypesTable'
import css from './typesOfEquipment.module.scss'

import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'

import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'
import { Actions } from '../../../../features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getMechanismTypesTC } from '../../../../redux/catalogs/directoriesReducer'

export const TypesOfEquipment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [actionTitle, setActionTitle] = useState<Actions>(Actions.save)
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: Actions | undefined) => {
    console.log(actionTitle)
    if (actionTitle) {
      setActionTitle(actionTitle)
      openModal()
    }
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMechanismTypesTC())
  }, [])

  return (
    <section className={css.typesOfEquipment__wrapper}>
      <MechanismTypesTable />

      <div className={css.typesOfEquipment__buttons_wrapper}>
        <IconButton typeOfIcon="Добавить" />
        <IconButton
          typeOfIcon="Удалить"
          actionTitle={Actions.delete}
          onClickHandler={actionTitleHandler}
        />
        <IconButton typeOfIcon="Сохранить" />
        <IconButton typeOfIcon="Отменить" />
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
