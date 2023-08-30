import { useState, useMemo } from 'react'

import { CreateDate } from '../utils/calendarUtils/createDate'
import { CreateMonth } from '../utils/calendarUtils/createMonth'
import { GetMonthNumberOfDays } from '../utils/calendarUtils/getMonthNumberOfDays'
import { GetMonthsNames } from '../utils/calendarUtils/getMonthsNames'
import { GetWeekDaysNames } from '../utils/calendarUtils/getWeekDaysNames'

type UseCalendarPropsType = {
  selectedDate: Date
  locale?: string
  firstWeekDay: number
}

const getYearsInterval = (year: number) => {
  const startYear = Math.floor(year / 10) * 10
  return [...Array(10)].map((_, index) => startYear + index)
} //функция, которая определяет выбранный годовой интервал

export const useCalendar = ({
  locale = 'default',
  selectedDate: date,
  firstWeekDay = 2,
}: UseCalendarPropsType) => {
  const [mode, setMode] = useState<'days' | 'months' | 'years'>('days')
  const [selectedDay, setSelectedDay] = useState(CreateDate({ date }))
  const [selectedMonth, setSelectedMonth] = useState(
    CreateMonth({
      date: new Date(selectedDay.year, selectedDay.monthIndex),
      locale,
    }),
  )
  const [selectedYear, setSelectedYear] = useState(selectedDay.year)
  const [selectedYearsInterval, setSelectedYearsInterval] = useState(
    getYearsInterval(selectedDay.year),
  )

  const monthsNames = useMemo(() => GetMonthsNames(locale), [])
  const weekDaysNames = useMemo(
    () => GetWeekDaysNames(firstWeekDay, locale),
    [],
  )

  const days = useMemo(
    () => selectedMonth.createMonthDays(),
    [selectedMonth, selectedYear],
  )

  const calendarDays = useMemo(() => {
    const monthNumberOfDays = GetMonthNumberOfDays(
      selectedMonth.monthIndex,
      selectedYear,
    )

    const prevMonthDays = CreateMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays()

    const nextMonthDays = CreateMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays()

    const firstDay = days[0]
    const lastDay = days[monthNumberOfDays - 1]

    const shiftIndex = firstWeekDay - 1
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex

    const numberOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays

    const result = []

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i
      result[i] = prevMonthDays[prevMonthDays.length - inverted]
    }

    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i += 1
    ) {
      result[i] = days[i - numberOfPrevDays]
    }

    for (
      let i = totalCalendarDays - numberOfNextDays;
      i < totalCalendarDays;
      i += 1
    ) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays]
    }

    return result
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear])

  const onClickArrow = (direction: 'up' | 'down') => {
    if (mode === 'years' && direction === 'down') {
      return setSelectedYearsInterval(
        getYearsInterval(selectedYearsInterval[0] - 10),
      )
    }

    if (mode === 'years' && direction === 'up') {
      return setSelectedYearsInterval(
        getYearsInterval(selectedYearsInterval[0] + 10),
      )
    }

    if (mode === 'months' && direction === 'down') {
      const year = selectedYear - 1
      if (!selectedYearsInterval.includes(year))
        setSelectedYearsInterval(getYearsInterval(year))
      return setSelectedYear(selectedYear - 1)
    }

    if (mode === 'months' && direction === 'up') {
      const year = selectedYear + 1
      if (!selectedYearsInterval.includes(year))
        setSelectedYearsInterval(getYearsInterval(year))
      return setSelectedYear(selectedYear + 1)
    }

    if (mode === 'days') {
      const monthIndex =
        direction === 'up'
          ? selectedMonth.monthIndex - 1
          : selectedMonth.monthIndex + 1
      console.log(monthIndex)
      if (monthIndex === -1) {
        const year = selectedYear - 1
        setSelectedYear(year)
        if (!selectedYearsInterval.includes(year))
          setSelectedYearsInterval(getYearsInterval(year))
        return setSelectedMonth(
          CreateMonth({ date: new Date(selectedYear - 1, 11), locale }),
        )
      }

      if (monthIndex === 12) {
        const year = selectedYear + 1
        setSelectedYear(year)
        if (!selectedYearsInterval.includes(year))
          setSelectedYearsInterval(getYearsInterval(year))
        return setSelectedMonth(
          CreateMonth({ date: new Date(year, 0), locale }),
        )
      }

      setSelectedMonth(
        CreateMonth({ date: new Date(selectedYear, monthIndex), locale }),
      )
    }
  }

  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(
      CreateMonth({ date: new Date(selectedYear, monthIndex), locale }),
    )
  }

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthsNames,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedYearsInterval,
    },
    functions: {
      onClickArrow,
      setMode,
      setSelectedDay,
      setSelectedMonthByIndex,
      setSelectedYear,
      setSelectedYearsInterval,
    },
  }
}
