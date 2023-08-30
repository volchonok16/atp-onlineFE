import css from './passesDataTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getPassesData } from '../../../../../redux/catalogs/extendedInfoReducer'

export const PassesDataTable = () => {
  const passesData = useAppSelector(getPassesData)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'500px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>№ разрешения</th>
              <th>Срок действия от</th>
              <th>Срок действия до</th>
            </tr>
          </thead>
          <tbody>
            {passesData.map((pass) => {
              return (
                <tr key={pass.RAZN_OD_ID}>
                  <td>{pass.N_RAZR}</td>
                  <td>{pass.DATE_OT}</td>
                  <td>{pass.DATE_DO}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
