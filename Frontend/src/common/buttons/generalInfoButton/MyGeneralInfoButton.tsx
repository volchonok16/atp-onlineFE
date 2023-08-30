import { FC } from 'react'

import css from './generalInfoButton.module.scss'

type GeneralInfoButton = {
  title: string
  onClickHandler?: () => void
  isActive?: true
}

export const GeneralInfoButton: FC<GeneralInfoButton> = ({
  title,
  isActive,
}) => {
  return (
    <button
      className={isActive ? `${css.button} ${css.button__active}` : css.button}
    >
      {title}
    </button>
  )
}
