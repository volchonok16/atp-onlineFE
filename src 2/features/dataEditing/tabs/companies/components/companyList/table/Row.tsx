import { FC } from 'react'

import css from './table.module.scss'

import { CompanyListItemType } from '../../../api/api'

type PropsType = {
  data: CompanyListItemType
  isActive: boolean
  isActiveHandler: (companyId: number) => void
}

export const Row: FC<PropsType> = ({ data, isActive, isActiveHandler }) => {
  const rowOnClickHandler = () => isActiveHandler(data.DATA_KEY)

  return (
    <tr className={isActive ? css.activeRow : ''} onClick={rowOnClickHandler}>
      <td>{data.LNAME}</td>
      <td>{data.ZAK_}</td>
      <td>{data.KAT}</td>
      <td>{data.N_KAT}</td>
      <td>{data.METOD}</td>
      <td>
        нет такого поля
        <input type="checkbox" disabled />
      </td>
      <td>
        нет такого поля
        <input type="checkbox" disabled />
      </td>
    </tr>
  )
}
