import css from './editButtonGroupStyle.module.scss'

import { FuncButton } from '../funcButton/MyFuncButton'

type EditButtonGroupPropsType = {
  deleteFunc?: VoidFunction
  saveFunc?: VoidFunction
  addFunc?: VoidFunction
}

export const EditButtonGroup = ({
  deleteFunc,
  saveFunc,
  addFunc,
}: EditButtonGroupPropsType) => {
  return (
    <section className={css.editButtonContainer}>
      <FuncButton title={'Добавить'} onClickHandler={addFunc} />
      <FuncButton title={'Удалить'} onClickHandler={deleteFunc} />
      <FuncButton title={'Дополнить'} />
      <FuncButton title={'Сохранить'} onClickHandler={saveFunc} />
    </section>
  )
}
