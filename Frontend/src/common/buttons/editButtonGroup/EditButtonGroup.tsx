import css from './editButtonGroupStyle.module.scss'

import { FuncButton } from '../funcButton/MyFuncButton'

type EditButtonGroupPropsType = {
  deleteFunc?: VoidFunction
}

export const EditButtonGroup = ({ deleteFunc }: EditButtonGroupPropsType) => {
  return (
    <section className={css.editButtonContainer}>
      <FuncButton title={'Добавить'} />
      <FuncButton title={'Удалить'} onClickHandler={deleteFunc} />
      <FuncButton title={'Дополнить'} />
      <FuncButton title={'Сохранить'} />
    </section>
  )
}
