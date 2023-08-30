import { SearchBlock } from './components/searchBlock/SearchBlock'
import { Table } from './components/table/Table'
import css from './infoFromDriverStyle.module.scss'

import { CustomSelect } from '../../common/inputs/select/CustomSelect'
import { CalendarBlock } from '../../components/calendarBlock/MyCalendarBlock'

const options = [
  'Вся техника',
  'Автобусы, микроавтобусы',
  'Легковые',
  'Бортовые',
  'Механизмы',
  'Неопределено',
  'Пикапы,фургоны',
  'Прицепы',
]

const InfoFromDriver = () => {
  return (
    <div className={css.tab}>
      <div>
        <h2 className={css.title}>Название отчета</h2>
        <div className={css.tableWrapper}>
          <Table />
        </div>
        <SearchBlock />
      </div>
      <div>
        <div className={css.calendar}>
          <h2 className={css.title}>Укажите дату </h2>
          <CalendarBlock />
        </div>
        <div>
          <h2 className={css.title}>Тип техники:</h2>
          <CustomSelect options={options} onChange={() => {}} />
        </div>
        <div className={css.sortValues}>
          <h2 className={css.title}>Укажите вариант сортировки</h2>
          <label>
            <input type="checkbox" />
            <span>По шифру техники</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>По марке техники</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>По заказчику</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>По времени выезда</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>По фамилии</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>По комментариям</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>По рейсу/ адресу подачи</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default InfoFromDriver
