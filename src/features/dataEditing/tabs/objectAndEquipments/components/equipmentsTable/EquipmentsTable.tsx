import { FC } from 'react'

import css from './equipmentsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import {
  EditableTableCell,
  TableCellData,
} from '../../../../../../common/ui/editableTableCell/EditableTableCell'
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { ObjectAndEquipmentType } from '../../api/api'
import {
  getDocumentsForEquipmentsData,
  getObjectAndEquipments,
  setActiveEquipmentAC,
  updateObjectAndEquipmentDataThunk,
} from '../../model/objectAndEquipmentReducer'

type PropsType = {
  activeRow: ObjectAndEquipmentType
}
export const EquipmentsTable: FC<PropsType> = ({ activeRow }) => {
  const dispatch = useAppDispatch()
  const equipments = useAppSelector(getObjectAndEquipments)

  const getDocumentHandler = (equipment: ObjectAndEquipmentType) => {
    dispatch(setActiveEquipmentAC(equipment))
    dispatch(getDocumentsForEquipmentsData(equipment.SKLAD_OBJ_SPIS_KEY))
    console.log(equipment.SKLAD_OBJ_SPIS_KEY)
  }

  const changeObjectAndEquipmentData = (changes: TableCellData) => {
    dispatch(updateObjectAndEquipmentDataThunk(changes))
  }

  return (
    <div className={css.container}>
      <span className={css.title}>Объекты и иная техника</span>
      <div className={css.tableWrapper}>
        <ScrollableTableWrapper height={'498px'}>
          <table className={css.table}>
            <thead className={css.tableHeader}>
              <tr>
                <th>Наименование</th>
                <th>Номер</th>
              </tr>
            </thead>
            <tbody className={css.tBody}>
              {equipments.map((equipment) => {
                return (
                  <tr
                    className={
                      activeRow.SKLAD_OBJ_SPIS_KEY ===
                      equipment.SKLAD_OBJ_SPIS_KEY
                        ? css.activeRow
                        : ''
                    }
                    key={equipment.SKLAD_OBJ_SPIS_KEY}
                    onClick={() => getDocumentHandler(equipment)}
                  >
                    <EditableTableCell
                      itemId={equipment.SKLAD_OBJ_SPIS_KEY}
                      name="MAM"
                      value={equipment.MAM}
                      onChangeData={changeObjectAndEquipmentData}
                    />
                    <EditableTableCell
                      itemId={equipment.SKLAD_OBJ_SPIS_KEY}
                      name="NOMER"
                      value={equipment.NOMER}
                      onChangeData={changeObjectAndEquipmentData}
                    />
                  </tr>
                )
              })}
            </tbody>
          </table>
        </ScrollableTableWrapper>
      </div>
    </div>
  )
}
