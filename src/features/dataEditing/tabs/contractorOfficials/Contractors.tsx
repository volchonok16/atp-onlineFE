import { useEffect } from 'react'

import { ContractorsTable } from './components/contractorsTable/ContractorsTable'

import { SubunitOfficialTable } from './components/subunitOfficialTable/SubunitOfficialTable'
import { SubunitsTable } from './components/subunitsTable/SubunitTable'
import css from './contractorsStyle.module.scss'

import { getContractorsData } from './model/contractorOfficialReducer'

import { useAppDispatch } from '../../../../hooks/useAppDispatch'

export const Contractors = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getContractorsData())
  }, [])

  return (
    <div className={css.tablesContainer}>
      <ContractorsTable />
      <SubunitsTable />
      <SubunitOfficialTable />

      {/* <div className={css.buttonsContainer}>
        
        <div className={css.editButtonContainer}>
          <EditButtonGroup />
          <div className={css.customerButton}>
            <FuncButton title={'Подразделение заказчика'} />
          </div>
        </div>
      </div> */}
    </div>
  )
}
