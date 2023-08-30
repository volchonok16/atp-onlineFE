import css from './transportationTypeTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getTransportationsType } from '../../../../../redux/catalogs/directoriesReducer'

export const TransportationTypeTable = () => {
  const transportationTypeData = useAppSelector(getTransportationsType)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Виды перевозок</th>
            </tr>
          </thead>
          <tbody>
            {transportationTypeData.map((transportation) => {
              return (
                <tr key={transportation.RAZN_VID_PEREV_KEY}>
                  <td className={css.tableCell}>{transportation.VID_PEREV}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
