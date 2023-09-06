import { useEffect, useState } from 'react'

import { CommunicationsTypeTable } from './communicationsTypeTable/CommunicationsTypeTable'
import css from './typesOfTraffic.module.scss'

import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'

import {
  ActionTitleType,
  ConfirmAction,
} from '../../../../common/modals/confirmAction/ConfirmAction'

import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getCommunicationsTypeTC } from '../../../../redux/catalogs/directoriesReducer'

export const TypesOfTraffic = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [actionTitle, setActionTitle] = useState<ActionTitleType>('сохранить')
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: ActionTitleType | undefined) => {
    console.log(actionTitle)
    if (actionTitle) {
      setActionTitle(actionTitle)
      openModal()
    }
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCommunicationsTypeTC())
  }, [])

  return (
    <section className={css.typesOfTraffic__wrapper}>
      <CommunicationsTypeTable />

      <div className={css.typesOfTraffic__buttons_wrapper}>
        <IconButton typeOfIcon="Добавить" />
        <IconButton
          typeOfIcon="Удалить"
          actionTitle="удалить"
          onClickHandler={actionTitleHandler}
        />
        <IconButton typeOfIcon="Сохранить" />
        <IconButton typeOfIcon="Отменить" />
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
