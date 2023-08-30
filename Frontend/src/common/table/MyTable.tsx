import { FC } from 'react'

import css from './table.module.scss'
import { TableBody } from './tableBody/MyTableBody'
import { TableHeader } from './tableHeader/MyTableHeader'

import {
  dataRowType,
  headerColumnsType,
} from '../../features/order/tabs/dataPreparation/MyDataPreparation'

type TablePropsType = {
  columns: headerColumnsType[]
  data: dataRowType[]
}

export const Table: FC<TablePropsType> = ({ columns, data }) => {
  return (
    <table className={css.table__wrapper}>
      <TableHeader columns={columns} />
      <TableBody data={data} />
    </table>
  )
}
