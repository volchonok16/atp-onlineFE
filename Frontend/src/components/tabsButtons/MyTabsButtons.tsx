import { FC } from 'react'

import css from './tabsButtons.module.scss'

import { TabsButton } from '../../common/buttons/tabsButton/MyTabsButton'

type TabsButtonPropsType = {
  buttonsState: boolean[]
  handleButtonClick: (index: number) => void
}

export const TabsButtons: FC<TabsButtonPropsType> = ({
  buttonsState,
  handleButtonClick,
}) => {
  return (
    <section className={css.tabsButtons__wrapper}>
      <TabsButton
        title="Разнарядка"
        onClickHandler={() => handleButtonClick(0)}
        isActive={buttonsState[0]}
      />
      <TabsButton
        title="Редактирование данных"
        onClickHandler={() => handleButtonClick(1)}
        isActive={buttonsState[1]}
      />
      <TabsButton
        title="Справочники и шаблоны"
        onClickHandler={() => handleButtonClick(2)}
        isActive={buttonsState[2]}
      />
      <TabsButton
        title="Отчеты"
        onClickHandler={() => handleButtonClick(3)}
        isActive={buttonsState[3]}
      />
      <TabsButton
        title="Информация от водителя"
        onClickHandler={() => handleButtonClick(4)}
        isActive={buttonsState[4]}
      />
    </section>
  )
}
