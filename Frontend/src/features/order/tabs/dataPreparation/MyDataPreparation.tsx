import { useState } from 'react'

import css from './dataPreparation.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { SelectWithoutBorder } from '../../../../common/inputs/selectWithoutBorder/MySelectWithoutBorder'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { Table } from '../../../../common/table/MyTable'
import { CalendarBlock } from '../../../../components/calendarBlock/MyCalendarBlock'

export type dataRowType = {
  col1?: string
  col2?: string
  col3?: string
  col4?: string
  col5?: string
  col6?: string
  col7?: string
  col8?: string
  col9?: string
  col10?: string
  col11?: string
  col12?: string
  col13?: string
  col14?: string
  col15?: string
}
export type headerColumnsType = {
  title: string
  id: number
}
const columns: headerColumnsType[] = [
  { title: 'В ремонте', id: 1 }, // accessor is the "key" in the data},
  { title: 'Без водителя', id: 2 },
  { title: 'Марка автомобиля', id: 3 },
  { title: 'Гос. номер', id: 4 },
  { title: 'Фамилия водителя', id: 5 },
  { title: 'Время выезда', id: 6 },
  { title: 'Время заезда', id: 7 },
  { title: 'Заказчики', id: 8 },
  { title: 'Вид перевозок', id: 9 },
  { title: 'Вид сообщения', id: 10 },
  { title: 'Примечания', id: 11 },
  { title: 'Комментарии', id: 12 },
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
    col12: '',
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
    col12: '',
  },
]

export const DataPreparation = () => {
  const [isOpenCustomer, setIsOpenCustomer] = useState(false)
  const [isOpenNote, setIsOpenNote] = useState(false)
  const [isOpenSubdivision, setIsOpenSubdivision] = useState(false)
  const [isOpenFlight, setIsOpenFlight] = useState(false)

  return (
    <section className={css.dataPreparation__wrapper}>
      <div className={css.additionalInfo__table}>
        <Table columns={columns} data={data} />

        <div className={css.additionalInfo__table_footer}>
          <div className={css.additionalInfo__table_footer_row}>
            <div className={css.footer_row__left_block}>
              <SelectWithoutBorder
                title="Заказчик"
                isModalOpen={isOpenCustomer}
                setIsModalOpen={() => setIsOpenCustomer(!isOpenCustomer)}
              />
              <SelectWithoutBorder
                title="Примечание"
                isModalOpen={isOpenNote}
                setIsModalOpen={() => setIsOpenNote(!isOpenNote)}
              />
              <SelectWithoutBorder
                title="Подразделение"
                isModalOpen={isOpenSubdivision}
                setIsModalOpen={() => setIsOpenSubdivision(!isOpenSubdivision)}
              />
            </div>

            <div className={css.footer_row__right_block}>
              <SelectWithoutBorder
                title="Рейс"
                isModalOpen={isOpenFlight}
                setIsModalOpen={() => setIsOpenFlight(!isOpenFlight)}
              />
            </div>
          </div>

          <div className={css.additionalInfo__table_footer_row}></div>
        </div>
      </div>

      <div className={css.additionalInfo__wrapper}>
        <div className={css.additionalInfo__comments_block}>
          <TextInput title="Комментарии" />
          <TextInput title="Фильтр" />
        </div>

        <div className={css.additionalInfo__button_block}>
          <FuncButton title="Сброс" />
        </div>

        <div className={css.additionalInfo__time_block}>
          <TextInput title="Время выезда" />
          <TextInput title="Время заезда" />
        </div>

        <div className={css.additionalInfo__block}>
          <div className={css.additionalInfo__block_title}>
            Действительно до
          </div>

          <CalendarBlock />
        </div>
      </div>
    </section>
  )
}
