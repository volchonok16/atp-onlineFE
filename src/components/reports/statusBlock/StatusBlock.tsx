import css from './statusBlockStyle.module.scss'

import { ScrollableTableWrapper } from '../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'

export const StatusBlock = () => {
  return (
    <div className={css.container}>
      <span className={css.title}>Изменение статуса</span>
      <div className={css.contentBlock}>
        <ScrollableTableWrapper height={'673px'}>
          <div className={css.contentContainer}>
            <div className={css.statusBlock}>
              <span className={css.info}>Время: 24.02.2023 15:00</span>
              <span className={css.info}>Статус: Убыл от заказчика</span>
              <span className={css.info}>Примечание: Разбиты ходовые огни</span>
            </div>
            <div className={css.statusBlock}>
              <span className={css.info}>Время: 24.02.2023 18:00</span>
              <span className={css.info}>Статус: Возвращение на базу</span>
              <span className={css.info}>Примечание: Водитель выпил</span>
            </div>
          </div>
        </ScrollableTableWrapper>
      </div>
    </div>
  )
}
