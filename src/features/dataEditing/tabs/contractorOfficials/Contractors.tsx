import { useEffect, useState } from 'react'

import { ContractorType } from './api/api'
import { ContractorsTable } from './components/contractorsTable/ContractorsTable'

import { SubunitOfficialTable } from './components/subunitOfficialTable/SubunitOfficialTable'
import { SubunitsTable } from './components/subunitsTable/SubunitTable'
import css from './contractorsStyle.module.scss'

import {
  getContractors,
  getContractorsData,
} from './model/contractorOfficialReducer'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { FilterGroup } from '../../../../common/buttons/filterGroup/FilterGroup'
import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'

export const Contractors = () => {
  const dispatch = useAppDispatch()
  const contractors = useAppSelector(getContractors)
  const [dataContractors, setDataContractors] =
    useState<ContractorType[]>(contractors)

  useEffect(() => {
    dispatch(getContractorsData())
  }, [])

  const filteredTitle = (title: string) => {
    const data = contractors.filter(({ LNAME }) =>
      LNAME.toUpperCase().includes(title.toUpperCase()),
    )
    return setDataContractors(data)
  }

  return (
    <div className={css.container}>
      <div className={css.tablesContainer}>
        <ContractorsTable
          data={dataContractors.length ? dataContractors : contractors}
        />
        <SubunitsTable />
        <SubunitOfficialTable />
      </div>
      <div className={css.buttonsContainer}>
        <FilterGroup
          title={'по краткому названию'}
          filteredTitle={filteredTitle}
          setDataContractors={setDataContractors}
        />
        <div className={css.editButtonContainer}>
          <EditButtonGroup />
          <div className={css.customerButton}>
            <FuncButton title={'Подразделение заказчика'} />
          </div>
        </div>
      </div>
    </div>
  )
}
