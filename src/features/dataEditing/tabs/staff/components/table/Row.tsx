import { FC } from 'react'

import css from './table.module.scss'

import { StaffType } from '../../api/api'

import {
  EditableTableCell,
  TableCellData,
} from 'src/common/ui/editableTableCell/EditableTableCell'
import { changeStaffAC } from 'src/features/dataEditing/tabs/staff/model/staffReducer'
import { useAppDispatch } from 'src/hooks/useAppDispatch'

type PropsType = {
  data: StaffType
  isActive: boolean
  isActiveHandler: (staff: StaffType) => void
}

export const Row: FC<PropsType> = ({ data, isActiveHandler, isActive }) => {
  const dispatch = useAppDispatch()
  const rowClassName = isActive ? css.activeRow : ''
  const rowOnClickHandler = () => isActiveHandler(data)

  const changeStaffData = (changes: TableCellData) => {
    dispatch(changeStaffAC(changes!))
  }

  return (
    <>
      <tr className={rowClassName} onClick={rowOnClickHandler}>
        <EditableTableCell
          itemId={data.FIO_ID}
          name="FIO"
          value={data.FIO}
          onChangeData={changeStaffData}
        />

        <td>NO DATA</td>

        <EditableTableCell
          itemId={data.FIO_ID}
          name="USE_OF_RAZN"
          onChangeData={changeStaffData}
          type={'checkbox'}
          checked={data.USE_OF_RAZN}
        />

        <EditableTableCell
          itemId={data.FIO_ID}
          name="FULL_FIO"
          value={data.FULL_FIO}
          onChangeData={changeStaffData}
        />

        <EditableTableCell
          itemId={data.FIO_ID}
          name="STAGIROVKA_PERIOD"
          value={data.STAGIROVKA_PERIOD}
          onChangeData={changeStaffData}
        />

        <EditableTableCell
          itemId={data.FIO_ID}
          name="FROM_1C_ID"
          value={data.FROM_1C_ID}
          onChangeData={changeStaffData}
        />

        <td>NO DATA</td>
      </tr>
    </>
  )
}
