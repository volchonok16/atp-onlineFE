import { NavLink } from 'react-router-dom'

import css from './navBar.module.scss'

import {
  DATA_EDITING,
  GUIDES,
  INFO_FROM_DRIVER,
  ORDERS,
  REPORTS,
} from '../../../routes/paths'

type Nav = {
  path: string
  label: string
}

const navLabels: Nav[] = [
  { path: ORDERS, label: 'Разнарядка' },
  { path: DATA_EDITING, label: 'Редактирование  данных' },
  { path: GUIDES, label: 'Справочники и шаблоны' },
  { path: REPORTS, label: 'Отчеты' },
  { path: INFO_FROM_DRIVER, label: 'Информация от водителя' },
]

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      {navLabels.map((nav) => (
        <NavLink
          key={nav.label}
          to={nav.path}
          className={({ isActive }) => (isActive ? css.active : '')}
        >
          {nav.label}
        </NavLink>
      ))}
    </nav>
  )
}
