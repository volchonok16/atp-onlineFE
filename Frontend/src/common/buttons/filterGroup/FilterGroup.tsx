import css from './filterGroupStyle.module.scss'

import { FuncButton } from '../funcButton/MyFuncButton'

type FilterGroupPropsType = {
  title: string
}

export const FilterGroup = ({ title }: FilterGroupPropsType) => {
  return (
    <div className={css.filterGroupContainer}>
      <div className={css.filter}>
        <p className={css.filterTitle}>Фильтр</p>
        <div className={css.inputWrapper}>
          <input className={css.input} />
          <p className={css.descriptionTitle}>{title}</p>
        </div>
      </div>
      <FuncButton title={'Сбросить'} />
    </div>
  )
}
