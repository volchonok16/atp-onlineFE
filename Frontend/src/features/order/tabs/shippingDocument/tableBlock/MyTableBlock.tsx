import css from './tableBlock.module.scss'

import { FuncButton } from '../../../../../common/buttons/funcButton/MyFuncButton'
import { Table } from '../../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Заказчик', id: 1 }, // accessor is the "key" in the data},
  { title: 'Автомобиль', id: 2 },
  { title: 'Подразделение', id: 3 },
  { title: 'Примечания', id: 4 },
]
const data: dataRowType[] = [
  {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
  },
  {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
  },
]

export const TableBlock = () => {
  return (
    <section className={css.tableBlock__wrapper}>
      <div className={css.tableBlock__table_wrapper}>
        <div className={css.table__wrapper}>
          <Table columns={columns} data={data} />
        </div>
        <div className={css.button__wrapper}>
          <FuncButton title="Создать ТТН на указанный адрес" />
        </div>
      </div>

      <div className={css.tableBlock__buttons_wrapper}>
        <FuncButton title="Добавить запись" />
        <FuncButton title="Удалить" />
        <FuncButton title="Сохранить" />
        <FuncButton title="Отменить" />
      </div>
    </section>
  )
}
