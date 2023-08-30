import { useEffect } from 'react'

import css from './additionalInfo.module.scss'
import {
  AdditionalInfoTable,
  TableDataType,
} from './additionalInfoTable/MyAdditionalInfoTable'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { CheckBox } from '../../../../common/inputs/checkBox/MyCheckBox'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  getActiveEquipmentID,
  getConservationData,
  getConservationDataTC,
  getNotInDemandData,
  getNotInDemandDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'
import { CalendarBlock } from '../../../calendarBlock/MyCalendarBlock'
import { ConservationDataType, NotInDemandTypeData } from '../api'

export const AdditionalInfoTab = () => {
  const dispatch = useAppDispatch()
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)
  const notInDemandServerData = useAppSelector(getNotInDemandData)
  const conservationServerData = useAppSelector(getConservationData)

  const notInDemandNewObj = (obj: NotInDemandTypeData) => {
    const newObj = {} as TableDataType

    newObj.key = obj.RAZN_OD_NE_VOSTR_KEY
    newObj.date_ot = obj.DATE_OT
    newObj.date_do = obj.DATE_DO

    return newObj
  }

  const conservationNewObj = (obj: ConservationDataType) => {
    const newObj = {} as TableDataType

    newObj.key = obj.RAZN_OD_KONSERV_KEY
    newObj.date_ot = obj.DATE_OT
    newObj.date_do = obj.DATE_DO

    return newObj
  }

  const notInDemandData = notInDemandServerData.map(notInDemandNewObj)
  const conservationData = conservationServerData.map(conservationNewObj)

  useEffect(() => {
    dispatch(getNotInDemandDataTC(activeEquipmentID))
    dispatch(getConservationDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section className={css.additionalInfo__wrapper}>
      <div className={css.additionalInfo__checkBox_wrapper}>
        <CheckBox />
        <span className={css.additionalInfo__checkBox}>
          Ожидание списания с
        </span>
        <CalendarBlock />
      </div>

      <div className={css.additionalInfo__tables_wrapper}>
        <AdditionalInfoTable title="Не востребовано" data={notInDemandData} />
        <AdditionalInfoTable title="Консервация" data={conservationData} />
      </div>

      <div className={css.additionalInfo__buttons_wrapper}>
        <FuncButton title="Сохранить " />
        <FuncButton title="Отменить" />
      </div>
    </section>
  )
}
