import css from './subunitTableStyle.module.scss'

import {
  selectedSubunits,
  selectedActiveSubunitId,
  setActiveSubunitIdAC,
} from '../../model/contractorOfficialReducer'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

export const SubunitsTable = () => {
  const dispatch = useAppDispatch()
  const subunits = useAppSelector(selectedSubunits)
  const activeSubunitId = useAppSelector(selectedActiveSubunitId)
  const activeRowHandler = (id: number) => {
    dispatch(setActiveSubunitIdAC(id))
  }
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
                  <tr
                    key={subunit.DATA_PODR_KEY}
                    className={
                      subunit.DATA_PODR_KEY === activeSubunitId
                        ? css.activeRow
                        : ''
                    }
                    onClick={() => activeRowHandler(subunit.DATA_PODR_KEY)}
                  >
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
