import { useEffect, useState } from 'react'

import { TransportationTypeTable } from './transportationTypeTable/TransportationTypeTable'
import css from './typesOfTransportation.module.scss'

import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'

import { Actions } from '../../../../features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getTransportationsTypeTC } from '../../../../redux/catalogs/directoriesReducer'

export const TypesOfTransportation = () => {
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

  useEffect(() => {
    dispatch(getTransportationsTypeTC())
  }, [])

  return (
    <section className={css.typesOfTransportation__wrapper}>
      <TransportationTypeTable />

      <div className={css.typesOfTransportation__buttons_wrapper}>
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
