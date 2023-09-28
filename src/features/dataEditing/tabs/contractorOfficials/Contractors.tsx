import { useEffect } from 'react'

import { ContractorsTable } from './components/contractorsTable/ContractorsTable'

import { OfficialsTable } from './components/officialsTable/OfficialsTable'
import { SubunitsTable } from './components/subunitsTable/SubunitTable'
import css from './contractorsStyle.module.scss'

import { getContractorListThunk } from './model/contractorOfficialReducer'

import { useAppDispatch } from '../../../../hooks/useAppDispatch'

export const Contractors = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getContractorListThunk())
  }, [])

  return (
    <div className={css.tablesContainer}>
      <ContractorsTable />
      <SubunitsTable />
      <OfficialsTable />
    </div>
  )
}
