import css from './descriptionBlockStyle.module.scss'

import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { getDescription } from '../../model/objectAndEquipmentReducer'

export const DescriptionBlock = () => {
  const description = useAppSelector(getDescription)

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
