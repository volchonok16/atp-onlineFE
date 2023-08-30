import css from './driversBlockStyle.module.scss'

import { ScrollableTableWrapper } from '../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'

export const DriversBlock = () => {
  return (
    <div className={css.container}>
      <span className={css.title}>Водитель</span>
      <div className={css.tableWrapper}>
        <ScrollableTableWrapper height={'673px'}>
          <table className={css.table}>
            <tbody>
              <tr>
                <td className={css.cell}>Ivanov I.I</td>
              </tr>
            </tbody>
          </table>
        </ScrollableTableWrapper>
      </div>
    </div>
  )
}
