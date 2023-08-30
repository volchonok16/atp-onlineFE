import moment from 'moment'

export const convertDate = (date: string | Date) => {
  if (!date) return ''
  return moment(date).format('DD.MM.YYYY')
}
