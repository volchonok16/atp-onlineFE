import css from './timingControlTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { getTimingControlData } from '../../../../../../redux/catalogs/extendedInfoReducer'

export const TimingControlTable = () => {
  const timingControlData = useAppSelector(getTimingControlData)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'203px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Наименование документа</th>
              <th>Номер</th>
              <th>Выдано</th>
              <th>Дата выдачи</th>
              <th>Действителен до</th>
              <th>Предупреждать за, дней</th>
              <th>Комплектация</th>
            </tr>
          </thead>
          <tbody>
            {timingControlData.map((timeControl) => {
              return (
                <tr key={timeControl.RAZN_OD_DOCS_KEY}>
                  <td>{timeControl.NAIM}</td>
                  <td>{timeControl.NOMER}</td>
                  <td>{timeControl.KEM_VID}</td>
                  <td>{timeControl.DATE_OT}</td>
                  <td>{timeControl.DATE_DO}</td>
                  <td>{timeControl.D_PREDUPR}</td>
                  <td></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
