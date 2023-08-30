import { useState } from 'react'

import css from './tabContent.module.scss'

import { TabsButton } from '../../common/buttons/tabsButton/MyTabsButton'
import { CustomTab } from '../../features/order/tabs/customTab/MyCustomTab'
import { DataPreparation } from '../../features/order/tabs/dataPreparation/MyDataPreparation'
import { DirectionForRepair } from '../../features/order/tabs/directionForRepair/MyDirectionForRepair'
import { OrderTab } from '../../features/order/tabs/orderTab/MyOrderTab'

import { OutputInfo } from '../../features/order/tabs/outputInfo/MyOutputInfo'
import { ShippingDocument } from '../../features/order/tabs/shippingDocument/MyShippingDocument'

export const TabContent = () => {
  const [buttonsState, setButtonsState] = useState([
    true,
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
    <section className={css.tabContent__wrapper}>
      <div className={css.tabContent__buttons_wrapper}>
        <TabsButton
          title="Подготовка данных"
          isActive={buttonsState[0]}
          onClickHandler={() => handleButtonClick(0)}
        />
        <TabsButton
          title="Разнарядка"
          isActive={buttonsState[1]}
          onClickHandler={() => handleButtonClick(1)}
        />
        <TabsButton
          title="Заказы"
          isActive={buttonsState[2]}
          onClickHandler={() => handleButtonClick(2)}
        />
        <TabsButton
          title="Выходная информацмя"
          isActive={buttonsState[3]}
          onClickHandler={() => handleButtonClick(3)}
        />
        <TabsButton
          title="Направление на ремонт"
          isActive={buttonsState[4]}
          onClickHandler={() => handleButtonClick(4)}
        />
        <TabsButton
          title="ТТН"
          isActive={buttonsState[5]}
          onClickHandler={() => handleButtonClick(5)}
        />
      </div>

      {buttonsState[0] && <DataPreparation />}
      {buttonsState[1] && <OrderTab />}
      {buttonsState[2] && <CustomTab />}
      {buttonsState[3] && <OutputInfo />}
      {buttonsState[4] && <DirectionForRepair />}
      {buttonsState[5] && <ShippingDocument />}
    </section>
  )
}
