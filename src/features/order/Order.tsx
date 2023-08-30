import { Outlet } from 'react-router-dom'

import { AutoList } from './components/autoList/AutoList'
import css from './order.module.scss'

import { type Tab, TabSwitcher } from '../../common/ui/tabSwitcher/TabSwitcher'
import {
  DATA_PREPARATION_TAB,
  DIRECTION_FOR_REPAIR_TAB,
  ORDER_TAB,
  OUTPUT_INFO_TAB,
  PURCHASES_TAB,
  SHIPPING_DOCUMENT_TAB,
} from '../../routes/paths'

const autoList = ['Вся техника', 'Автоколонна  1', 'Упп']

const tabList: Tab[] = [
  { path: DATA_PREPARATION_TAB, label: 'Подготовка  данных' },
  { path: ORDER_TAB, label: 'Разнарядка' },
  { path: PURCHASES_TAB, label: 'Заказы' },
  { path: OUTPUT_INFO_TAB, label: 'Выходная информация' },
  { path: DIRECTION_FOR_REPAIR_TAB, label: 'Направление на ремонт' },
  { path: SHIPPING_DOCUMENT_TAB, label: 'ТТН' },
]

const Order = () => {
  return (
    <section className={css.orderLayout__wrapper}>
      <AutoList autoList={autoList} value={autoList[0]} />
      <TabSwitcher tabList={tabList} />
      <Outlet />
    </section>
  )
}

export default Order
