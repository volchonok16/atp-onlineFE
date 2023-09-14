import { ChangeEvent, FC } from 'react'

import css from './filterTools.module.scss'

import { FuncButton } from '../../buttons/funcButton/MyFuncButton'

type PropsType = {
  label: string
  helperText: string
  hideArchive: boolean
  hideArchiveHandler: () => void
  value: string
  onChange: (value: string) => void
}

export const FilterTools: FC<PropsType> = ({
  helperText,
  label,
  hideArchive,
  hideArchiveHandler,
  onChange,
  value,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim()
    onChange(value)
  }

  const resetFilterValue = () => {
    onChange('')
  }

  return (
    <div className={css.filterTools}>
      <div className={css.filter}>
        <label>
          {label}
          <input
            type="text"
            placeholder={helperText}
            value={value}
            onChange={onChangeHandler}
          />
        </label>
        <FuncButton title="Сброс" onClickHandler={resetFilterValue} />
      </div>
      <label className={css.showArchive}>
        <input
          type="checkbox"
          checked={hideArchive}
          onChange={hideArchiveHandler}
        />
        Скрыть архивы
      </label>
    </div>
  )
}
