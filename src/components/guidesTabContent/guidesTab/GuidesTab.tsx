import { useState } from 'react'

import css from './guidesTab.module.scss'
import { LoadingAddresses } from './loadingAddresses/LoadingAddresses'
import { StandardNotes } from './standardNotes/StandartNotes'
import { TypeOfCargo } from './typeOfCargo/TypeOfCargo'
import { TypesOfEquipment } from './typesOfEquipment/TypesOfEquipment'
import { TypesOfTraffic } from './typesOfTraffic/MyTypesOfTraffic'
import { TypesOfTransportation } from './typesOfTransportation/TypesOfTransportation'

import { TabsButton } from '../../../common/buttons/tabsButton/MyTabsButton'

export const GuidesTab = () => {
  const [buttonsState, setButtonsState] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const handleButtonClick = (index: number) => {
    const newButtonsState = buttonsState.map((button, i) => index === i)
    setButtonsState(newButtonsState)
  }

  return (
    <section className={css.guidesTab__wrapper}>
      <div className={css.guidesTab__content_tabsButtons}>
        <TabsButton
          title="Типы техники"
          isActive={buttonsState[0]}
          onClickHandler={() => handleButtonClick(0)}
          isForGuides={true}
        />
        <TabsButton
          title="Стандартные примечание"
          isActive={buttonsState[1]}
          onClickHandler={() => handleButtonClick(1)}
          isForGuides
        />
        <TabsButton
          title="Адреса погрузки и разгрузки"
          isActive={buttonsState[2]}
          onClickHandler={() => handleButtonClick(2)}
          isForGuides
        />
        <TabsButton
          title="Тип груза"
          isActive={buttonsState[3]}
          onClickHandler={() => handleButtonClick(3)}
          isForGuides
        />
        <TabsButton
          title="Виды перевозок"
          isActive={buttonsState[4]}
          onClickHandler={() => handleButtonClick(4)}
          isForGuides
        />
        <TabsButton
          title="Виды сообщений"
          isActive={buttonsState[5]}
          onClickHandler={() => handleButtonClick(5)}
          isForGuides
        />
        <TabsButton
          title="Загрузка справочников"
          isActive={buttonsState[6]}
          onClickHandler={() => handleButtonClick(6)}
          isForGuides
        />
      </div>

      <div>
        {buttonsState[0] && <TypesOfEquipment />}
        {buttonsState[1] && <StandardNotes />}
        {buttonsState[2] && <LoadingAddresses />}
        {buttonsState[3] && <TypeOfCargo />}
        {buttonsState[4] && <TypesOfTransportation />}
        {buttonsState[5] && <TypesOfTraffic />}
        {buttonsState[6] && ''}
      </div>
    </section>
  )
}
