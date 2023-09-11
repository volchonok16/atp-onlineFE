import { useEffect, useState } from 'react'

import { CarType } from './api/api'

import { EditForm } from './components/editForm/EditForm'
import { FilterTools } from './components/filter-tools/FilterTools'
import { Table } from './components/table/Table'
import {
  addCarAC,
  changeCarAC,
  deleteCarAC,
  fetchCarsData,
  setActiveCarAC,
} from './model/carsReducer'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'
import { Modal } from '../../../../common/modals/Modal'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { ModalOfAction } from '../../components/modal/ModalOfAction'
import { TableTools } from '../../components/table-tools/TableTools'

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
  const filterData = () => {
    if (!filterValue) return cars
    return cars.filter(
      ({ NAVTO, M_AM }) =>
        NAVTO.toUpperCase().includes(filterValue.toUpperCase()) ||
        M_AM.toUpperCase().includes(filterValue.toUpperCase()),
    )
  }

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
    console.log('activateAction')
    if (actionTitle === Actions.delete) {
      deleteCar(activeCar.OD_KEY)
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
          data={filterData()}
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
