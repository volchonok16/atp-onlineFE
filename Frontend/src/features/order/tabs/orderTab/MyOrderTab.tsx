import { useState } from 'react'

import css from './orderTab.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { SelectInput } from '../../../../common/inputs/selectInput/MySelectInput'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { SingleParamSearchModal } from '../../../../common/modals/singleParamSearchModal/MySingleParamSearchModal'
import { Table } from '../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Марка автомобиля', id: 1 },
  { title: 'Гос. номер', id: 2 },
  { title: 'Фамилия водителя', id: 3 },
  { title: 'Время выезда', id: 4 },
  { title: 'Время заезда', id: 5 },
  { title: 'Время выезда', id: 6 },
  { title: 'Заказчики', id: 7 },
  { title: 'Путевка действительна до', id: 8 },
  { title: 'Тех карта', id: 9 },
  { title: 'Примечания', id: 10 },
  { title: 'Комментарии', id: 11 },
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
const customerData = [
  { item: 'Иванов Иван', id: 1 },
  { item: 'Иванов Иван', id: 2 },
  { item: 'Иванов Иван', id: 3 },
  { item: 'Иванов Иван', id: 4 },
]

export const OrderTab = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <section className={css.orderTab__wrapper}>
      <div className={css.orderTab__table}>
        <Table columns={columns} data={data} />
      </div>

      <div className={css.orderTab__filters_block}>
        <div className={css.orderTab__filter}>
          <div className={css.orderTab__filter_input}>
            <TextInput title="Фильтр" />
            <span className={css.orderTab__filter_label}>
              по марке, номеру, фамилии, комментарию
            </span>
          </div>

          <FuncButton title="Сброс" />
        </div>

        <div className={css.orderTab__filter}>
          <div className={css.orderTab__filter_input}>
            <SelectInput
              title="Фильтр"
              isModalOpen={isModalOpen}
              setIsModalOpen={() => setIsModalOpen(true)}
            />
            <span className={css.orderTab__filter_label}>по заказчику</span>
          </div>
          <FuncButton title="Сброс" />
        </div>

        {isModalOpen && (
          <div className={css.modal__wrapper}>
            <SingleParamSearchModal
              setIsModalOpen={() => setIsModalOpen(false)}
              dataForModal={customerData}
              title="Заказчик"
            />
          </div>
        )}
      </div>
    </section>
  )
}
