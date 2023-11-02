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

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'

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
      <div className={css.tablesContainer}>
        <EquipmentsTable activeRow={activeEquipment} />
        <div className={css.descriptionAndDocumentsContainer}>
          <DescriptionBlock />
          <StartDate />
          <DocumentsTable />

          {/* <div className={css.descriptionContainer}>
          </div>
          <div className={css.documentsContainer}>
          </div> */}
        </div>
      </div>
      <div className={css.editButtons}>
        <EditButtonGroup deleteFunc={openDeleteModal} />
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
    </div>
  )
}
