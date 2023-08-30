import { FC } from 'react'

import css from './selectInput.module.scss'

import dotsIcon from '../../../assets/img/dotsIcon.svg'
import inputArrowDownIcon from '../../../assets/img/inputArrowDownIcon.svg'

type SelectInputPropsType = {
  title?: string
  value?: string | number
  isModalOpen?: boolean
  setIsModalOpen?: (isModalOpen: boolean) => void
  isLinkTo?: boolean
  subtitle?: string
  classNameInput?: string

  //for formic
  id?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export const SelectInput: FC<SelectInputPropsType> = ({
  title,
  value,
  isModalOpen,
  setIsModalOpen,
  isLinkTo,
  subtitle,
  classNameInput,
  //for formic
  id,
  register,
}) => {
  return (
    <section className={css.textInput__wrapper}>
      {title && <div className={css.textInput__title}>{title}</div>}
      <div className={css.textInput__input__block}>
        <input
          type="text"
          value={value ?? ''}
          className={`${css.textInput__input} ${classNameInput}`}
          id={id}
          {...(register && id ? register(id) : {})}
        />
        {subtitle && (
          <span className={css.textInput__input__subtitle}>{subtitle}</span>
        )}
      </div>

      {isLinkTo ? (
        <div className={css.textInput__input__img_block}>
          <img
            src={inputArrowDownIcon}
            alt="arrow down"
            className={
              isModalOpen
                ? `${css.textInput__input__img} ${css.textInput__input__img_active}`
                : css.textInput__input__img
            }
            onClick={() => {
              if (setIsModalOpen) {
                setIsModalOpen(!isModalOpen)
              }
            }}
          />
          <img
            src={dotsIcon}
            alt="arrow down"
            onClick={() => {}} //redirect to different parts of app
          />
        </div>
      ) : (
        <img
          src={inputArrowDownIcon}
          alt="arrow down"
          className={
            isModalOpen
              ? `${css.textInput__input__img} ${css.textInput__input__img_active}`
              : css.textInput__input__img
          }
          onClick={() => {
            if (setIsModalOpen) {
              setIsModalOpen(!isModalOpen)
            }
          }}
        />
      )}
    </section>
  )
}
