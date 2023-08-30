import { Table } from '../../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Код продукции', id: 1 }, // accessor is the "key" in the data},
  { title: 'Номер прейскуранта', id: 2 },
  { title: 'Артикул', id: 3 },
  { title: 'Кол-во', id: 4 },
  { title: 'Цена', id: 5 },
  { title: 'Наименование', id: 6 },
  { title: 'Ед. измерения', id: 7 },
  { title: 'Вид упаковки', id: 8 },
  { title: 'Кол-во мест', id: 9 },
  { title: 'Масса', id: 10 },
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
  },
]

export const ProductSection = () => {
  return (
    <section>
      <Table columns={columns} data={data} />
    </section>
  )
}
