import css from './deleteRowModalStyle.module.scss'

import confirm from '../../../assets/img/confirmActionIcon.svg'
import { FuncButton } from '../../buttons/funcButton/MyFuncButton'

type DeleteRowModalPropsType = {
  deleteRow: VoidFunction
  closeModal: VoidFunction
}

export const DeleteRowModal = ({
  closeModal,
  deleteRow,
}: DeleteRowModalPropsType) => {
  return (
    <div className={css.modalContainer}>
      <div className={css.informationGroup}>
        <img src={confirm} className={css.image} alt={'question_icon'} />
        <div className={css.question}>
          <span>Вы действително</span>
          <span>хотите удалить</span>
          <span>строку?</span>
        </div>
      </div>
      <div className={css.buttonGroup}>
        <FuncButton title={'Удалить'} onClickHandler={deleteRow} />
        <FuncButton title={'Отменить'} onClickHandler={closeModal} />
      </div>
    </div>
  )
}
