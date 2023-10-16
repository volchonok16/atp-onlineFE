import { useEffect } from 'react'

import { CarList } from './carList/CarList'

import { fetchCarsData } from 'src/features/dataEditing/tabs/carsData/model/carsReducer'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

export const ShippingDocument = () => {
  const dispatch = useAppDispatch()
  const carList = useAppSelector((state) => state.cars.cars)
  useEffect(() => {
    dispatch(fetchCarsData())
  }, [])

  return (
    <section>
      <CarList carList={carList} />
      {/* <AddInfoBlock />
      <AdditionalDataBlock /> */}
    </section>
  )
}
