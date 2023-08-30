import { FC } from 'react'

import css from './tableHeader.module.scss'

import { headerColumnsType } from '../../../features/order/tabs/dataPreparation/MyDataPreparation'

type TableHeadPropsType = {
  columns: headerColumnsType[]
}

export const TableHeader: FC<TableHeadPropsType> = ({ columns }) => {
  return (
    <thead className={css.tableHead__wrapper}>
      <tr className={css.tableHead__row}>
        {columns.map((el) => (
          <th className={css.tableHead__cell} key={el.id}>
            {el.title}
          </th>
        ))}
      </tr>
    </thead>
  )
}
