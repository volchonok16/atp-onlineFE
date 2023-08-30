import { useEffect } from 'react'

import css from './PreparationData.module.scss'
import { Table } from './table/Table'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  fetchPreparingData,
  orderPreparingData,
} from '../../../../redux/orderReducer'

export const PreparationData = () => {
  const orderDates = useAppSelector(orderPreparingData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPreparingData())
  }, [])
  return (
    <section>
      {orderDates.length ? (
        <Table data={orderDates} />
      ) : (
        <h2>Данные отсутствуют</h2>
      )}
      <div className={css.orderPrepTab__filters_block}>
        <div className={css.orderPrepTab__filters_input}>
          <TextInput
            title={'Комментарии'}
            classNameInput={css.orderTab__filter_input_width}
          />

          <div className={css.orderPrepTab__filters_input}>
            <TextInput
              title={'Фильтр'}
              classNameInput={css.orderTab__filter_input_width}
            />
          </div>
        </div>
        <div>
          <FuncButton title={'Сброс'} />
        </div>
        <div className={css.orderPrepTab__filters_input}>
          <TextInput
            title={'Время выезда'}
            classNameInput={css.orderTab__filter_input_width_s}
          />
          <TextInput
            title={'Время заезда'}
            classNameInput={css.orderTab__filter_input_width_s}
          />
        </div>
        <div className={css.orderPrepTab__filters_input_data}>
          <span>Действительно до</span>
          <TextInput />
        </div>
      </div>
    </section>
  )
}
