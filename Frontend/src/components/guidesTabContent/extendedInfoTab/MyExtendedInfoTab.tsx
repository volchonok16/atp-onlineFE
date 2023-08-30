import { useEffect, useState } from 'react'

import { AdditionalInfoTab } from './additionalInfoTab/MyAdditionalInfoTab'
import { DocumentsTab } from './documentsTab/MyDocumentsTab'
import { EquipmentsListTable } from './equipmentsListTable/EquipmentsListTable'
import { EquipmentTab } from './equipmentTab/MyEquipmentTab'

import css from './extendedInfo.module.scss'
import { PassesTab } from './passesTab/MyPassesTab'
import { PinningTheDriverTab } from './piinningTheDriverTab/MyPiinningTheDriverTab'
import { RelatedData } from './relatedData/MyRelatedData'

import { TechCharacteristic } from './techCharacteristic/MyTechCharacteristic'

import { TabsButton } from '../../../common/buttons/tabsButton/MyTabsButton'
import { TextInput } from '../../../common/inputs/textInput/MyTextInput'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getEquipmentsListTC } from '../../../redux/catalogs/extendedInfoReducer'

export const ExtendedInfoTab = () => {
  const [buttonsState, setButtonsState] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const handleButtonClick = (index: number) => {
    const newButtonsState = buttonsState.map((button, i) => index === i)
    setButtonsState(newButtonsState)
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getEquipmentsListTC())
  }, [])

  return (
    <section className={css.extendedInfo__wrapper}>
      <div className={css.extendedInfo__main_wrapper}>
        <EquipmentsListTable />

        <div className={css.extendedInfo__content_wrapper}>
          <div className={css.extendedInfo__content_tabsButtons}>
            <TabsButton
              title="Смежные данные"
              isActive={buttonsState[0]}
              onClickHandler={() => handleButtonClick(0)}
            />
            <TabsButton
              title="Тех. характеристики"
              isActive={buttonsState[1]}
              onClickHandler={() => handleButtonClick(1)}
            />
            <TabsButton
              title="Документы"
              isActive={buttonsState[2]}
              onClickHandler={() => handleButtonClick(2)}
            />
            <TabsButton
              title="Доп. инфо"
              isActive={buttonsState[3]}
              onClickHandler={() => handleButtonClick(3)}
            />
            <TabsButton
              title="Пропуска"
              isActive={buttonsState[4]}
              onClickHandler={() => handleButtonClick(4)}
            />
            <TabsButton
              title="Закрепление водителя"
              isActive={buttonsState[5]}
              onClickHandler={() => handleButtonClick(5)}
            />
            <TabsButton
              title="Комплектация"
              isActive={buttonsState[6]}
              onClickHandler={() => handleButtonClick(6)}
            />
          </div>

          {buttonsState[0] && <RelatedData />}
          {buttonsState[1] && <TechCharacteristic />}
          {buttonsState[2] && <DocumentsTab />}
          {buttonsState[3] && <AdditionalInfoTab />}
          {buttonsState[4] && <PassesTab />}
          {buttonsState[5] && <PinningTheDriverTab />}
          {buttonsState[6] && <EquipmentTab />}
        </div>
      </div>

      <div className={css.extendedInfo__filter_block}>
        <div className={css.extendedInfo__filter_input}>
          <TextInput placeholder="Поиск по марке, гос номеру, VINу или ID навигатора" />
        </div>
      </div>
    </section>
  )
}
