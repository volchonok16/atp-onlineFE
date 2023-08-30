import { CreateDate } from './createDate'
import { CreateMonth } from './createMonth'

type CreateYearPropsType = {
  locale?: string
  year?: number
  monthNumber?: number
}

export const CreateYear = (props?: CreateYearPropsType) => {
  const locale = props?.locale ?? 'default'

  const today = CreateDate()
  const monthCount = 12

  const year = props?.year ?? today.year
  const monthNumber = props?.monthNumber ?? today.monthNumber

  const month = CreateMonth({ date: new Date(year, monthNumber - 1), locale })

  const getMonthDays = (monthIndex: number) =>
    CreateMonth({ date: new Date(year, monthIndex), locale }).createMonthDays()

  const createYearMonths = () => {
    const months = []

    for (let i = 0; i <= monthCount - 1; i++) {
      months[i] = getMonthDays(i)
    }
    return months
  }

  return {
    createYearMonths,
    month,
    year,
  }
}
