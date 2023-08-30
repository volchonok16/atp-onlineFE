import { useState } from 'react'

import css from './guidesLayout.module.scss'

import { TabsButton } from '../../common/buttons/tabsButton/MyTabsButton'
import { ExtendedInfoTab } from '../../components/guidesTabContent/extendedInfoTab/MyExtendedInfoTab'
import { GuidesTab } from '../../components/guidesTabContent/guidesTab/GuidesTab'
import { ListOfEquipment } from '../../components/guidesTabContent/listOfEquipmentTab/MyListOfEquipment'

const GuidesLayout = () => {
  const [buttonsState, setButtonsState] = useState([true, false, false])
  const handleButtonClick = (index: number) => {
    const newButtonsState = buttonsState.map((button, i) => index === i)
    setButtonsState(newButtonsState)
  }

  return (
    <section className={css.guidesLayout__wrapper}>
      <div className={css.guidesLayout__buttons_wrapper}>
        <TabsButton
          title="Перечень техники"
          onClickHandler={() => handleButtonClick(0)}
          isActive={buttonsState[0]}
        />
        <TabsButton
          title="Расширенная информация"
          onClickHandler={() => handleButtonClick(1)}
          isActive={buttonsState[1]}
        />
        <TabsButton
          title="Справочники"
          onClickHandler={() => handleButtonClick(2)}
          isActive={buttonsState[2]}
        />
      </div>

      <div>
        {buttonsState[0] && <ListOfEquipment />}
        {buttonsState[1] && <ExtendedInfoTab />}
        {buttonsState[2] && <GuidesTab />}
      </div>
    </section>
  )
}

export default GuidesLayout
