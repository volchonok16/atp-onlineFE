import css from './descriptionBlockStyle.module.scss'

// import { useAppSelector } from '../../../../../../hooks/useAppSelector'
// import { getDescription } from '../../model/objectAndEquipmentReducer'

import { ObjectAndEquipmentType } from 'src/features/dataEditing/tabs/objectAndEquipments/model/apiTypes'

type PropsType = {
  activeEquipment: ObjectAndEquipmentType | undefined
}
export const DescriptionBlock = ({ activeEquipment }: PropsType) => {
  const description = activeEquipment?.DESCR

  return (
    <div className={css.container}>
      <span className={css.text}>Описание и дополнительная информация</span>
      <textarea
        className={css.textArea}
        value={description ? description : ''}
        readOnly
      />
    </div>
  )
}
