import { useState } from 'react'

import css from './documentTabTablesBlock.module.scss'

import { RefuelingCardsTable } from './RefuelingCardsTable/RefuelingCardsTable'
import { TimingControlTable } from './TimingControlTable/TimingControlTable'

import { IconButton } from '../../../../../common/buttons/iconButton/MyIconButton'
import { TabsButton } from '../../../../../common/buttons/tabsButton/MyTabsButton'
import { ConfirmAction } from '../../../../../common/modals/confirmAction/ConfirmAction'
import { Actions } from '../../../../../features/dataEditing/tabs/carsData/CarsData'

export const DocumentTabTablesBlock = () => {
  const [buttonsState, setButtonsState] = useState([true, false])
  const handleButtonClick = (index: number) => {
    const newButtonsState = buttonsState.map((button, i) => index === i)
    setButtonsState(newButtonsState)
  }

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
    <section className={css.documentTabTablesBlock__wrapper}>
      <div className={css.documentTabTablesBlock__buttons}>
        <TabsButton
          title="Дополнительный контроль сроков"
          isActive={buttonsState[0]}
          onClickHandler={() => handleButtonClick(0)}
        />
        <TabsButton
          title="Заправочные карты"
          isActive={buttonsState[1]}
          onClickHandler={() => handleButtonClick(1)}
        />
      </div>

      <div className={css.documentTabTablesBlock__tablesBlock}>
        {buttonsState[0] && <TimingControlTable />}
        {buttonsState[1] && <RefuelingCardsTable />}

        <div className={css.documentTabTablesBlock__tablesBlock_buttons}>
          <IconButton typeOfIcon="Добавить" />
          <IconButton
            typeOfIcon="Удалить"
            actionTitle={Actions.delete}
            onClickHandler={actionTitleHandler}
          />
          <IconButton typeOfIcon="Сохранить" />
          <IconButton typeOfIcon="Отменить" />
        </div>
      </div>

      {isOpen && (
        <ConfirmAction
          actionTitle={actionTitle}
          onAction={closeModal}
          onClose={showAction}
        />
      )}
    </section>
  )
}
