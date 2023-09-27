import { useEffect } from 'react'

import css from './subunitTableStyle.module.scss'

import {
  selectedSubunits,
  selectedActiveSubunitId,
  setActiveSubunitIdAC,
  setActiveOfficialIdAC,
  selectedActiveContractorId,
  getSubunitListThunk,
} from '../../model/contractorOfficialReducer'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

export const SubunitsTable = () => {
  const dispatch = useAppDispatch()
  const subunits = useAppSelector(selectedSubunits)
  const activeSubunitId = useAppSelector(selectedActiveSubunitId)
  const activeContractorId = useAppSelector(selectedActiveContractorId)
  const activeRowHandler = (id: number) => {
    dispatch(setActiveSubunitIdAC(id))
    dispatch(setActiveOfficialIdAC(null))
  }
  const isSubunits = !!subunits.length

  useEffect(() => {
    if (activeContractorId) {
      dispatch(getSubunitListThunk(activeContractorId))
      dispatch(setActiveSubunitIdAC(null))
    }
  }, [activeContractorId])

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Подразделение</th>
            </tr>
          </thead>
          <tbody>
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
