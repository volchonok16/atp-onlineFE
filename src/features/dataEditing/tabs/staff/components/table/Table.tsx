import { FC } from 'react'

import { Row } from './Row'
import css from './table.module.scss'

import { StaffType } from 'src/features/dataEditing/tabs/staff/api/api'
import { setActiveStaffAC } from 'src/features/dataEditing/tabs/staff/model/staffReducer'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

type Props = {
  list: StaffType[]
}

export const Table: FC<Props> = ({ list }) => {
  const dispatch = useAppDispatch()
  const activeStaff = useAppSelector((state) => state.staff.activeStaff)
  const activeStaffHandler = (staff: StaffType): void => {
    dispatch(setActiveStaffAC(staff))
  }

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Фамилия И.О.</th>
          <th colSpan={2}>Не использовать в</th>
          <th rowSpan={2}>Расшифровка ФИО</th>
          <th rowSpan={2}>Период стажировки</th>
          <th rowSpan={2}>ID из 1С</th>
          <th rowSpan={2}>Удалить</th>
        </tr>
        <tr>
          <th>Путевках</th>
          <th>Разнарядке</th>
        </tr>
      </thead>
      <tbody>
        {list.map((staff) => (
          <Row
            key={staff.FIO_ID}
            data={staff}
            isActive={staff.FIO_ID === activeStaff.FIO_ID}
            isActiveHandler={activeStaffHandler}
          />
        ))}
      </tbody>
    </table>
  )
}
