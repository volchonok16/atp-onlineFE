import css from './tabOrderLayout.module.scss'

import { GeneralInfo } from '../../components/generalInfo/MyGeneralInfo'
import { TabContent } from '../../components/tabContent/MyTabContent'

export const TabOrderLayout = () => {
  return (
    <section className={css.tabOrderLayout__wrapper}>
      <GeneralInfo />

      <TabContent />
    </section>
  )
}
