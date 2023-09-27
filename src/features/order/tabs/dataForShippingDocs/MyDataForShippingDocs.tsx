import { useEffect, useState } from 'react'

import { FilteredTools } from './filteredTools/FilteredTools'

import css from './MyDataForShippingDocs.module.scss'

import { Table } from './Table/Table'

import { RatingButton } from '../../../../common/buttons/ratingButton/MyRatingButton'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  fetchOrderByOrder,
  getOrderBookingAC,
  orderBooking,
  orderInfo,
} from '../../../../redux/orderReducer'
import { OrderBookingType } from '../../orderApi'

export const DataForShippingDocs = () => {
  const order = useAppSelector(orderBooking)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchOrderByOrder())
  }, [])
  useEffect(() => {
    if (order.length) {
      getOrderBookingAC(order)
    }
  }, [order])

  const [data, setData] = useState<OrderBookingType[]>(order)
  /*  const filterValueHandler = (value: string, name?: keyof OrderByOrderType) => {
    const newData = order.filter((el) => {
      if (name) {
        return (
          el[name] !== null &&
          el[name].toUpperCase().includes(value.toUpperCase())
        )
      }
    })
    setData(newData)
  }*/
  // ф-ция заглушка для ф-ции р.33
  const filterValueHandler = () => {
    setData(data)
  }
  return (
    <section>
      {orderInfo.length ? <Table data={data} /> : <h2>Данные отсутствуют</h2>}
      <div className={css.orderTab__filters__arrowsGroup}>
        <RatingButton fromLarge={true} onClickRating={() => {}} />
        <RatingButton fromLarge={false} onClickRating={() => {}} />
      </div>
      <div className={css.orderTab__filters__block}>
        <label>Поиск</label>
        <div className={css.orderTab__filters__inputs}>
          <FilteredTools
            helperText={'По заказчику'}
            onFilter={filterValueHandler}
          />
          <FilteredTools
            helperText={'По собственнику ТС'}
            onFilter={filterValueHandler}
          />
          <FilteredTools
            onFilter={filterValueHandler}
            helperText={'По маршруту'}
          />
          <FilteredTools
            onFilter={filterValueHandler}
            helperText={'По автомобилю'}
          />
          <FilteredTools
            onFilter={filterValueHandler}
            helperText={'По водителю'}
          />
        </div>
      </div>
    </section>
  )
}
