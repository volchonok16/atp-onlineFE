import css from './startDateStyle.module.scss'

import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { getStartDate } from '../../model/objectAndEquipmentReducer'

export const StartDate = () => {
  const startDate = useAppSelector(getStartDate)

  return (
    <div className={css.container}>
      <span className={css.text}>Дата ввода в эксплуатацию</span>
      <input className={css.input} value={startDate} readOnly />
    </div>
  )
}
