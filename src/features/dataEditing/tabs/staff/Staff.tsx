import { useEffect, useState, useMemo } from 'react'

import { StaffType } from './api/api'

import {
  CreateStaffForm,
  StaffFormData,
} from './components/CreateStaffForm/CreateStaffForm'
import { Table } from './components/table/Table'
import {
  createStaffThunk,
  deleteStaffAC,
  fetchStaffListThunk,
  setActiveStaffAC,
} from './model/staffReducer'
import css from './staff.module.scss'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { IconButton } from 'src/common/buttons/iconButton/MyIconButton'
import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'

import { Modal } from 'src/common/modals/Modal'
import { FilterTools } from 'src/common/ui/filterTools/FilterTools'
import { TableTools } from 'src/common/ui/tableTools/TableTools'
import { Actions } from 'src/features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'
import { useToggle } from 'src/hooks/useToggle'
import { convertDate } from 'src/utils/convertDate'

export const Staff = () => {
  const dispatch = useAppDispatch()
  const staffList = useAppSelector((state) => state.staff.staffList)
  const activeStaff = useAppSelector((state) => state.staff.activeStaff)

  // Управление модальным окном
  const [isOpen, openModal, closeModal] = useToggle(false)

  // Для удаления строки
  const deleteStaff = (): void => {
    dispatch(deleteStaffAC(activeStaff.FIO_ID))
    dispatch(setActiveStaffAC({} as StaffType))
    closeModal()
  }

  const delBtnHandler = (): void => {
    openModal()
    actionTitleHandler(Actions.delete)
  }

  // Для добавления строки
  const addBtnHandler = () => {
    openModal()
    actionTitleHandler(Actions.add)
  }
  const addStaff = (data: StaffFormData): void => {
    dispatch(createStaffThunk(data))
    closeModal()
  }

  // Управление видом действия

  const [actionTitle, setActionTitle] = useState(Actions.delete)
  const actionTitleHandler = (title: Actions): void => {
    setActionTitle(title)
  }

  // Содержимое модального окна
  const modalChild =
    actionTitle === 'добавить' ? (
      <CreateStaffForm onSubmit={addStaff} onClose={closeModal} />
    ) : (
      <ConfirmAction
        actionTitle={actionTitle}
        onAction={deleteStaff}
        onClose={closeModal}
      />
    )
  // Управление списком
  const [filterValue, setFilterValue] = useState<string>('')
  const filterValueHandler = (value: string): void => {
    setFilterValue(value)
  }

  const [hideArchive, setHideArchive] = useState<boolean>(true)
  const hideArchiveHandler = () => {
    setHideArchive(!hideArchive)
  }

  const filteredStaffList = useMemo(() => {
    return filterValue
      ? staffList.filter(({ FIO }) =>
          FIO.toUpperCase().includes(filterValue.toUpperCase()),
        )
      : staffList
  }, [filterValue, staffList])

  useEffect(() => {
    dispatch(fetchStaffListThunk())
  }, [])

  return (
    <>
      {isOpen && <Modal>{modalChild}</Modal>}

      <div className={css.staff}>
        <div>
          <div className={css.tableWrapper}>
            <Table list={filteredStaffList} />
          </div>
          <FilterTools
            label="Поиск"
            helperText="по фамилии"
            hideArchive={hideArchive}
            hideArchiveHandler={hideArchiveHandler}
            value={filterValue}
            onChange={filterValueHandler}
          />
          <TableTools>
            <FuncButton
              title={'Добавить запись'}
              onClickHandler={addBtnHandler}
            />
            <FuncButton
              disabled={!activeStaff.FIO_ID}
              title={'Удалить'}
              onClickHandler={delBtnHandler}
            />
          </TableTools>
        </div>
        <div className={css.activeRowData}>
          <div className={css.license}>
            <label className={css.label}>
              Класс
              <input
                type="text"
                defaultValue={activeStaff.KLASS || ''}
                readOnly
              />
            </label>
            <label className={css.label}>
              № удостоверения
              <input type="text" defaultValue={activeStaff.UDOST} readOnly />
            </label>
            <label className={css.label}>
              Срок действия
              <input
                type="text"
                defaultValue={convertDate(activeStaff.DATE_UDOST)}
                readOnly
              />
            </label>
          </div>

          <div>
            <h3 className={css.title}>Категория прав</h3>
            <div className={css.categoriesContainer}>
              <div className={css.categories}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_A}
                    disabled
                  />
                  А
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_A1}
                    disabled
                  />
                  А1
                </label>
              </div>

              <div className={css.categories}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_B}
                    disabled
                  />
                  B
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_B1}
                    disabled
                  />
                  B1
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_BE}
                    disabled
                  />
                  BE
                </label>
              </div>

              <div className={css.categories}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_C}
                    disabled
                  />
                  C
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_C1}
                    disabled
                  />
                  C1
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_C1E}
                    disabled
                  />
                  C1E
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_CE}
                    disabled
                  />
                  CE
                </label>
              </div>

              <div className={css.categories}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_D}
                    disabled
                  />
                  D
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_D1}
                    disabled
                  />
                  D1
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_D1E}
                    disabled
                  />
                  D1E
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_DE}
                    disabled
                  />
                  DE
                </label>
              </div>

              <div className={css.categories}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_TB}
                    disabled
                  />
                  Tb
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={!!activeStaff.KAT_TM}
                    disabled
                  />
                  Tm
                </label>
              </div>
            </div>
          </div>

          <div className={css.tractorLicense}>
            <label className={css.label}>
              № удостоверения машиниста тракториста
              <input
                type="text"
                defaultValue={activeStaff.UDOST_SPEC}
                readOnly
              />
            </label>
            <label className={css.label}>
              Срок действия
              <input
                type="text"
                defaultValue={convertDate(activeStaff.DATE_UDOST_SPEC)}
                readOnly
              />
            </label>
          </div>

          <div>
            <h3 className={css.title}>Категория прав</h3>
            <div className={css.categoriesContainer}>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_AI}
                  disabled
                />
                А I
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_AII}
                  disabled
                />
                A II
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_AIII}
                  disabled
                />
                A III
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_AIV}
                  disabled
                />
                A IV
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_B}
                  disabled
                />
                B
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_C}
                  disabled
                />
                C
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_D}
                  disabled
                />
                D
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_F}
                  disabled
                />
                F
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!!activeStaff.KAT_S_E}
                  disabled
                />
                E
              </label>
            </div>
          </div>

          <div className={css.tachograph}>
            <label className={css.label}>
              № карты тахографа
              <input
                type="text"
                defaultValue={activeStaff.N_CARD_TAHOGRAF}
                readOnly
              />
            </label>
            <label className={css.label}>
              Срок действия
              <input
                type="text"
                defaultValue={convertDate(activeStaff.DATE_CARD_TAHOGRAF)}
                readOnly
              />
            </label>
          </div>

          <div className={css.driver}>
            <div className={css.driverInfo}>
              <label>
                Медсправка до
                <input
                  type="text"
                  defaultValue={activeStaff.DATE_SPRAV}
                  readOnly
                />
              </label>
              <label>
                Телефон
                <input type="text" defaultValue={activeStaff.TEL} readOnly />
              </label>
              <label>
                Табельный номер
                <input
                  type="text"
                  defaultValue={activeStaff.TAB_NO!}
                  readOnly
                />
              </label>
            </div>
            <div>
              <h3 className={css.title}>Роли сотрудника</h3>
              <div className={css.driverRoles}>
                <label>
                  <input type="checkbox" disabled />
                  Водитель
                </label>

                <label>
                  <input type="checkbox" disabled />
                  Диспетчер
                </label>

                <label>
                  <input type="checkbox" disabled />
                  Контроллер
                </label>

                <label>
                  <input type="checkbox" disabled />
                  Врач
                </label>
                <label>
                  <input type="checkbox" disabled />
                  Ремонтн. персонал
                </label>

                <label>
                  <input type="checkbox" disabled />
                  Начальник автоколонны
                </label>
              </div>
            </div>
          </div>

          <div className={css.staffGroup}>
            <label>
              Группа сотрудников
              <input type="text" defaultValue={'Группа сотрудников'} readOnly />
            </label>
            <IconButton typeOfIcon="Сохранить" />
            <IconButton typeOfIcon="Отменить" />
          </div>

          <div className={css.btnBlock}>
            <FuncButton title="Заправочные карты" />
            <FuncButton title="Дополнительная информация" />
            <FuncButton title="Файлы" />
            <FuncButton title="Данные для web-сервисов" />
          </div>
        </div>
      </div>
    </>
  )
}
