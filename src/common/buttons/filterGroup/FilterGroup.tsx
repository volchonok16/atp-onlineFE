import { ChangeEvent, useState } from 'react'

import css from './filterGroupStyle.module.scss'

import { ContractorType } from '../../../features/dataEditing/tabs/contractorOfficials/api/api'
import { getContractors } from '../../../features/dataEditing/tabs/contractorOfficials/model/contractorOfficialReducer'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { FuncButton } from '../funcButton/MyFuncButton'

type FilterGroupPropsType = {
  title: string
  filteredTitle?: (title: string) => void
  setDataContractors?: (contractors: ContractorType[]) => void
}

export const FilterGroup = ({
  title,
  filteredTitle,
  setDataContractors,
}: FilterGroupPropsType) => {
  const contractors = useAppSelector(getContractors)
  const [valueInput, setValueInput] = useState<string>()

  const onHandlerChangeInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value.trim())
    if (filteredTitle) {
      valueInput && filteredTitle(valueInput)
    }
  }
  return (
    <div className={css.filterGroupContainer}>
      <div className={css.filter}>
        <p className={css.filterTitle}>Фильтр</p>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            value={valueInput}
            onChange={onHandlerChangeInputTitle}
          />
          <p className={css.descriptionTitle}>{title}</p>
        </div>
      </div>
      <FuncButton
        title={'Сбросить'}
        onClickHandler={() => {
          setValueInput('')
          if (setDataContractors) {
            setDataContractors(contractors)
          }
        }}
      />
    </div>
  )
}
