import { FC, useRef, useState } from 'react'

import css from './calendarBlock.module.scss'

import inputArrowDownIcon from '../../assets/img/inputArrowDownIcon.svg'
import { Calendar } from '../../common/calendar/MyCalendar'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

type CalendarBlockPropsType = {
  title?: string
  isSelect?: boolean
  value?: string | number
}

export const CalendarBlock: FC<CalendarBlockPropsType> = ({
  title,
  isSelect,
  value,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
  const [selectedDay, setSelectedDay] = useState(new Date())
  const node = useRef<HTMLDivElement>(null)

  const onClickCloseCalendar = () => {
    setIsCalendarOpen(false)
  }

  useOnClickOutside(node, onClickCloseCalendar)

  return (
    <section className={css.calendarBlock__wrapper}>
      {title && (
        <div
          className={
            isSelect ? css.calendarBlock__title_small : css.calendarBlock__title
          }
        >
          {title}
        </div>
      )}

      <div ref={node} className={css.calendarBlock__input_wrapper}>
        <div className={css.calendarBlock__input}>
          <input
            type="text"
            value={value ?? selectedDay.toLocaleDateString()}
            className={
              isSelect
                ? css.calendarBlock__input_item_small
                : css.calendarBlock__input_item
            }
            onClick={() => {
              setIsCalendarOpen(!isCalendarOpen)
            }}
          />
          <img
            src={inputArrowDownIcon}
            alt="arrow down"
            className={
              isCalendarOpen
                ? `${css.calendarBlock__img} ${css.calendarBlock__img_active}`
                : css.calendarBlock__img
            }
            onClick={() => {
              setIsCalendarOpen(!isCalendarOpen)
            }}
          />
        </div>

        {isCalendarOpen && (
          <div className={css.calendarBlock__calendar_wrapper}>
            <Calendar
              selectedDate={selectedDay}
              selectDate={(date: Date) => setSelectedDay(date)}
            />
          </div>
        )}
      </div>
    </section>
  )
}
