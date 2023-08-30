import css from './rightInfoSection.module.scss'

import { FuncButton } from '../../../../../common/buttons/funcButton/MyFuncButton'
import { TextInput } from '../../../../../common/inputs/textInput/MyTextInput'
import { Table } from '../../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Марка автомобиля', id: 1 },
  { title: 'Фамилия И.О.', id: 2 },
  { title: 'Гос. номер', id: 3 },
  { title: 'Гар. номер', id: 4 },
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

export const RightInfoSection: React.FC = () => {
  return (
    <section className={css.rightInfoSection__wrapper}>
      <div className={css.rightInfoSection__table}>
        <Table columns={columns} data={data} />
      </div>

      <div className={css.rightInfoSection__filter}>
        <span className={css.rightInfoSection__filter_title}>Фильтр</span>

        <div className={css.rightInfoSection__filter_input}>
          <TextInput />
          <span className={css.rightInfoSection__filter_label}>
            по марке, номеру, фамилии
          </span>
        </div>

        <FuncButton title="Сброс" />
      </div>

      <div className={css.rightInfoSection__filter_info}>
        <div className={css.rightInfoSection__filter_info_item}>
          <span className={css.rightInfoSection__filter_info_item_title}>
            Свой номер путового листа
          </span>
          <TextInput />
        </div>

        <div className={css.rightInfoSection__filter_info_item}>
          <span className={css.rightInfoSection__filter_info_item_title}>
            Норма заправки топлива
          </span>
          <TextInput />
        </div>
      </div>

      <div className={css.rightInfoSection__filter_buttons}>
        <FuncButton title="Печать" />
        <FuncButton title="Сохранить" />
        <FuncButton title="Отменить" />
      </div>
    </section>
  )
}
