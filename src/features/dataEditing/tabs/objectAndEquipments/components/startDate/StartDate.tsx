import css from './startDateStyle.module.scss'

// import { useAppSelector } from '../../../../../../hooks/useAppSelector'
// import { getStartDate } from '../../model/objectAndEquipmentReducer'

import { ObjectAndEquipmentType } from 'src/features/dataEditing/tabs/objectAndEquipments/model/apiTypes'

type PropsType = {
  activeEquipment: ObjectAndEquipmentType | undefined
}
export const StartDate = ({ activeEquipment }: PropsType) => {
  const startDate = activeEquipment?.DATE_VVODA ?? ''

  return (
    <div className={css.container}>
      <span className={css.text}>Дата ввода в эксплуатацию</span>
      <input className={css.input} value={startDate} readOnly />
    </div>
  )
}
