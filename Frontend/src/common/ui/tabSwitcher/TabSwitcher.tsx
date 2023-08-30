import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import css from './tabSwitcher.module.scss'

export type Tab = {
  path: string
  label: string
}

type Props = {
  tabList: Tab[]
}

export const TabSwitcher: FC<Props> = ({ tabList }) => {
  return (
    <div className={css.switcher}>
      {tabList.map((tab, i) => (
        <NavLink
          key={i}
          to={tab.path}
          className={({ isActive }) => (isActive ? css.active : '')}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  )
}
