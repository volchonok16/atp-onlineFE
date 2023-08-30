import css from './headerButtons.module.scss'

import { FuncButton } from '../../../common/buttons/funcButton/MyFuncButton'
import { Employee } from '../employee/Employee'

export const HeaderButtons = () => {
  return (
    <div className={css.container}>
      <div className={css.headerButtons__wrapper}>
        <FuncButton title="Файл" />
        <FuncButton title="Операции" />
        <FuncButton title="Информация" />
        <FuncButton title="Администрирование" />
        <FuncButton title="Помощь" />
      </div>
      <Employee />
    </div>
  )
}
