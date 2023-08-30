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
              <th>Марка автомобиля</th>
              <th>Гос. номер</th>
              <th>Фамилия водителя</th>
              <th>Время выезда</th>
              <th>Время заезда</th>
              <th>Заказчики</th>
              <th>Путевка дейстительна до</th>
              <th>Тех. карта</th>
              <th>Примечания</th>
              <th>Комментарии</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.MAM}</td>
                  <td>{data.NOMER}</td>
                  <td>{data.FIO}</td>
                  <td>{data.VR_V}</td>
                  <td>{data.VR_Z}</td>
                  <td>{data.ZAKS}</td>
                  <td>{data.END_DATE}</td>
                  <td>{data.KARTA}</td>
                  <td>{data.PRIM}</td>
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
