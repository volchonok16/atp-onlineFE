import { FC } from 'react'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { OrderPurchasesType } from '../../../orderApi'
import css from '../../dataForShippingDocs/Table/Table.module.scss'
type PropsType = {
  data: OrderPurchasesType[]
}
export const Table: FC<PropsType> = ({ data }) => {
  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Заказчик</th>
              <th>Организация/собственник ТС</th>
              <th>Привлеченный транспорт</th>
              <th>Разовая заявка</th>
              <th>Маршрут/рейс</th>
              <th>Тип авто</th>
              <th>Автомобиль</th>
              <th>Водитель</th>
              <th>Время подачи ТС</th>
              <th>Время окончания</th>
              <th>Кол-во часов подачи</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.ZAKS}</td>
                  <td>{data.MAM}</td>
                  <td>{data.NOMER}</td>
                  <td>Разовая заявка</td>
                  <td>Маршрут/рейс</td>
                  <td>Тип авто</td>
                  <td>{data.NOMER}</td>
                  <td>{data.FIO}</td>
                  <td>{data.VR_V}</td>
                  <td>{data.VR_Z}</td>
                  <td>Кол-во часов подачи</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
