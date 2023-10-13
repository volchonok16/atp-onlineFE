import { ChangeEvent, FC, useState } from 'react'

import css from './FilteredTools.module.scss'

import { TextInput } from '../../../../../common/inputs/textInput/MyTextInput'
import { OrderBookingType } from '../../../orderApi'
type PropsType = {
  helperText: string
  name?: keyof OrderBookingType
  onFilter: (value: string, name?: keyof OrderBookingType) => void
}
export const FilteredTools: FC<PropsType> = ({
  helperText,
  name,
  onFilter,
}) => {
  const [inputValue, setInputValue] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setInputValue(value)
    onFilter?.(value, name)
  }

  return (
    <TextInput
      placeholder={helperText}
      value={inputValue}
      onChangeHandler={onChangeHandler}
      classNameInput={css.orderTab__filter_input_width}
    />
  )
}
