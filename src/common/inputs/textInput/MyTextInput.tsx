import { ChangeEvent, FC } from 'react'

import css from './textInput.module.scss'

import dotsIcon from '../../../assets/img/dotsIcon.svg'

type TextInputPropsType = {
  title?: string
  value?: string | number
  placeholder?: string
  isLinkTo?: boolean
  width?: boolean

  //for formic
  id?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
  subtitle?: string
  classNameInput?: string
  onChangeHandler?: (value: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: FC<TextInputPropsType> = ({
  title,
  value,
  placeholder,
  isLinkTo,
  subtitle,
  classNameInput,
  onChangeHandler,
  //for formic
  id,
  register,
}) => {
  return (
    <>
      <div className={css.textInput__wrapper}>
        {title && <span className={css.textInput__title}>{title}</span>}
        <div className={`${css.textInput__input__block} ${classNameInput}`}>
          <input
            className={css.textInput__input}
            type="text"
            value={value ?? ''}
            placeholder={placeholder}
            onChange={(e) => {
              if (onChangeHandler) onChangeHandler(e)
            }}
            id={id}
            {...(register && id ? register(id) : {})}
          />

          {subtitle && (
            <span className={css.textInput__input__subtitle}>{subtitle}</span>
          )}
        </div>
        {isLinkTo && (
          <img
            src={dotsIcon}
            alt="arrow down"
            className={css.textInput__input__img}
            onClick={() => {
              console.log('')
            }} //redirect to different parts of app
          />
        )}
      </div>
    </>
  )
}
