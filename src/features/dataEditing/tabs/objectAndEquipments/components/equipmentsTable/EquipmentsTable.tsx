import { FC } from 'react'

import css from './equipmentsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { ObjectAndEquipmentType } from '../../api/api'

import { useGetObjectAndEquipmentsDataQuery } from 'src/features/dataEditing/tabs/objectAndEquipments/model/objectsAndEquipmentsApi'

type PropsType = {
  activeRow: ObjectAndEquipmentType | undefined
  setActiveEquipment: (activeEquipment: ObjectAndEquipmentType) => void
}
export const EquipmentsTable: FC<PropsType> = ({
  activeRow,
  setActiveEquipment,
}) => {
  const { data: equipments } = useGetObjectAndEquipmentsDataQuery()

  const isActiveHandler = (equipment: ObjectAndEquipmentType) => {
    console.log(equipment)
    setActiveEquipment(equipment)
  }

  return (
    <div className={css.container}>
      <span className={css.title}>Объекты и иная техника</span>
      <div className={css.tableWrapper}>
        <ScrollableTableWrapper>
          <table className={css.table}>
            <thead className={css.tableHeader}>
              <tr>
                <th>Наименование</th>
                <th>Номер</th>
              </tr>
            </thead>
            <tbody className={css.tBody}>
              {equipments?.map((equipment) => {
                return (
                  <tr
                    className={
                      activeRow?.SKLAD_OBJ_SPIS_KEY ===
                      equipment.SKLAD_OBJ_SPIS_KEY
                        ? css.activeRow
                        : ''
                    }
                    key={equipment.SKLAD_OBJ_SPIS_KEY}
                    onClick={() => isActiveHandler(equipment)}
                  >
                    <td className={css.firstColumn}>{equipment.MAM}</td>
                    <td>{equipment.NOMER}</td>
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
