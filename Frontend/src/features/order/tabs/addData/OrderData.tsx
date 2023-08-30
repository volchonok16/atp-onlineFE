import { useEffect } from 'react'

import css from './OrderData.module.scss'

import { Table } from './table/Table'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { SelectInput } from '../../../../common/inputs/selectInput/MySelectInput'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'

import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { fetchOrderData, orderInfo } from '../../../../redux/orderReducer'

export const OrderData = () => {
  const orderDates = useAppSelector(orderInfo)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchOrderData())
  }, [])
  return (
    <section>
      {orderDates.length ? (
        <Table data={orderDates} />
      ) : (
        <h2>Данные отсутствуют</h2>
      )}
      <div className={css.orderTab__filters_block}>
        <div className={css.orderTab__filter}>
          <div className={css.orderTab__filter_input}>
            <TextInput
              title="Фильтр"
              subtitle={'по марке, номеру, фамилии, комментарию'}
              classNameInput={css.orderTab__filter_input_width}
            />
          </div>

          <FuncButton title="Сброс" />
        </div>

        <div className={css.orderTab__filter}>
          <div className={css.orderTab__filter_input}>
            <SelectInput
              title="Фильтр"
              subtitle={'по заказчику'}
              classNameInput={css.orderTab__filter_input_width}
            />
          </div>
          <FuncButton title="Сброс" />
        </div>
      </div>
    </section>
  )
}
