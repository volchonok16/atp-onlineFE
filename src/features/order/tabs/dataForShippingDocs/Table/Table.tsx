import { FC } from 'react'

import css from './Table.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { OrderBookingType } from '../../../orderApi'
type PropsType = {
  data: OrderBookingType[]
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
