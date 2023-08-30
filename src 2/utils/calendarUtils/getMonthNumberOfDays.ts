export const GetMonthNumberOfDays = (
  monthIndex: number,
  yearNumber: number = new Date().getFullYear(),
) => new Date(yearNumber, monthIndex + 1, 0).getDate() // 0 указывает на последнийдень предыдущего месяца, значит мы поймем сколько дней в месяце
