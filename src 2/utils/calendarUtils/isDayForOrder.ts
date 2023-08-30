export const checkIsDayForOrder = (
  currentDay: number,
  dayOfCurrentMonth: number,
) => {
  const dayOfWeek = new Date().getDay()

  if (dayOfCurrentMonth === new Date().getMonth()) {
    if (dayOfWeek === 6) {
      return currentDay + 2
    }
    if (dayOfWeek === 5) {
      return currentDay + 3
    } else {
      return currentDay + 1
    }
  }
}
