import { FC, useState } from 'react'

import css from './additionalInfoTable.module.scss'

import { InfoTable } from './InfoTable/InfoTable'

import { IconButton } from '../../../../../common/buttons/iconButton/MyIconButton'

import { ConfirmAction } from '../../../../../common/modals/confirmAction/ConfirmAction'
import { Actions } from '../../../../../features/dataEditing/tabs/carsData/CarsData'

type AdditionalInfoTabPropsType = {
  title: string
  data: TableDataType[]
}

export type TableDataType = {
  key: number
  date_ot: string
  date_do: string
}

export const AdditionalInfoTable: FC<AdditionalInfoTabPropsType> = ({
  title,
  data,
}) => {
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

  return (
    <section className={css.additionalInfoTable__wrapper}>
      <div className={css.additionalInfoTable__table_wrapper}>
        <div className={css.additionalInfoTable__table_title}>{title}</div>

        <InfoTable data={data} />
      </div>

      <div className={css.additionalInfoTable__table_buttons}>
        <IconButton typeOfIcon="Добавить" />
        <IconButton
          typeOfIcon="Удалить"
          actionTitle={Actions.delete}
          onClickHandler={actionTitleHandler}
        />
        <IconButton typeOfIcon="Сохранить" />
        <IconButton typeOfIcon="Отменить" />
        <IconButton typeOfIcon="Редактировать" />
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
