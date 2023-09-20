import css from './subunitOfficialTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { selectedOfficials } from '../../model/contractorOfficialReducer'

export const SubunitOfficialTable = () => {
  const subunitOfficials = useAppSelector(selectedOfficials)

  const isOfficial = !!subunitOfficials.length

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>ФИО ответственного</th>
              <th>Должность</th>
            </tr>
          </thead>
          <tbody className={css.tBody}>
            {isOfficial ? (
              subunitOfficials.map((official) => {
                return (
                  <tr key={official.DATA_FIO_KEY}>
                    <td>{official.FIO}</td>
                    <td>{official.DOLGN}</td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td className={css.firstColumn}>
                  Нет данных о должностных лицах
                </td>
                <td />
              </tr>
            )}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
