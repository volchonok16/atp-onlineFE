import css from './loadingUnloadingAddressesTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getLoadingUnloadingAddresses } from '../../../../../redux/catalogs/directoriesReducer'

export const LoadingUnloadingAddressesTable = () => {
  const loadingUnloadingAddressesData = useAppSelector(
    getLoadingUnloadingAddresses,
  )

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Адреса погрузки и разгрузки</th>
            </tr>
          </thead>
          <tbody>
            {loadingUnloadingAddressesData.map((addresses) => {
              return (
                <tr key={addresses.RAZN_ADRESS_KEY}>
                  <td className={css.tableCell}>{addresses.ADRESS}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
