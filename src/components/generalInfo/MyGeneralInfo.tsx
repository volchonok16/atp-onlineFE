import css from './generalInfo.module.scss'

import { GeneralInfoButton } from '../../common/buttons/generalInfoButton/MyGeneralInfoButton'
import { TabsButton } from '../../common/buttons/tabsButton/MyTabsButton'

import { CalendarBlock } from '../calendarBlock/MyCalendarBlock'

export const GeneralInfo = () => {
  return (
    <section className={css.generalInfo__wrapper}>
      <div className={css.generalInfoButtons__wrapper}>
        <GeneralInfoButton title="Вся техника" isActive={true} />
        <GeneralInfoButton title="Автоколонна 1" />
        <GeneralInfoButton title="Упп" />
      </div>

      <div className={css.dateBlock__wrapper}>
        <CalendarBlock title="Дата" />
        <CalendarBlock title="Скопировать разнарядку с указанной даты на" />
      </div>

      <TabsButton title="Журнал заявок" />
    </section>
  )
}
