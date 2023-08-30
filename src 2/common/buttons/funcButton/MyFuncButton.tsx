import { FC } from 'react'

import css from './funcButton.module.scss'

type ButtonPropsType = {
  title: string
  onClickHandler?: () => void
  classNameInput?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

export const FuncButton: FC<ButtonPropsType> = ({
  title,
  onClickHandler,
  classNameInput,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`${css.button}  ${classNameInput} `}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
