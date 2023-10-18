import css from './mainData.module.scss'

export const MainData = () => {
  return (
    <div className={css.mainData}>
      <div className={css.document}>
        <label>
          <span>Номер ТТН</span>
          <input type="text" />
        </label>
        <label>
          <span>Дата составления</span>
          <input type="date" />
        </label>
        <label>
          <span>Срок доставки</span>
          <input type="date" />
        </label>
      </div>
      <div className={css.shipper}>
        <label>
          <span>Грузоотправитель</span>
          <input type="text" />
        </label>
        <label>
          <span>Пункт погрузки</span>
          <input type="text" />
        </label>
        <label>
          <span>Уполномоченное лицо</span>
          <input type="text" />
        </label>
        <label>
          <span>Плательщик</span>
          <input type="text" />
        </label>
      </div>
      <div className={css.consignee}>
        <label>
          <span>Грузополучатель</span>
          <input type="text" />
        </label>
        <label>
          <span>Пункт разгрузки</span>
          <input type="text" />
        </label>
        <label>
          <span>Уполномоченное лицо</span>
          <input type="text" />
        </label>
      </div>
      <div className={css.additionalData}>
        <label>
          <span>
            отгрузочное наименование груза (для опасных грузов - в соответствии
            с ДОПОГ), его состояние и другая необходимая информация о грузе
          </span>
          <textarea></textarea>
        </label>
        <label>
          <span>Дополнительная информация по транспорту</span>
          <textarea></textarea>
        </label>
      </div>
    </div>
  )
}
