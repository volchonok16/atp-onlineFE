import { useEffect } from 'react'

import css from './documentsTab.module.scss'
import { DocumentTabTablesBlock } from './documentsTabTablesBlock/MyDocumentTabTablesBlock'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  getActiveEquipmentID,
  getDocumentationData,
  getDocumentationDataTC,
  getRefuelingCardsDataTC,
  getTimingControlDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'
import { CalendarBlock } from '../../../calendarBlock/MyCalendarBlock'

export const DocumentsTab = () => {
  const dispatch = useAppDispatch()
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)
  const documentationData = useAppSelector(getDocumentationData)

  useEffect(() => {
    dispatch(getDocumentationDataTC(activeEquipmentID))
    dispatch(getTimingControlDataTC(activeEquipmentID))
    dispatch(getRefuelingCardsDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section className={css.documentsTab__wrapper}>
      <div className={css.documentsTab__mainInfo_wrapper}>
        <div className={css.documentsTab__mainInfo_item}>
          <div className={css.documentsTab__mainInfo_dateBlock}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Акт закрепления за водителем №
            </span>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              <TextInput value={documentationData.N_AKT} /> от{' '}
              <CalendarBlock value={documentationData.N_AKT_DATE} />
            </div>
          </div>
          <div className={css.documentsTab__mainInfo_dateBlock}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Приказ №
            </span>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              <TextInput value={documentationData.PRIKAZ_N} /> от{' '}
              <CalendarBlock value={documentationData.PRIKAZ_N_DATE} />
            </div>
          </div>

          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Дислокация
            </span>
            <TextInput value={documentationData.DISL} />
          </div>
          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Ответственный ИТР
            </span>
            <TextInput value={documentationData.OTV_ITR} />
          </div>

          <div className={css.documentsTab__mainInfo_dateBlock}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Приказ о постановке на баланс
            </span>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              <TextInput value={documentationData.PRIKAZ_BAL} /> от{' '}
              <CalendarBlock value={documentationData.PRIKAZ_BAL_DATE} />
            </div>
          </div>

          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Баланс. стоим., руб
            </span>
            <TextInput value={documentationData.BAL_STOIM} />
          </div>
          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Срок экспл., мес
            </span>
            <TextInput value={documentationData.NORMA_PROB} />
          </div>
          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Амортизация, руб
            </span>
            <TextInput value={documentationData.AMORTIZ} />
          </div>
          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Снятие с учета
            </span>
            <TextInput value={documentationData.DATE_VIBIT} />
          </div>
        </div>

        <div className={css.documentsTab__mainInfo_item}>
          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Свидетельство о регистрации
            </span>
            <TextInput value={documentationData.SVID_REG} />
          </div>
          <div className={css.documentsTab__mainInfo_inputItem}>
            <span className={css.documentsTab__mainInfo_inputItem_title}>
              Дата постановки на учет
            </span>
            <TextInput value={documentationData.DATA_REG} />
          </div>

          <div className={css.documentsTab__mainInfo_dateBlock}>
            <div className={css.documentsTab__mainInfo_inputItem_titleBlock}>
              <span className={css.documentsTab__mainInfo_inputItem_title}>
                Кем выдано
              </span>
              <TextInput value={documentationData.KEM_REG} />
            </div>

            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              ПТС <TextInput value={documentationData.PASP} />{' '}
              <span className={css.documentsTab__mainInfo_dateBlock_input_text}>
                выдан
              </span>
              <CalendarBlock value={documentationData.DATA_VID} />
            </div>
          </div>
          <div className={css.documentsTab__mainInfo_dateBlock}>
            <div className={css.documentsTab__mainInfo_inputItem_titleBlock}>
              <span className={css.documentsTab__mainInfo_inputItem_title}>
                Кем выдан
              </span>
              <TextInput value={documentationData.KEM_VID} />
            </div>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              № диагн. карты <TextInput value={documentationData.GTO} />
              <span className={css.documentsTab__mainInfo_dateBlock_input_text}>
                действ. до
              </span>
              <CalendarBlock value={documentationData.GTO_DO} />
            </div>
          </div>

          <div className={css.documentsTab__mainInfo_dateBlock}>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              Страх. полис № <TextInput value={documentationData.STRAH_SVID} />{' '}
              <span className={css.documentsTab__mainInfo_dateBlock_input_text}>
                от{' '}
              </span>
              <CalendarBlock value={documentationData.STRAH_SVID_DATE_OT} />
            </div>
          </div>

          <div className={css.documentsTab__mainInfo_dateBlock}>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              действ. до{' '}
              <CalendarBlock value={documentationData.STRAH_SVID_DATE} />
            </div>
          </div>

          <div className={css.documentsTab__mainInfo_dateBlock}>
            <div className={css.documentsTab__mainInfo_dateBlock_input}>
              Рег. № ГПМ <TextInput value={documentationData.REG_N_GPM} /> срок
              проверки тахографа{' '}
              <CalendarBlock value={documentationData.DATE_P_TAHOGRAFA} />
            </div>
          </div>
        </div>
      </div>

      <DocumentTabTablesBlock />

      <div className={css.documentsTab__buttons_wrapper}>
        <FuncButton title="Сохранить " />
        <FuncButton title="Отменить" />
      </div>
    </section>
  )
}
