import css from './addInfoBlock.module.scss'

import { SelectInput } from '../../../../../common/inputs/selectInput/MySelectInput'
import { TextInput } from '../../../../../common/inputs/textInput/MyTextInput'
import { CalendarBlock } from '../../../../../components/calendarBlock/MyCalendarBlock'

export const AddInfoBlock = () => {
  return (
    <section className={css.addInfoBlock__wrapper}>
      <div className={css.addInfoBlock__item}>
        <TextInput title="Номер ТТН" />
        <CalendarBlock title="Дата составления" isSelect={true} />
        <SelectInput title="Срок доставки" />
      </div>

      <div className={css.addInfoBlock__item}>
        <TextInput title="Грузоотправитель" isLinkTo={true} />
        <SelectInput title="Пункт погрузки" isLinkTo={true} />
        <SelectInput title="Уполномоченное лицо" isLinkTo={true} />
        <TextInput title="Плательщик" isLinkTo={true} />
      </div>

      <div className={css.addInfoBlock__item}>
        <TextInput title="Грузополучатель" isLinkTo={true} />
        <SelectInput title="Пункт разгрузки" isLinkTo={true} />
        <SelectInput title="Уполномоченное лицо" isLinkTo={true} />
      </div>

      <div className={css.addInfoBlock__item_last}>
        <SelectInput title="Информация о грузе" />
        <SelectInput title="Дополнительная информация" />
      </div>
    </section>
  )
}
