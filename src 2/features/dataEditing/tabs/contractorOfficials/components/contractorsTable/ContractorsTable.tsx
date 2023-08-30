import css from './contractorsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { ContractorType } from '../../api/api'
import {
  getContractors,
  getContractorsSubunitData,
  getSubunitOfficialData,
  setActiveContractorAC,
} from '../../model/contractorOfficialReducer'

export const ContractorsTable = () => {
  const dispatch = useAppDispatch()
  const contractors = useAppSelector(getContractors)

  const chooseActiveRowHandler = (contractor: ContractorType) => {
    dispatch(setActiveContractorAC(contractor))
    dispatch(getContractorsSubunitData(contractor.DATA_KEY))
    dispatch(getSubunitOfficialData(contractor.DATA_KEY))
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
                  onClick={() => chooseActiveRowHandler(contractor)}
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
