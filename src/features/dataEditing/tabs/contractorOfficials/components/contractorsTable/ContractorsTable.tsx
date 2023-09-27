import { useState, useMemo } from 'react'

import css from './contractorsTableStyle.module.scss'

import {
  selectedContractors,
  setActiveContractorIdAC,
  selectedActiveContractorId,
  setActiveSubunitIdAC,
  setOfficialsAC,
} from '../../model/contractorOfficialReducer'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { FilterTools } from 'src/common/ui/filterTools/FilterTools'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

export const ContractorsTable = () => {
  const dispatch = useAppDispatch()
  const activeContractorId = useAppSelector(selectedActiveContractorId)

  const [filterValue, setFilterValue] = useState('')
  const filterValueHandler = (value: string) => setFilterValue(value)

  const contractors = useAppSelector(selectedContractors)

  const filter = () =>
    !filterValue
      ? contractors
      : contractors.filter(({ LNAME }) =>
          LNAME.toUpperCase().includes(filterValue.toUpperCase()),
        )
  const filteredContractorList = useMemo(filter, [filterValue, contractors])

  const chooseActiveRowHandler = (id: number) => {
    dispatch(setActiveContractorIdAC(id))
    dispatch(setActiveSubunitIdAC(null))
    dispatch(setOfficialsAC([]))
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

          <tbody>
            {filteredContractorList.map((contractor) => {
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
                  <td
                    className={
                      activeContractorId === contractor
                        ? `${css.firstColumn} ${css.activeRow}`
                        : `${css.firstColumn} `
                    }
                  >
                    {contractor.LNAME}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
      <FilterTools
        withArchive={false}
        value={filterValue}
        onChange={filterValueHandler}
        label={'Фильтр'}
        helperText={'По названию'}
      />
    </div>
  )
}
