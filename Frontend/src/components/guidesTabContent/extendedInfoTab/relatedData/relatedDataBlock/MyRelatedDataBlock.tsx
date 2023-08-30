import { FC } from 'react'

import css from './relatedDataBlock.module.scss'

import { TextInput } from '../../../../../common/inputs/textInput/MyTextInput'

import { CalendarBlock } from '../../../../calendarBlock/MyCalendarBlock'

type RelatedDataBlockPropsType = {
  title: string
  inputTitlesArray: InputTitleDataType[]
  checkboxTitlesArray?: CheckBoxTitleDataType[]
  calendarTitle?: string
}

type InputTitleDataType = {
  title: string
  value: string | number
}

type CheckBoxTitleDataType = {
  title: string
  value: number
}

export const RelatedDataBlock: FC<RelatedDataBlockPropsType> = ({
  title,
  inputTitlesArray,
  checkboxTitlesArray,
  calendarTitle,
}) => {
  return (
    <section className={css.relatedDataBlock__wrapper}>
      <span className={css.relatedDataBlock__title}>{title}</span>

      <div className={css.relatedDataBlock__content}>
        {checkboxTitlesArray &&
          checkboxTitlesArray.map((el, index) => (
            <div key={index} className={css.relatedDataBlock__content_item}>
              <span
                className={
                  checkboxTitlesArray &&
                  css.relatedDataBlock__content_checkbox_title
                }
              >
                {el.title}
              </span>
              <input
                className={css.checkbox}
                type={'checkbox'}
                checked={!!el.value}
              />
            </div>
          ))}

        {inputTitlesArray.map((el, index) => (
          <div key={index} className={css.relatedDataBlock__content_item}>
            <span className={css.relatedDataBlock__content_item_title}>
              {el.title}
            </span>
            <TextInput value={el.value} />
          </div>
        ))}

        {calendarTitle && (
          <div className={css.relatedDataBlock__content_item}>
            <span className={css.relatedDataBlock__content_item_title}>
              {calendarTitle}
            </span>
            <CalendarBlock isSelect={true} />
          </div>
        )}
      </div>
    </section>
  )
}
