import css from './searchBlockStyle.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'

export const SearchBlock = () => {
  return (
    <div className={css.search}>
      <input type="text" placeholder="Поиск отчета" />
      <FuncButton title="Очистить" />
    </div>
  )
}
