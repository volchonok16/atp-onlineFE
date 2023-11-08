import { ChangeEvent, FC } from 'react'

import css from './dateSelector.module.scss'

type Props = {
  selectedDate: string
  onChangeDate: (date: string) => void
}

export const DateSelector: FC<Props> = ({ selectedDate, onChangeDate }) => {
  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value
    onChangeDate(date)
  }

  return (
    <div>
      <label className={css.dateSelector}>
        <span>Подготовить таблицу на</span>
        <input type="date" value={selectedDate} onChange={dateHandler} />
      </label>
    </div>
  )
}
