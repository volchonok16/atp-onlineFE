import { FC } from 'react'

import css from './tableBody.module.scss'

import { dataRowType } from '../../../features/order/tabs/dataPreparation/MyDataPreparation'

type TableRowPropsType = {
  data: dataRowType[]
}

export const TableBody: FC<TableRowPropsType> = ({ data }) => {
  return (
    <tbody className={css.tableBody__wrapper}>
      {data.map((item, ind) => (
        <tr className={css.tableBody__tableRow} key={ind}>
          {Object.values(item).map((value) => (
            <td key={value} className={css.tableBody__tableCell}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
