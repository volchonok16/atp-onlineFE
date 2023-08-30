import { FC, ReactNode } from 'react'

import css from './tableTools.module.scss'

type PropsType = {
  children: ReactNode
}

export const TableTools: FC<PropsType> = ({ children }) => {
  return <div className={css.tableTools}>{children}</div>
}
