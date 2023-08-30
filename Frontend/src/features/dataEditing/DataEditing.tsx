import { useState } from 'react'

import css from './dataEditing.module.scss'

import { CarsData } from './tabs/carsData/CarsData'

import { Companies } from './tabs/companies/Companies'

import { Contractors } from './tabs/contractorOfficials/Contractors'
import { Flights } from './tabs/flights/Flights'
import { ObjectAndEquipments } from './tabs/objectAndEquipments/ObjectAndEquipments'
import { Staff } from './tabs/staff/Staff'

import { TabsButton } from '../../common/buttons/tabsButton/MyTabsButton'

const DataEditing = () => {
  const tabs = [
    'Данные по машинам',
    'Список персонала',
    'Список организаций',
    'Должностные лица контрагентов',
    'Иная техника и объекты',
    'Рейсы',
  ]
  const [activeTab, setActiveTab] = useState<string>(tabs[0])
  const showActiveTab = () => {
    switch (activeTab) {
      case tabs[0]:
        return <CarsData />
      case tabs[1]:
        return <Staff />
      case tabs[2]:
        return <Companies />
      case tabs[3]:
        return <Contractors />
      case tabs[4]:
        return <ObjectAndEquipments />
      case tabs[5]:
        return <Flights />
      default:
        return <div>Choose Tab</div>
    }
  }
  return (
    <>
      <div className={css.tabs}>
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
    </>
  )
}

export default DataEditing
