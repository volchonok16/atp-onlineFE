import css from './directionForRepair.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { Table } from '../../../../common/table/MyTable'

import {
  dataRowType,
  headerColumnsType,
} from '../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: '№ направления', id: 1 },
  { title: 'Фамилия И.О.', id: 2 },
  { title: 'Ремонтируемая техника', id: 3 },
  { title: 'Иные работы', id: 4 },
  { title: 'Время начала', id: 5 },
  { title: 'Время окончания', id: 6 },
]
const data: dataRowType[] = [
  {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
  },
  {
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
  },
]

export const DirectionForRepair = () => {
  return (
    <section className={css.directionForRepair__wrapper}>
      <div className={css.directionForRepair__table}>
        <Table columns={columns} data={data} />
      </div>
      <div></div>

      <div className={css.directionForRepair__buttons}>
        <FuncButton title="Добавить запись" />
        <FuncButton title="Удалить" />
        <FuncButton title="Сохранить" />
        <FuncButton title="Отменить" />
        <FuncButton title="Обновить данные" />
        <FuncButton title="Печать" />
      </div>
    </section>
  )
}
