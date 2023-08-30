import css from './equipmentsListTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'

import {
  getActiveEquipmentID,
  getEquipmentsList,
  setActiveEquipmentAC,
} from '../../../../redux/catalogs/extendedInfoReducer'
import { ListOFEquipmentsType } from '../api'

export const EquipmentsListTable = () => {
  const dispatch = useAppDispatch()
  const equipmentsData = useAppSelector(getEquipmentsList)
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)

  const setActiveEquipmentHandler = (equipment: ListOFEquipmentsType) => {
    dispatch(setActiveEquipmentAC(equipment))
  }

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'825px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Марка автомобиля</th>
              <th>Гос. номер</th>
            </tr>
          </thead>
          <tbody>
            {equipmentsData.map((equipment) => {
              return (
                <tr
                  className={
                    equipment.RAZN_OD_KEY === activeEquipmentID
                      ? css.activeRow
                      : ''
                  }
                  key={equipment.RAZN_OD_KEY}
                  onClick={() => setActiveEquipmentHandler(equipment)}
                >
                  <td>{equipment.MAM}</td>
                  <td>{equipment.NOMER}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
