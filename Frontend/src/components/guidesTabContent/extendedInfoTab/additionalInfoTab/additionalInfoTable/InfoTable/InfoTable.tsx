import css from './infoTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'

import { TableDataType } from '../MyAdditionalInfoTable'

export type InfoTablePropsType = {
  data: TableDataType[]
}

export const InfoTable = ({ data }: InfoTablePropsType) => {
  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'580px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Дата от</th>
              <th>Дата до</th>
            </tr>
          </thead>
          <tbody>
            {data.map((info) => {
              return (
                <tr key={info.key}>
                  <td>{info.date_ot}</td>
                  <td>{info.date_do}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
