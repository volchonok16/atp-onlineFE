import moment from 'moment'
import { useState, useEffect } from 'react'

import { CarList } from './carList/CarList'

import { DateSelector } from './dateSelector/DateSelector'
import { FlightList } from './flightList/FlightList'

import css from './shippingDocument.module.scss'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { fetchCarsData } from 'src/features/dataEditing/tabs/carsData/model/carsReducer'
import { MainData } from 'src/features/order/tabs/shippingDocument/mainData/MainData'
import { useAppDispatch } from 'src/hooks/useAppDispatch'

import { useAppSelector } from 'src/hooks/useAppSelector'

export const ShippingDocument = () => {
  const dispatch = useAppDispatch()
  const today = moment().format('YYYY-MM-DD')
  const [selectedDate, setSelectedDate] = useState(today)
  const carList = useAppSelector((state) => state.cars.cars)
  useEffect(() => {
    dispatch(fetchCarsData())
  }, [])
  return (
    <section className={css.shippingDocument}>
      <div className={css.date}>
        <DateSelector
          selectedDate={selectedDate}
          onChangeDate={setSelectedDate}
        />
      </div>
      <div className={css.carList}>
        <CarList carList={carList} />
      </div>
      <div className={css.flightList}>
        <FlightList />
      </div>
      <div className={css.mainData}>
        <MainData />
      </div>
      <div className={css.additionalData}></div>
      {/* <AddInfoBlock />
      <AdditionalDataBlock /> */}
      <div className={css.btnBlock}>
        <FuncButton title="Печать ТН" />
        <FuncButton title="Печать ТТН" />
        <FuncButton title="Сохранить ТТН" />
        <FuncButton title="Удалить ТТН" />
      </div>
    </section>
  )
}
