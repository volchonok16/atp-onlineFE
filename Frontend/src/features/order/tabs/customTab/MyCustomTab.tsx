import { useState } from 'react'

import css from './customTab.module.scss'

import { RatingButton } from '../../../../common/buttons/ratingButton/MyRatingButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { Table } from '../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Заказчик', id: 1 },
  { title: 'Организация/собственник ТС', id: 2 },
  { title: 'Привлеченный транспорт', id: 3 },
  { title: 'Разовая заявка', id: 4 },
  { title: 'Маршрут/рейс', id: 5 },
  { title: 'Тип авто', id: 6 },
  { title: 'Автомобиль', id: 7 },
  { title: 'Водитель', id: 8 },
  { title: 'Время подачи ТС', id: 9 },
  { title: 'Время окончания', id: 10 },
  { title: 'Кол-во часов подачи', id: 11 },
]
const data: dataRowType[] = [
  {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
    col7: '',
    col8: '',
    col9: '',
    col10: '',
    col11: '',
  },
  {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
    col7: '',
    col8: '',
    col9: '',
    col10: '',
    col11: '',
  },
]

export const CustomTab: React.FC = () => {
  const [isFromLargest, setFromLargest] = useState<boolean>(false)
  const [isFromSmallest, setFromSmallest] = useState<boolean>(false)

  return (
    <section className={css.customTab__wrapper}>
      <div className={css.customTab__table}>
        <Table columns={columns} data={data} />
      </div>

      <div className={css.customTab__filters_block}>
        <div className={css.customTab__rating_buttons}>
          <RatingButton
            isFromLargest={isFromLargest}
            fromLarge={true}
            onClickRating={() => {
              setFromLargest(true)
              setFromSmallest(false)
            }}
          />
          <RatingButton
            isFromSmallest={isFromSmallest}
            fromLarge={false}
            onClickRating={() => {
              setFromLargest(false)
              setFromSmallest(true)
            }}
          />
        </div>

        <div className={css.customTab__filters}>
          <span className={css.customTab__filter_title}>Поиск</span>
          <div className={css.customTab__filter}>
            <TextInput placeholder="По заказчику" />
          </div>
          <div className={css.customTab__filter}>
            <TextInput placeholder="По собственнику ТС" />
          </div>
          <div className={css.customTab__filter}>
            <TextInput placeholder="По маршруту" />
          </div>
          <div className={css.customTab__filter}>
            <TextInput placeholder="По автомобилю" />
          </div>
          <div className={css.customTab__filter}>
            <TextInput placeholder="По водителю" />
          </div>
        </div>
      </div>
    </section>
  )
}
