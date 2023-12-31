import { useEffect, useState, useMemo } from 'react'

import { CarType } from './api/api'

import { EditForm } from './components/editForm/EditForm'

import { Table } from './components/table/Table'
import {
  addCarAC,
  changeCarAC,
  deleteCarAC,
  fetchCarsData,
  setActiveCarAC,
} from './model/carsReducer'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'
import { Modal } from 'src/common/modals/Modal'
import { FilterTools } from 'src/common/ui/filterTools/FilterTools'
import { TableTools } from 'src/common/ui/tableTools/TableTools'
import { ModalOfAction } from 'src/features/dataEditing/components/modal/ModalOfAction'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

// Модальное окно для подтверждения действия
export enum Actions {
  delete = 'удалить',
  update = 'редактировать',
  add = 'добавить',
  save = 'сохранить',
  cancel = 'отменить',
}

export const CarsData = () => {
  const dispatch = useAppDispatch()

  // Данные из Redux
  const cars = useAppSelector((state) => state.cars.cars)
  const activeCar = useAppSelector((state) => state.cars.activeCar)
  // Управление колонкой с архивом
  const [hideArchive, setHideArchive] = useState<boolean>(true)
  const hideArchiveHandler = () => setHideArchive(!hideArchive)

  // Управление фильтром
  const [filterValue, setFilterValue] = useState<string>('')

  const filterValueHandler = (value: string) => setFilterValue(value)
  const filter = () => {
    if (!filterValue) return cars
    return cars.filter(
      ({ NAVTO, M_AM }) =>
        NAVTO.toUpperCase().includes(filterValue.toUpperCase()) ||
        M_AM.toUpperCase().includes(filterValue.toUpperCase()),
    )
  }
  const filteredCarList = useMemo(filter, [cars, filterValue])

  // Управление формой
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false)
  const openForm = () => setFormIsOpen(true)
  const closeForm = () => setFormIsOpen(false)

  // Управление модальным окном
  const [hideModal, setHideModal] = useState<boolean>(true)
  const [hideModalOfEmptyString, setHideModalOfEmptyString] =
    useState<boolean>(true)
  const [modalType, setModalType] = useState<Actions.add | Actions.update>(
    Actions.add,
  )
  const close = () => setHideModalOfEmptyString(true)
  const open = () => setHideModalOfEmptyString(false)
  const openModal = () => setHideModal(false)
  const closeModal = () => setHideModal(true)

  // Управление видом действия
  const [actionTitle, setActionTitle] = useState<Actions>(Actions.delete)
  const actionTitleHandler = (title: Actions) => setActionTitle(title)

  // Для кнопки удаления
  const delButtonAction = () => {
    if (!activeCar.OD_KEY) {
      open()
    } else {
      actionTitleHandler(Actions.delete)
      openModal()
    }
  }

  const deleteCar = (carId: number) => {
    dispatch(deleteCarAC(carId))
    dispatch(setActiveCarAC({} as CarType))
  }

  const changeCar = (carId: number, car: CarType) => {
    dispatch(changeCarAC(carId, car))
  }
  const addCar = (car: CarType) => {
    dispatch(addCarAC(car))
  }
  // Для кнопки добавления
  const addButtonAction = () => {
    actionTitleHandler(Actions.add)
    setModalType(Actions.add)
    openForm()
    dispatch(setActiveCarAC({} as CarType))
  }

  // Для кнопки редактирования
  const changeButtonAction = () => {
    if (!activeCar.OD_KEY) {
      open()
    } else {
      actionTitleHandler(Actions.update)
      setModalType(Actions.update)
      openForm()
    }
  }

  // Выбирает какую операцию сделать
  const activateAction = (car?: CarType | null | undefined) => {
    if (actionTitle === Actions.delete) {
      deleteCar(activeCar.OD_KEY)
      closeModal()
    }
    if (actionTitle === Actions.update) {
      car && changeCar(car.OD_KEY, car)
      console.log('the request has flown', car)
      closeForm()
    }
    if (actionTitle === Actions.add) {
      car && addCar(car)
      console.log('the request has flown', car)
      closeForm()
    }
  }

  // Получить данные с сервера
  useEffect(() => {
    dispatch(fetchCarsData())
  }, [])

  return (
    <div>
      {cars.length ? (
        <Table
          data={filteredCarList}
          activeRow={activeCar}
          hideArchive={hideArchive}
        />
      ) : (
        <h2>Данные отсутствуют</h2>
      )}

      <FilterTools
        label="Фильтр"
        helperText="по марке и гос. номеру"
        hideArchive={hideArchive}
        hideArchiveHandler={hideArchiveHandler}
        value={filterValue}
        onChange={filterValueHandler}
        withArchive={true}
      />
      <TableTools>
        <FuncButton
          title={'Редактировать запись'}
          onClickHandler={changeButtonAction}
        />
        <FuncButton
          title={'Добавить запись'}
          onClickHandler={addButtonAction}
        />
        <FuncButton title={'Удалить'} onClickHandler={delButtonAction} />
      </TableTools>
      {!hideModalOfEmptyString && (
        <Modal>{<ModalOfAction onClose={close} />}</Modal>
      )}
      {!hideModal && (
        <ConfirmAction
          onClose={closeModal}
          actionTitle={actionTitle}
          onAction={activateAction}
        />
      )}
      {formIsOpen && (
        <EditForm
          modalType={modalType}
          actionTitle={actionTitle}
          setActionTitle={setActionTitle}
          closeForm={closeForm}
          onAction={activateAction}
          activeCar={
            actionTitle === Actions.update || actionTitle === Actions.add
              ? activeCar
              : ({} as CarType)
          }
        />
      )}
    </div>
  )
}
