import css from './flightList.module.scss'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'

export const FlightList = () => {
  return (
    <div className={css.flightList}>
      <ScrollableTableWrapper height="5rem">
        <table></table>
      </ScrollableTableWrapper>
      <div className={css.btnBlock}>
        <FuncButton title="Создать ТТН на указанный рейс" />
        <FuncButton title="Добавить рейс" />
        <FuncButton title="Удалить рейс" />
      </div>
    </div>
  )
}
