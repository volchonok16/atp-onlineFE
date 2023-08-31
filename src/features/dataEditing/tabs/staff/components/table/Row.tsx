import { FC } from 'react'

import css from './table.module.scss'

import { StaffType } from '../../api/api'

type PropsType = {
  data: StaffType
  isActive: boolean
  isActiveHandler: (car: StaffType) => void
}

export const Row: FC<PropsType> = ({ data, isActiveHandler, isActive }) => {
  const rowOnClickHandler = () => isActiveHandler(data)

  return (
    <tr className={isActive ? css.activeRow : ''} onClick={rowOnClickHandler}>
      <td>{data.FIO}</td>
      <td>NO DATA</td>
      <td>
        <label>
          <input type="checkbox" checked={data.USE_OF_RAZN} disabled />
        </label>
      </td>
      <td>{data.FULL_FIO}</td>
      <td>{data.STAGIROVKA_PERIOD}</td>
      <td>{data.FROM_1C_ID}</td>
      <td>NO DATA</td>
    </tr>
  )
}
