import { FC } from 'react'

import css from './calendar.module.scss'

import arrowDown from '../../assets/img/arrowDownIcon.svg'
import arrowUp from '../../assets/img/arrowUpIcon.svg'
import dropDown from '../../assets/img/dropDownIcon.svg'
import { useCalendar } from '../../hooks/useCalendar'
import { checkDateIsEqual } from '../../utils/calendarUtils/checkDateIsEqual'
import { checkIsToday } from '../../utils/calendarUtils/checkIsToday'

type CalendarPropsType = {
  selectedDate: Date
  selectDate: (date: Date) => void
  locale?: string
  firstWeekDay?: number
}

export const Calendar: FC<CalendarPropsType> = ({
  selectedDate,
  selectDate,
  locale = 'default',
  firstWeekDay = 2,
}) => {
  const { state, functions } = useCalendar({
    firstWeekDay,
    locale,
    selectedDate,
  })

  return (
    <div className={css.calendar__wrapper}>
      <div className={css.calendar__title}>
        <label className={css.calendar__title__label} htmlFor="select">
          <select
            id="select"
            name="select"
            className={css.calendar__title__select}
            value={state.selectedMonth.monthIndex}
            onChange={(event) =>
              functions.setSelectedMonthByIndex(
                Number(event.currentTarget.value),
              )
            }
          >
            {state.monthsNames.map((month, index) => (
              <option key={month.month} value={index}>
                {month.month[0].toUpperCase() + month.month.slice(1)}{' '}
                {state.selectedYear}
              </option>
            ))}
          </select>
          <img src={dropDown} alt="drop down" />
        </label>

        <div className={css.calendar__title__arrow_block}>
          <img
            src={arrowUp}
            alt="arrow up"
            onClick={() => functions.onClickArrow('up')}
          />
          <img
            src={arrowDown}
            alt="arrow down"
            onClick={() => functions.onClickArrow('down')}
          />
        </div>
      </div>

      <div className={css.calendar__body}>
        {state.mode === 'days' && (
          <>
            <div className={css.calendar__week__names}>
              {state.weekDaysNames.map((weekDayName) => (
                <div
                  key={weekDayName.dayShort}
                  className={css.calendar__week__names_item}
                >
                  {weekDayName.dayShort[0].toUpperCase() +
                    weekDayName.dayShort.slice(1)}
                </div>
              ))}
            </div>

            <div className={css.calendar__days}>
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date)
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date,
                )
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex
                const isWeekEnd =
                  day.dayNumberInWeek === 1 || day.dayNumberInWeek === 7
                const isWeekEndInThisMonth =
                  isWeekEnd && day.monthIndex === state.selectedMonth.monthIndex

                return (
                  <button
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    className={[
                      css.calendar__day,
                      isToday ? css.calendar__today__item : '',
                      isSelectedDay ? css.calendar__selected__item : '',
                      isAdditionalDay ? css.calendar__additional__day : '',
                      isWeekEndInThisMonth ? css.calendar__weekend__day : '',
                    ].join(' ')}
                    onClick={() => {
                      functions.setSelectedDay(day)
                      selectDate(day.date)
                    }}
                  >
                    {day.dayNumber}
                  </button>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
