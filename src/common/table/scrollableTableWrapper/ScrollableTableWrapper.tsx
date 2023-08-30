import { FC, ReactNode } from 'react'

import css from './scrollableTableWrapper.module.scss'

type PropsType = {
  children: ReactNode
  height?: string
}

export const ScrollableTableWrapper: FC<PropsType> = ({ children, height }) => {
  return (
    <div style={{ height: height && height }} className={css.tableWrapper}>
      {children}
    </div>
  )
}
