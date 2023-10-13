import { useEffect, useState } from 'react'

import { FilteredTools } from './filteredTools/FilteredTools'

import css from './MyDataForShippingDocs.module.scss'

import { Table } from './Table/Table'

import { RatingButton } from '../../../../common/buttons/ratingButton/MyRatingButton'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  fetchOrderBookingData,
  getOrderBookingAC,
  orderBooking,
} from '../../../../redux/orderReducer'
import { OrderBookingType } from '../../orderApi'

export const DataForShippingDocs = () => {
  const order = useAppSelector(orderBooking)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchOrderBookingData())
  }, [])
  useEffect(() => {
    if (order.length) {
      getOrderBookingAC(order)
    }
  }, [order])

  const [data, setData] = useState<OrderBookingType[]>(order)
  const filterValueHandler = (value: string, name?: keyof OrderBookingType) => {
    const newData = order.filter((el) => {
      if (name) {
        return (
          el[name] !== null &&
          el[name].toString().toUpperCase().includes(value.toUpperCase())
        )
      }
    })
    setData(newData)
  }

  return (
    <section>
      {order.length ? <Table data={data} /> : <h2>Данные отсутствуют</h2>}
      <div className={css.orderTab__filters__arrowsGroup}>
        <RatingButton fromLarge={true} onClickRating={() => {}} />
        <RatingButton fromLarge={false} onClickRating={() => {}} />
      </div>
      <div className={css.orderTab__filters__block}>
        <label>Поиск</label>
        <div className={css.orderTab__filters__inputs}>
          <FilteredTools
            name={'ZAK1'}
            helperText={'По заказчику'}
            onFilter={filterValueHandler}
          />
          <FilteredTools
            name={'ORG_NAME'}
            helperText={'По собственнику ТС'}
            onFilter={filterValueHandler}
          />
          <FilteredTools
            name={'FLIGHT'}
            onFilter={filterValueHandler}
            helperText={'По маршруту'}
          />
          <FilteredTools
            name={'MAM'}
            onFilter={filterValueHandler}
            helperText={'По автомобилю'}
          />
          <FilteredTools
            name={'FULL_FIO'}
            onFilter={filterValueHandler}
            helperText={'По водителю'}
          />
        </div>
      </div>
    </section>
  )
}
