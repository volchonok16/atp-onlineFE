import { useEffect, useState } from 'react'

import { DescriptionBlock } from './components/descriptionBlock/DescriptionBlock'
import { DocumentsTable } from './components/documentsTable/DocumentsTable'
import { EquipmentsTable } from './components/equipmentsTable/EquipmentsTable'
import { StartDate } from './components/startDate/StartDate'
import {
  activeEquipments,
  addDocumentForEquipment,
  deleteActiveEquipmentAC,
  getObjectAndEquipmentsData,
} from './model/objectAndEquipmentReducer'
import css from './objectAndEquipmentsStyle.module.scss'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { DeleteRowModal } from '../../../../common/modals/deleteRow/DeleteRowModal'
import { Modal } from '../../../../common/modals/Modal'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'
import { Actions } from 'src/features/dataEditing/tabs/carsData/CarsData'
import { useToggle } from 'src/hooks/useToggle'

export const ObjectAndEquipments = () => {
  const dispatch = useAppDispatch()
  const activeEquipment = useAppSelector(activeEquipments)

  const [isShowSaveModal, openSaveModal, closeSaveModal] = useToggle(false) // открытие-закрытие модалки для сохранения изменений
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)

  const openDeleteModal = () => setIsShowDeleteModal(true)
  const closeDeleteModal = () => setIsShowDeleteModal(false)

  useEffect(() => {
    dispatch(getObjectAndEquipmentsData())
  }, [])
  const deleteEquipment = (equipmentId: number) => {
    dispatch(deleteActiveEquipmentAC(equipmentId))
  }
  const deleteButtonHandler = () => {
    deleteEquipment(activeEquipment.SKLAD_OBJ_SPIS_KEY)
    closeDeleteModal()
  }

  const saveDocsEdition = () => {
    console.log('saved')
    closeSaveModal()
  }

  const addDocument = () => {
    const body = {
      MAS_SKLAD_OBJ_SPIS_KEY: 773,
      NAIM: 'new doc2',
      NOMER: '1122233',
      KEM_VID: 'Ivanov',
      DATE_OT: '8799-06-06',
      DATE_DO: '2876-06-06',
      D_PREDUPR: 30,
    }
    dispatch(addDocumentForEquipment(body))
  }

  return (
    <div className={css.mainContainer}>
      <div className={css.tablesContainer}>
        <EquipmentsTable activeRow={activeEquipment} />
        <div className={css.descriptionAndDocumentsContainer}>
          <DescriptionBlock />
          <StartDate />
          <DocumentsTable />
        </div>
      </div>
      <div className={css.editButtons}>
        <EditButtonGroup
          deleteFunc={openDeleteModal}
          saveFunc={openSaveModal}
          addFunc={addDocument}
        />
      </div>
      <div className={css.divisionButton}>
        <FuncButton title={'Подразделение заказчика'} />
      </div>
      {isShowDeleteModal && (
        <Modal>
          <DeleteRowModal
            deleteRow={deleteButtonHandler}
            closeModal={closeDeleteModal}
          />
        </Modal>
      )}

      {isShowSaveModal && (
        <Modal>
          <ConfirmAction
            actionTitle={Actions.save}
            onAction={saveDocsEdition}
            onClose={closeSaveModal}
          />
        </Modal>
      )}
    </div>
  )
}
