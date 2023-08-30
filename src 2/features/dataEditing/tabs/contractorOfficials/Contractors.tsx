import { useEffect } from 'react'

import { ContractorsTable } from './components/contractorsTable/ContractorsTable'

import { SubunitOfficialTable } from './components/subunitOfficialTable/SubunitOfficialTable'
import { SubunitsTable } from './components/subunitsTable/SubunitTable'
import css from './contractorsStyle.module.scss'

import { getContractorsData } from './model/contractorOfficialReducer'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { FilterGroup } from '../../../../common/buttons/filterGroup/FilterGroup'
import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'

export const Contractors = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getContractorsData())
  }, [])

  return (
    <div className={css.container}>
      <div className={css.tablesContainer}>
        <ContractorsTable />
        <SubunitsTable />
        <SubunitOfficialTable />
      </div>
      <div className={css.buttonsContainer}>
        <FilterGroup title={'по краткому названию'} />
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
