import { useEffect, useState } from 'react'

import css from './listOfEquipment.module.scss'
import { ListOfEquipmentsTable } from './listOfEquipmentsTable/ListOfEquipmentsTable'

import { FuncButton } from '../../../common/buttons/funcButton/MyFuncButton'
import { GeneralInfoButton } from '../../../common/buttons/generalInfoButton/MyGeneralInfoButton'
import { IconButton } from '../../../common/buttons/iconButton/MyIconButton'
import { CheckBox } from '../../../common/inputs/checkBox/MyCheckBox'
import { TextInput } from '../../../common/inputs/textInput/MyTextInput'
import { ConfirmAction } from '../../../common/modals/confirmAction/ConfirmAction'
import { Actions } from '../../../features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import {
  getListOfEquipmentsInfo,
  getListOfEquipmentsInfoData,
} from '../../../redux/catalogs/listOfEquipmentsReducer'

export const ListOfEquipment = () => {
  const dispatch = useAppDispatch()
  const equipmentsData = useAppSelector(getListOfEquipmentsInfo)

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

  useEffect(() => {
    dispatch(getListOfEquipmentsInfoData())
  }, [])

  return (
    <section className={css.listOfEquipments__wrapper}>
      <div className={css.listOfEquipments__buttons_wrapper}>
        <GeneralInfoButton title="Вся техника" isActive={true} />
        <GeneralInfoButton title="Автоколонна 1" />
        <GeneralInfoButton title="Упп" />
      </div>

      <div className={css.listOfEquipments__content_wrapper}>
        <ListOfEquipmentsTable />

        <div className={css.listOfEquipments__search_wrapper}>
          <div className={css.input_wrapper}>
            <TextInput placeholder="Поиск по марке или по номеру" />
          </div>

          <FuncButton title="Сброс" />

          <span className={css.count_info}>
            Всего в списке техники: {equipmentsData.length}
          </span>
        </div>

        <div className={css.listOfEquipments__table_buttonsBlock_wrapper}>
          <div className={css.listOfEquipments__table_buttons_wrapper}>
            <IconButton typeOfIcon="В начало" />
            <IconButton typeOfIcon="Предыдущий" />
            <IconButton typeOfIcon="Следующий" />
            <IconButton typeOfIcon="В конец" />
            <IconButton typeOfIcon="Добавить" />
            <IconButton
              typeOfIcon="Удалить"
              actionTitle={Actions.delete}
              onClickHandler={actionTitleHandler}
            />
            <IconButton typeOfIcon="Сохранить" />
            <IconButton typeOfIcon="Отменить" />
          </div>

          <div className={css.listOfEquipments__table_buttonsBlock_checkbox}>
            <CheckBox />

            <span
              className={
                css.listOfEquipments__table_buttonsBlock_checkbox_title
              }
            >
              Скрыть удаленную технику
            </span>
          </div>
        </div>
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
