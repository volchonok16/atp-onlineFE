import { useEffect } from 'react'

import css from './infoTab.module.scss'

import { FuncButton } from '../../../../../../../common/buttons/funcButton/MyFuncButton'
import { useAppDispatch } from '../../../../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../../hooks/useAppSelector'
import { fetchAboutCompanyDataThunk } from '../../../model/companiesReducer'

export const InfoTab = () => {
  const dispatch = useAppDispatch()
  const aboutCompany = useAppSelector((state) => state.companies.aboutCompany)
  const activeCompanyId = useAppSelector(
    (state) => state.companies.activeCompanyId,
  )

  useEffect(() => {
    activeCompanyId && dispatch(fetchAboutCompanyDataThunk(activeCompanyId))
  }, [activeCompanyId])

  if (!aboutCompany.DATA_EXT_KEY) {
    return <p>Выберете организацию.</p>
  }

  return (
    <div className={css.infoTab}>
      <div className={css.field}>
        <label>№ договора</label>
        <input type="text" defaultValue={'НЕТ ДАННЫХ С СЕРВЕРА'} readOnly />
      </div>
      <div className={css.field}>
        <label>Дата заключения договора</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>Должность руководителя</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>ФИО руководителя</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>ИНН</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>ID кода субконто из 1С</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>КПП</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>ID договора из 1С</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>Юр. адрес</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>Геозоны заказчика</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>Почт. адрес</label>
        <input type="text" readOnly />
      </div>
      <div className={css.field}>
        <label>Требовать ввод видов работ</label>
        <input type="checkbox" readOnly />
      </div>
      <div className={css.field}>
        <label>Контакты</label>
        <textarea rows={3} defaultValue={aboutCompany.CONTACTS} readOnly />
      </div>
      <div className={css.field}>
        <label>Точка погрузки (населенный пункт)</label>
        <textarea rows={3} defaultValue={aboutCompany.T_POGR} readOnly />
      </div>
      <div className={css.field}>
        <label>Точка выгрузки (населенный пункт)</label>
        <textarea rows={3} defaultValue={aboutCompany.T_VIGR} readOnly />
      </div>
      <div className={css.field}>
        <label>Реквизиты</label>
        <textarea rows={3} defaultValue={aboutCompany.REKVIZITI} readOnly />
      </div>
      <div className={css.field}>
        <label>Примечания</label>
        <textarea rows={3} defaultValue={aboutCompany.PRIM} readOnly />
      </div>
      <div className={css.btns}>
        <FuncButton title="Поиск по информации" />
        <FuncButton title="Подразделение заказчика" />
      </div>
    </div>
  )
}
