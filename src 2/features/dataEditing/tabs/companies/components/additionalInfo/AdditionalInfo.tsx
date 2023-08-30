import { useState } from 'react'

import css from './additionalInfo.module.scss'
import { InfoTab } from './infoTab/InfoTab'
import { Notation } from './notation/Notation'
import { Subunits } from './subunits/Subunits'

import { TabsButton } from '../../../../../../common/buttons/tabsButton/MyTabsButton'

export const AdditionalInfo = () => {
  const tabs = ['Доп информация', 'Подразделения', 'Примечания']
  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const showActiveTab = () => {
    switch (activeTab) {
      case tabs[1]:
        return <Subunits />
      case tabs[2]:
        return <Notation />
      default:
        return <InfoTab />
    }
  }
  return (
    <div className={css.additionalInfo}>
      <div className={css.tabsBtnBlock}>
        {tabs.map((tab, i) => (
          <TabsButton
            key={i}
            title={tab}
            isActive={activeTab === tab}
            onClickHandler={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div>{showActiveTab()}</div>
    </div>
  )
}
