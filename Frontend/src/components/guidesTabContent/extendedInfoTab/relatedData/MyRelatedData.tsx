import { useEffect } from 'react'

import css from './relatedData.module.scss'
import { RelatedDataBlock } from './relatedDataBlock/MyRelatedDataBlock'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  getActiveEquipmentID,
  getRelatedData,
  getRelatedDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'

export const RelatedData = () => {
  const dispatch = useAppDispatch()
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)
  const relatedData = useAppSelector(getRelatedData)

  useEffect(() => {
    activeEquipmentID && dispatch(getRelatedDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section className={css.relatedData__wrapper}>
      <div className={css.relatedData__mainInfo_wrapper}>
        <div className={css.relatedData__mainInfo_leftBlock}>
          <RelatedDataBlock
            title={'Данные для работы навигации'}
            inputTitlesArray={[
              {
                title: 'ID терминала навигатора',
                value: relatedData.GPS_ID,
              },
              {
                title: 'Дата начала работы терминала',
                value: relatedData.GPS_DATE,
              },
            ]}
            checkboxTitlesArray={[
              {
                title: 'Разрешить использовать данные спутн. навигации',
                value: relatedData.GPS_ON,
              },
              {
                title: 'Выезд и заезд в журнале механика отмечает GPS',
                value: relatedData.GPS_MEHAN,
              },
            ]}
          />

          <RelatedDataBlock
            title={'Данные для учета шин и аккумуляторов'}
            inputTitlesArray={[
              {
                title: 'Количество шин(в т.ч. запаска)',
                value: relatedData.KOL_SHIN,
              },
              {
                title: 'Количество аккумуляторвов',
                value: relatedData.KOL_AKKUM,
              },
            ]}
          />

          <div className={css.relatedData__mainInfo_leftBlock_code}>
            <span className={css.relatedData__mainInfo_leftBlock_code_title}>
              Код для сканера штрих-кодов
            </span>
            <TextInput />
          </div>

          <div className={css.relatedData__mainInfo_leftBlock_buttons}>
            <FuncButton title="Создать " />
            <FuncButton title="Печатать" />
          </div>
        </div>

        <div className={css.relatedData__mainInfo_rightBlock}>
          <div className={css.relatedData__mainInfo_rightBlock_buttons}>
            <FuncButton title="Создать " />
            <FuncButton title="Печатать" />
          </div>

          <div className={css.relatedData__mainInfo_rightBlock_photo}></div>
        </div>
      </div>

      <div className={css.relatedData__additionalInfo_wrapper}>
        <div className={css.relatedData__additionalInfo_error}>
          <span className={css.relatedData__additionalInfo_error_title}>
            Допустимая погрешность при сравнении пробега по одометру и навигации
          </span>
          <TextInput />
        </div>

        <div className={css.relatedData__additionalInfo_blocks}>
          <RelatedDataBlock
            title={'Периодичность проведения ТО1'}
            inputTitlesArray={[
              {
                title: 'Двигателя по пробегу, км',
                value: relatedData.PERIOD_TO,
              },
              {
                title: 'Двигателя по наработке, ч',
                value: relatedData.PERIOD_TO_H,
              },
              {
                title: 'Агрегата, ч',
                value: relatedData.AGR_TO1,
              },
              {
                title: 'Замена масла в гидросис.',
                value: relatedData.ZAM_M_G,
              },
              {
                title: 'Замена масла в трансмис.',
                value: relatedData.ZAM_M_T,
              },
            ]}
          />

          <RelatedDataBlock
            title={'Периодичность проведения ТО2'}
            inputTitlesArray={[
              {
                title: 'Двигателя по пробегу, км',
                value: relatedData.PERIOD_TO2,
              },
              {
                title: 'Двигателя по наработке, ч',
                value: relatedData.PERIOD_TO2_H,
              },
              {
                title: 'Агрегата, ч',
                value: relatedData.AGR_TO2,
              },
            ]}
          />
        </div>
      </div>

      <div className={css.relatedData__buttons_wrapper}>
        <FuncButton title="Сохранить " />
        <FuncButton title="Отменить" />
      </div>
    </section>
  )
}
