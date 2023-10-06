import { useEffect, useState } from 'react'

import { DescriptionBlock } from './components/descriptionBlock/DescriptionBlock'
import { DocumentsTable } from './components/documentsTable/DocumentsTable'
import { EquipmentsTable } from './components/equipmentsTable/EquipmentsTable'
import { StartDate } from './components/startDate/StartDate'
import {
  activeEquipments,
  deleteActiveEquipmentAC,
  getObjectAndEquipmentsData,
} from './model/objectAndEquipmentReducer'
import css from './objectAndEquipmentsStyle.module.scss'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { DeleteRowModal } from '../../../../common/modals/deleteRow/DeleteRowModal'
import { Modal } from '../../../../common/modals/Modal'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'

export const ObjectAndEquipments = () => {
  const dispatch = useAppDispatch()
  const activeEquipment = useAppSelector(activeEquipments)
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

  return (
    <div className={css.mainContainer}>
      <EquipmentsTable activeRow={activeEquipment} />
      <div className={css.descriptionAndDocumentsContainer}>
        <div className={css.descriptionContainer}>
          <DescriptionBlock />
          <StartDate />
        </div>
        <div className={css.documentsContainer}>
          <DocumentsTable />
          <EditButtonGroup deleteFunc={openDeleteModal} />
        </div>
      </div>
      {isShowDeleteModal && (
        <Modal>
          <DeleteRowModal
            deleteRow={deleteButtonHandler}
            closeModal={closeDeleteModal}
          />
        </Modal>
      )}
    </div>
  )
}
