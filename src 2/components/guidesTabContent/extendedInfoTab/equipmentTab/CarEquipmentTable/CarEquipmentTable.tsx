import css from './carEquipmentTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getCarEquipment } from '../../../../../redux/catalogs/extendedInfoReducer'

export const CarEquipmentTable = () => {
  const carEquipment = useAppSelector(getCarEquipment)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Наименование</th>
              <th>Номер</th>
              <th>Количество</th>
            </tr>
          </thead>
          <tbody>
            {carEquipment.map((equipment) => {
              return (
                <tr key={equipment.RAZN_OD_KOMPL_KEY}>
                  <td>{equipment.NAIM}</td>
                  <td>{equipment.NOMER}</td>
                  <td>{equipment.KOL}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
