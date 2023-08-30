import css from './communicationsTypeTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getCommunicationsType } from '../../../../../redux/catalogs/directoriesReducer'

export const CommunicationsTypeTable = () => {
  const communicationsTypeData = useAppSelector(getCommunicationsType)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Виды сообщений</th>
            </tr>
          </thead>
          <tbody>
            {communicationsTypeData.map((communication) => {
              return (
                <tr key={communication.RAZN_VID_SOOBSH_KEY}>
                  <td className={css.tableCell}>{communication.VID_SOOBSH}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
