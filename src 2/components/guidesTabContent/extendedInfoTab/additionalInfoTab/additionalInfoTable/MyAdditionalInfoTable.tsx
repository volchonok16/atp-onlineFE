import { FC, useState } from 'react'

import css from './additionalInfoTable.module.scss'

import { InfoTable } from './InfoTable/InfoTable'

import { IconButton } from '../../../../../common/buttons/iconButton/MyIconButton'

import {
  ActionTitleType,
  ConfirmAction,
} from '../../../../../common/modals/confirmAction/ConfirmAction'

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
  const [actionTitle, setActionTitle] = useState<ActionTitleType>('сохранить')
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: ActionTitleType | undefined) => {
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
          actionTitle="удалить"
          onClickHandler={actionTitleHandler}
        />
        <IconButton typeOfIcon="Сохранить" />
        <IconButton typeOfIcon="Отменить" />
        <IconButton typeOfIcon="Редактировать" />
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
