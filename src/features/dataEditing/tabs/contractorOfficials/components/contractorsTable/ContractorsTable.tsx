import css from './contractorsTableStyle.module.scss'

import {
  selectedContractors,
  getContractorsSubunitData,
  getSubunitOfficialData,
  setActiveContractorIdAC,
  selectedActiveContractorId,
} from '../../model/contractorOfficialReducer'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

export const ContractorsTable = () => {
  const dispatch = useAppDispatch()
  const contractors = useAppSelector(selectedContractors)
  const activeContractorId = useAppSelector(selectedActiveContractorId)

  const chooseActiveRowHandler = (id: number) => {
    dispatch(setActiveContractorIdAC(id))
    dispatch(getContractorsSubunitData(id))
    dispatch(getSubunitOfficialData(id))
  }

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Краткое название заказчика</th>
            </tr>
          </thead>
          <tbody className={css.tBody}>
            {contractors.map((contractor) => {
              return (
                <tr
                  key={contractor.DATA_KEY}
                  className={
                    contractor.DATA_KEY === activeContractorId
                      ? css.activeRow
                      : ''
                  }
                  onClick={() => chooseActiveRowHandler(contractor.DATA_KEY)}
                >
                  <td className={css.firstColumn}>{contractor.LNAME}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
