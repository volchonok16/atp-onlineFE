import { CreateDate } from './createDate'

export const GetWeekDaysNames = (firstWeekDay = 2, locale = 'defalut') => {
  const weekDaysNames: {
    day: ReturnType<typeof CreateDate>['day']
    dayShort: ReturnType<typeof CreateDate>['dayShort']
  }[] = Array.from({ length: 7 })

  const d = new Date()

  weekDaysNames.forEach((_, i) => {
    const { day, dayNumberInWeek, dayShort } = CreateDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + i),
    })

    weekDaysNames[dayNumberInWeek - 1] = { day, dayShort }
  })

  return [
    ...weekDaysNames.slice(firstWeekDay - 1),
    ...weekDaysNames.slice(0, firstWeekDay - 1),
  ]
}
