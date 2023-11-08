import { useState } from 'react'

import { Provider } from 'react-redux'

import { DescriptionBlock } from './components/descriptionBlock/DescriptionBlock'
import { DocumentsTable } from './components/documentsTable/DocumentsTable'
import { EquipmentsTable } from './components/equipmentsTable/EquipmentsTable'
import { StartDate } from './components/startDate/StartDate'

import css from './objectAndEquipmentsStyle.module.scss'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { DeleteRowModal } from '../../../../common/modals/deleteRow/DeleteRowModal'
import { Modal } from '../../../../common/modals/Modal'

import { store } from 'src/app/model/rtkStore'
import { ObjectAndEquipmentType } from 'src/features/dataEditing/tabs/objectAndEquipments/model/apiTypes'
import {
  useAddDocumentMutation,
  useDeleteEquipmentMutation,
} from 'src/features/dataEditing/tabs/objectAndEquipments/model/objectsAndEquipmentsApi'

export const ObjectAndEquipments = () => {
  const [activeEquipment, setActiveEquipment] =
    useState<ObjectAndEquipmentType>()
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)

  const [addDocument, { isLoading }] = useAddDocumentMutation()

  const [deleteEquipment] = useDeleteEquipmentMutation()

  const openDeleteModal = () => setIsShowDeleteModal(true)
  const closeDeleteModal = () => setIsShowDeleteModal(false)

  const deleteButtonHandler = () => {
    if (activeEquipment) {
      deleteEquipment(activeEquipment.SKLAD_OBJ_SPIS_KEY)
    }
    closeDeleteModal()
  }

  const addFunction = () => {
    const newDocument = {
      RAZN_OD_DOCS_KEY: 3,
      MAS_SKLAD_OBJ_SPIS_KEY: 776,
      NAIM: 'other',
      NOMER: '665342',
      KEM_VID: 'Ivanov',
      DATE_OT: '2033-45-23',
      DATE_DO: '4235-65-24',
      D_PREDUPR: 30,
    }
    addDocument(newDocument)
      .unwrap()
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <Provider store={store}>
      {isLoading && <div>Loading...</div>}
      <div className={css.mainContainer}>
        <EquipmentsTable
          activeRow={activeEquipment}
          setActiveEquipment={setActiveEquipment}
        />
        <div className={css.descriptionAndDocumentsContainer}>
          <div className={css.descriptionContainer}>
            <DescriptionBlock activeEquipment={activeEquipment} />
            <StartDate activeEquipment={activeEquipment} />
          </div>
          <div className={css.documentsContainer}>
            <DocumentsTable id={activeEquipment?.SKLAD_OBJ_SPIS_KEY} />
            <EditButtonGroup
              deleteFunc={openDeleteModal}
              addFunction={addFunction}
            />
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
    </Provider>
  )
}
