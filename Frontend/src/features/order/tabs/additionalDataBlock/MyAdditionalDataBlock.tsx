import { useState } from 'react'

import css from './additionalDataBlock.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { TabsButton } from '../../../../common/buttons/tabsButton/MyTabsButton'
import { DataForShippingDocs } from '../dataForShippingDocs/MyDataForShippingDocs'
import { ProductSection } from '../shippingDocument/productSection/MyProductSection'
import { TransportSection } from '../shippingDocument/transportSection/MyTransportSection'

export const AdditionalDataBlock = () => {
  const [buttonsState, setButtonsState] = useState([true, false, false])
  const handleButtonClick = (index: number) => {
    const newButtonsState = buttonsState.map((button, i) => index === i)
    setButtonsState(newButtonsState)
  }

  return (
    <section className={css.additionalDataBlock__wrapper}>
      <div className={css.additionalDataBlock__tabTables_wrapper}>
        <div className={css.additionalDataBlock__tabButtons_wrapper}>
          <TabsButton
            title="Товарный раздел"
            isActive={buttonsState[0]}
            onClickHandler={() => handleButtonClick(0)}
          />
          <TabsButton
            title="Транспортный раздел"
            isActive={buttonsState[1]}
            onClickHandler={() => handleButtonClick(1)}
          />
          <TabsButton
            title="Данные для ТТН"
            isActive={buttonsState[2]}
            onClickHandler={() => handleButtonClick(2)}
          />
        </div>

        <div className={css.additionalDataBlock__tabTables_wrapper}>
          {buttonsState[0] && <ProductSection />}
          {buttonsState[1] && <TransportSection />}
          {buttonsState[2] && <DataForShippingDocs />}
        </div>
      </div>

      <div className={css.additionalDataBlock__buttons_wrapper}>
        <div className={css.buttons__block_wrapper}>
          <FuncButton title="Добавить запись" />
          <FuncButton title="Удалить" />
          <FuncButton title="Сохранить" />
        </div>
        <div className={css.buttons__block_wrapper}>
          <FuncButton title="Печать" />
          <FuncButton title="Сохранить ТТН" />
          <FuncButton title="Удалить ТТН" />
        </div>
      </div>
    </section>
  )
}
