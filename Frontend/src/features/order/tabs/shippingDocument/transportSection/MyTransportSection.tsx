import { Table } from '../../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Краткое наименование товара', id: 1 }, // accessor is the "key" in the data},
  { title: 'Документы к грузу', id: 2 },
  { title: 'Вид упаковки', id: 3 },
  { title: 'Кол-во мест', id: 4 },
  { title: 'Код груза', id: 5 },
  { title: 'Способ определения массы', id: 6 },
  { title: 'Номер контейнера', id: 7 },
  { title: 'Класс груза', id: 8 },
  { title: 'Масса брутто, т', id: 9 },
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
  },
]

export const TransportSection = () => {
  return (
    <section>
      <Table columns={columns} data={data} />
    </section>
  )
}
