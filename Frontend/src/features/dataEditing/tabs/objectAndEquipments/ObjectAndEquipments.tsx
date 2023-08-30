import { useEffect } from 'react'

import { DescriptionBlock } from './components/descriptionBlock/DescriptionBlock'
import { DocumentsTable } from './components/documentsTable/DocumentsTable'
import { EquipmentsTable } from './components/equipmentsTable/EquipmentsTable'
import { StartDate } from './components/startDate/StartDate'
import { getObjectAndEquipmentsData } from './model/objectAndEquipmentReducer'
import css from './objectAndEquipmentsStyle.module.scss'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'

export const ObjectAndEquipments = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getObjectAndEquipmentsData())
  }, [])

  return (
    <div className={css.mainContainer}>
      <EquipmentsTable />
      <div className={css.descriptionAndDocumentsContainer}>
        <div className={css.descriptionContainer}>
          <DescriptionBlock />
          <StartDate />
        </div>
        <div className={css.documentsContainer}>
          <DocumentsTable />
          <EditButtonGroup />
        </div>
      </div>
    </div>
  )
}
