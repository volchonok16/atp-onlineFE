import css from './leftInfoSection.module.scss'

import { FuncButton } from '../../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../../common/buttons/iconButton/MyIconButton'
import { SelectInput } from '../../../../../common/inputs/selectInput/MySelectInput'
import { TextInput } from '../../../../../common/inputs/textInput/MyTextInput'
import { Table } from '../../../../../common/table/MyTable'
import {
  dataRowType,
  headerColumnsType,
} from '../../dataPreparation/MyDataPreparation'

const columns: headerColumnsType[] = [
  { title: 'Марка', id: 1 },
  { title: 'Гос. номер', id: 2 },
]
const data: dataRowType[] = [
  {
    col1: '',
    col2: '',
  },
  {
    col1: '',
    col2: '',
  },
  {
    col1: '',
    col2: '',
  },
  {
    col1: '',
    col2: '',
  },
]

export const LeftInfoSection = () => {
  return (
    <section className={css.leftInfoSection__wrapper}>
      <div className={css.leftInfoSection__main_info_block}>
        <div className={css.leftInfoSection__main_info_block_title}>
          <span>Выезд</span>
          <span>Заезд</span>
        </div>

        <div className={css.leftInfoSection__main_info_block_content}>
          <div className={css.leftInfoSection__content_titles}>
            <span>Диспетчер</span>
            <span>Механик</span>
            <span>Медик</span>
          </div>
          <div className={css.leftInfoSection__content_select}>
            <SelectInput />
            <SelectInput />
            <SelectInput />
          </div>
          <div className={css.leftInfoSection__content_select}>
            <SelectInput />
            <SelectInput />
            <SelectInput />
          </div>
        </div>
      </div>

      <div className={css.leftInfoSection__table_block}>
        <Table columns={columns} data={data} />
        <div className={css.leftInfoSection__table_block_footer}>
          <TextInput placeholder="Поиск" />
          <div className={css.leftInfoSection__table_block_footer_buttons}>
            <IconButton typeOfIcon="Поиск" />
            <IconButton typeOfIcon="Отменить" />
          </div>
        </div>
      </div>

      <div className={css.leftInfoSection__buttons_block}>
        <FuncButton title="Нестандартные технологические карты" />
        <FuncButton title="Нестандартные технологические карты" />
      </div>

      <div className={css.leftInfoSection__card_info}>
        <span className={css.leftInfoSection__card_info_title}>
          № последней технологической карты
        </span>

        <TextInput />

        <div className={css.leftInfoSection__card_info_buttons}>
          <IconButton typeOfIcon="Сохранить" />
          <IconButton typeOfIcon="Отменить" />
        </div>
      </div>

      <div className={css.leftInfoSection__card_button}>
        <FuncButton title="Технологическая карта по указанной машине" />

        <span className={css.leftInfoSection__card_button_descr}>
          Исправьте на необходимое значение перед выводом технологической карты
          по указанной машине
        </span>
      </div>
    </section>
  )
}
