import css from './subunitTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { selectedSubunits } from '../../model/contractorOfficialReducer'

export const SubunitsTable = () => {
  const subunits = useAppSelector(selectedSubunits)

  const isSubunits = !!subunits.length

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Подразделение</th>
            </tr>
          </thead>
          <tbody className={css.tBody}>
            {isSubunits ? (
              subunits.map((subunit) => {
                return (
                  <tr key={subunit.DATA_PODR_KEY}>
                    <td className={css.firstColumn}>{subunit.PODR}</td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td className={css.firstColumn}>Нет данных о подразделениях</td>
              </tr>
            )}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
