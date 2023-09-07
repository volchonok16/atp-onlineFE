import { useEffect, useState } from 'react'

import css from './loadingAddresses.module.scss'

import { LoadingUnloadingAddressesTable } from './loadingUnloadingAddressesTable/LoadingUnloadingAddressesTable'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'

import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'

import { Actions } from '../../../../features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getLoadingUnloadingAddressesTC } from '../../../../redux/catalogs/directoriesReducer'

export const LoadingAddresses: React.FC = () => {
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
    dispatch(getLoadingUnloadingAddressesTC())
  }, [])

  return (
    <section className={css.loadingAddresses__wrapper}>
      <LoadingUnloadingAddressesTable />

      <div className={css.loadingAddresses__searchBlock_wrapper}>
        <div className={css.loadingAddresses__searchBlock}>
          <TextInput placeholder="Поиск по адресам" />
        </div>

        <FuncButton title="Очистить" />
      </div>

      <div className={css.loadingAddresses__buttons_wrapper}>
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
