import { useEffect, useState } from 'react'

import { CarType } from './api/api'

import { EditForm } from './components/editForm/EditForm'
import { FilterTools } from './components/filter-tools/FilterTools'
import { Table } from './components/table/Table'
import { deleteCarAC, fetchCarsData, setActiveCarAC } from './model/carsReducer'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import {
  ConfirmAction,
  type ActionTitleType,
} from '../../../../common/modals/confirmAction/ConfirmAction'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { TableTools } from '../../components/table-tools/TableTools'

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
  const submit = () => {
    openModal()
  }

  // Управление модальным окном
  const [hideModal, setHideModal] = useState<boolean>(true)
  const openModal = () => setHideModal(false)
  const closeModal = () => setHideModal(true)

  // Управление видом действия
  const [actionTitle, setActionTitle] = useState<ActionTitleType>('удалить')
  const actionTitleHandler = (title: ActionTitleType) => setActionTitle(title)

  // Для кнопки удаления
  const delButtonAction = () => {
    actionTitleHandler('удалить')
    openModal()
  }
  const deleteCar = (carId: number) => {
    dispatch(deleteCarAC(carId))
    dispatch(setActiveCarAC({} as CarType))
  }

  // Для кнопки добавления
  const addButtonAction = () => {
    actionTitleHandler('добавить')
    openForm()
  }

  // Для кнопки редактирования
  const changeButtonAction = () => {
    actionTitleHandler('редактировать')
    openForm()
  }

  // Выбирает какую операцию сделать
  const activateAction = () => {
    if (actionTitle === 'удалить') {
      deleteCar(activeCar.OD_KEY)
    }
    if (actionTitle === 'редактировать') {
      alert('Данные изменены')
      closeForm()
    }
    if (actionTitle === 'добавить') {
      alert('строка добавлена')
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
          disabled={!activeCar.OD_KEY}
          title={'Редактировать запись'}
          onClickHandler={changeButtonAction}
        />
        <FuncButton
          disabled={!activeCar.OD_KEY}
          title={'Добавить запись'}
          onClickHandler={addButtonAction}
        />
        <FuncButton
          disabled={!activeCar.OD_KEY}
          title={'Удалить'}
          onClickHandler={delButtonAction}
        />
      </TableTools>
      {!hideModal && (
        <ConfirmAction
          onClose={closeModal}
          actionTitle={actionTitle}
          onAction={activateAction}
        />
      )}
      {formIsOpen && (
        <EditForm
          close={closeForm}
          submit={submit}
          activeCar={
            actionTitle === 'редактировать' ? activeCar : ({} as CarType)
          }
        />
      )}
    </div>
  )
}
