import { FC } from 'react'

import css from './selectWithoutBorder.module.scss'

import inputArrowDownIcon from '../../../assets/img/inputArrowDownIcon.svg'
import inputArrowDownIconActiveIcon from '../../../assets/img/inputArrowDownIconActive.svg'

type TextInputPropsType = {
  title: string
  isModalOpen: boolean
  setIsModalOpen: () => void
}

export const SelectWithoutBorder: FC<TextInputPropsType> = ({
  title,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <section className={css.selectWithoutBorder__wrapper}>
      <div className={css.selectWithoutBorder__title}>{title}</div>

      <img
        src={isModalOpen ? inputArrowDownIconActiveIcon : inputArrowDownIcon}
        alt="arrow down"
        className={css.textInput__input__img}
        onClick={setIsModalOpen}
      />
    </section>
  )
}
