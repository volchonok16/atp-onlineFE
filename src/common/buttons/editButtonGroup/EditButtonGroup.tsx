import css from './editButtonGroupStyle.module.scss'

import { FuncButton } from '../funcButton/MyFuncButton'

type EditButtonGroupPropsType = {
  deleteFunc?: VoidFunction
  addFunction?: VoidFunction
}

export const EditButtonGroup = ({
  deleteFunc,
  addFunction,
}: EditButtonGroupPropsType) => {
  return (
    <section className={css.editButtonContainer}>
      <FuncButton title={'Добавить'} onClickHandler={addFunction} />
      <FuncButton title={'Удалить'} onClickHandler={deleteFunc} />
      <FuncButton title={'Дополнить'} />
      <FuncButton title={'Сохранить'} />
    </section>
  )
}
