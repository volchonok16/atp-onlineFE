import { FC, ComponentProps } from 'react'

import css from './funcButton.module.scss'

type DefaultProps = ComponentProps<'button'>

type ButtonPropsType = DefaultProps & {
  title: string
  onClickHandler?: () => void
  classNameInput?: string
}

export const FuncButton: FC<ButtonPropsType> = ({
  title,
  onClickHandler,
  classNameInput,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${css.button}  ${classNameInput} `}
      onClick={onClickHandler || onClick}
    >
      {title}
    </button>
  )
}
