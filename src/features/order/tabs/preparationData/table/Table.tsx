import { FC } from 'react'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { OrderPreparingDataType } from '../../../orderApi'
import css from '../../dataForShippingDocs/Table/Table.module.scss'
type PropsType = {
  data: OrderPreparingDataType[] | []
}
export const Table: FC<PropsType> = ({ data }) => {
  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>В ремонте</th>
              <th>Без водителя</th>
              <th>Марка автомобиля</th>
              <th>Гос. номер</th>
              <th>Фамилия водителя</th>
              <th>Время выезда</th>
              <th>Время заезда</th>
              <th>Заказчики</th>
              <th>Вид перевозок</th>
              <th>Вид сообщения</th>
              <th>Примечания</th>
              <th>Комментарии</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.REMONT}</td>
                  <td>{data.B_VOD}</td>
                  <td>{data.MAM}</td>
                  <td>{data.NOMER}</td>
                  <td>{data.FIO}</td>
                  <td>{data.VR_V}</td>
                  <td>{data.VR_Z}</td>
                  <td>{data.ORG_NAME}</td>
                  <td>{data.VID_PEREV}</td>
                  <td>{data.VID_SOOB}</td>
                  <td>{data.PRIM_4_SORT}</td>
                  <td>{data.COMMENTAR}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
