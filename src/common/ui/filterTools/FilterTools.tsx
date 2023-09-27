import { ChangeEvent, FC } from 'react'

import css from './filterTools.module.scss'

import { FuncButton } from '../../buttons/funcButton/MyFuncButton'

type PropsType = {
  label?: string
  helperText?: string
  hideArchive?: boolean
  value: string
  withArchive: boolean
  hideArchiveHandler?: () => void
  onChange: (value: string) => void
}

export const FilterTools: FC<PropsType> = ({
  helperText,
  label,
  hideArchive,
  hideArchiveHandler,
  onChange,
  value,
  withArchive,
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
          {label && <span>{label}</span>}
          <input
            type="text"
            placeholder={helperText}
            value={value}
            onChange={onChangeHandler}
          />
        </label>
        <FuncButton title="Сброс" onClickHandler={resetFilterValue} />
      </div>
      {withArchive && (
        <label className={css.showArchive}>
          <input
            type="checkbox"
            checked={hideArchive}
            onChange={hideArchiveHandler}
          />
          Скрыть архивы
        </label>
      )}
    </div>
  )
}
