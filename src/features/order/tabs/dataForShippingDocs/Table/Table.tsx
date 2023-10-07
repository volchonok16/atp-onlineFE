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
              <th>Общее количество часов</th>
              <th>Тариф для заказчика</th>
              <th>Сумма для заказчика</th>
              <th>Тариф для подрядчика</th>
              <th>Кол-во часов для подрядчика</th>
              <th>Сумма</th>
              <th>Прибыль с поездки подрядчика</th>
              <th>Комментарий</th>
              <th>Второй водитель</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.ZAK1}</td>
                  <td>{data.ORG_NAME}</td>
                  <td>{data.PRIVL_TRANSPORT}</td>
                  <td>{data.RAZOV}</td>
                  <td>{data.FLIGHT}</td>
                  <td>{data.T_T}</td>
                  <td>{data.MAM}</td>
                  <td>{data.FULL_FIO}</td>
                  <td>{data.VR_V}</td>
                  <td>{data.VR_Z}</td>
                  <td>{data.VR_I}</td>
                  <td>{data.SUMM_VREM}</td>
                  <td>{data.CENA}</td>
                  <td>{data.SUMM}</td>
                  <td>{data.CENA_PODR}</td>
                  <td>{data.VREM_I_PODR}</td>
                  <td>{data.SUMM_PODR}</td>
                  <td>{data.PROFIT_PODR}</td>
                  <td>{data.COMMENTAR}</td>
                  <td>{data.FULL_FIO2}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
