import { useEffect, useState } from 'react'

import { ContractorType } from './api/api'
import { ContractorsTable } from './components/contractorsTable/ContractorsTable'

import { OfficialsTable } from './components/officialsTable/OfficialsTable'
import { SubunitsTable } from './components/subunitsTable/SubunitTable'
import css from './contractorsStyle.module.scss'

import { getContractorListThunk } from './model/contractorOfficialReducer'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'

export const Contractors = () => {
  const dispatch = useAppDispatch()
  const contractors = useAppSelector(getContractors)
  const [dataContractors, setDataContractors] =
    useState<ContractorType[]>(contractors)

  useEffect(() => {
    dispatch(getContractorListThunk())
  }, [])

  const filteredTitle = (title: string) => {
    const data = contractors.filter(({ LNAME }) =>
      LNAME.toUpperCase().includes(title.toUpperCase()),
    )
    return setDataContractors(data)
  }

  return (
    <div className={css.tablesContainer}>
      <ContractorsTable />
      <SubunitsTable />
      <OfficialsTable />
    </div>
  )
}
