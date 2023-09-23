import { useEffect, useState } from 'react'

import { Table } from './table/Table'

import {
  deleteCompanyAC,
  fetchCompanyListThunk,
  setActiveCompanyIdAC,
} from '../../model/companiesReducer'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'
import { FilterTools } from 'src/common/ui/filterTools/FilterTools'
import { TableTools } from 'src/common/ui/tableTools/TableTools'
import { Actions } from 'src/features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'

export const CompanyList = () => {
  const dispatch = useAppDispatch()

  // Данные из Redux
  const companies = useAppSelector((state) => state.companies.companyList)
  const activeCompanyId = useAppSelector(
    (state) => state.companies.activeCompanyId,
  )

  // Управление фильтром
  const [filterValue, setFilterValue] = useState<string>('')
  const filterValueHandler = (value: string) => setFilterValue(value)
  const filterData = () => {
    if (!filterValue) return companies
    return companies.filter(({ LNAME }) =>
      LNAME.toUpperCase().includes(filterValue.toUpperCase()),
    )
  }

  // Управление формой
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false)
  const openForm = () => setFormIsOpen(true)
  const closeForm = () => setFormIsOpen(false)

  // Управление модальным окном
  const [hideModal, setHideModal] = useState<boolean>(true)
  const openModal = () => setHideModal(false)
  const closeModal = () => setHideModal(true)

  // Управление видом действия
  const [actionTitle, setActionTitle] = useState<Actions>(Actions.delete)
  const actionTitleHandler = (title: Actions) => setActionTitle(title)

  // Для кнопки удаления
  const delButtonAction = () => {
    actionTitleHandler(Actions.delete)
    openModal()
  }
  const deleteCompany = (id: number) => {
    dispatch(deleteCompanyAC(id))
    dispatch(setActiveCompanyIdAC(null))
    closeModal()
  }

  // Для кнопки добавления
  const addButtonAction = () => {
    actionTitleHandler(Actions.add)
    openForm()
  }

  // Для кнопки редактирования
  const changeButtonAction = () => {
    actionTitleHandler(Actions.update)
    openForm()
  }

  // Выбирает какую операцию сделать
  const activateAction = () => {
    if (actionTitle === Actions.delete) {
      activeCompanyId && deleteCompany(activeCompanyId)
    }
    if (actionTitle === Actions.update) {
      alert('Данные изменены')
      closeForm()
    }
    if (actionTitle === Actions.add) {
      alert('строка добавлена')
      closeForm()
    }
  }

  useEffect(() => {
    dispatch(fetchCompanyListThunk())
  }, [])

  return (
    <div>
      <Table companyList={filterData()} />
      <div>
        <FilterTools
          label="Фильтр"
          helperText="по короткому названию"
          value={filterValue}
          onChange={filterValueHandler}
          hideArchive={false}
          hideArchiveHandler={() => {}}
        />
        <TableTools>
          <FuncButton
            title={'Редактировать запись'}
            onClickHandler={changeButtonAction}
            disabled={!activeCompanyId}
          />
          <FuncButton
            title={'Добавить запись'}
            onClickHandler={addButtonAction}
          />
          <FuncButton
            title={'Удалить'}
            onClickHandler={delButtonAction}
            disabled={!activeCompanyId}
          />
        </TableTools>
      </div>
      {!hideModal && (
        <ConfirmAction
          onClose={closeModal}
          actionTitle={actionTitle}
          onAction={activateAction}
        />
      )}
      {formIsOpen && <div> Форма редактирования данных</div>}
    </div>
  )
}
