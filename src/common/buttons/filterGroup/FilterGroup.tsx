import { useState } from 'react'

import css from './filterGroupStyle.module.scss'

import { FuncButton } from '../funcButton/MyFuncButton'

type FilterGroupPropsType = {
  title: string
  handleChange: (value: string) => void
}

export const FilterGroup = ({ title, handleChange }: FilterGroupPropsType) => {
  const [inputValue, setInputValue] = useState('')
  const handleClear = () => {
    setInputValue('')
    handleChange('')
  }
  return (
    <div className={css.filterGroupContainer}>
      <div className={css.filter}>
        <p className={css.filterTitle}>Фильтр</p>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value)
              handleChange(event.target.value)
            }}
          />
          <p className={css.descriptionTitle}>{title}</p>
        </div>
      </div>
      <FuncButton title={'Сбросить'} onClick={handleClear} />
    </div>
  )
}
