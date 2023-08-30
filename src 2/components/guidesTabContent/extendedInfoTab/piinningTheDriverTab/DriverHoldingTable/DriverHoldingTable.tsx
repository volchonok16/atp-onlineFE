import css from './driverHoldingTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getDriverHolding } from '../../../../../redux/catalogs/extendedInfoReducer'

export const DriverHoldingTable = () => {
  const driverHolding = useAppSelector(getDriverHolding)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'765px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Фамилия И.О.</th>
              <th>Начало закрепления</th>
              <th>Окончание закрепления</th>
              <th>Примечание</th>
              <th>Участок</th>
              <th>Заказчик</th>
              <th>Собственник ТС</th>
            </tr>
          </thead>
          <tbody>
            {driverHolding.map((drivers) => {
              return (
                <tr key={drivers.RAZN_OD_ZAKR_KEY}>
                  <td>{'нет ключа'}</td>
                  <td>{drivers.DATES}</td>
                  <td>{drivers.DATES_DO}</td>
                  <td>{drivers.PRIM}</td>
                  <td>{drivers.UCHASTOK}</td>
                  <td>{drivers.ZAK}</td>
                  <td>{'нет ключа'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
