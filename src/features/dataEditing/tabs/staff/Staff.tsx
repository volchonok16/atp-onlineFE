import { useEffect, useState } from 'react'

import { StaffType } from './api/api'

import { Row } from './components/table/Row'
import {
  deleteStaffAC,
  fetchStaffListThunk,
  setActiveStaffAC,
} from './model/staffReducer'
import css from './staff.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { convertDate } from '../../../../utils/convertDate'
import { TableTools } from '../../components/table-tools/TableTools'
import { FilterTools } from '../carsData/components/filter-tools/FilterTools'

import {
  ActionTitleType,
  ConfirmAction,
} from 'src/common/modals/confirmAction/ConfirmAction'
import { Modal } from 'src/common/modals/Modal'
import { useToggle } from 'src/hooks/useToggle'

export const Staff = () => {
  const dispatch = useAppDispatch()
  const staffList = useAppSelector((state) => state.staff.staffList)

  const activeStaff = useAppSelector((state) => state.staff.activeStaff)
  function activeStaffHandler(staff: StaffType): void {
    dispatch(setActiveStaffAC(staff))
  }

  // Управление модальным окном
  const [isOpen, toggleOpen] = useToggle(false)
  function openModal(): void {
    toggleOpen(true)
  }
  function closeModal(): void {
    toggleOpen(false)
  }

  // Для удаления строки
  function deleteStaff(): void {
    dispatch(deleteStaffAC(activeStaff.FIO_ID))
    dispatch(setActiveStaffAC({} as StaffType))
    closeModal()
  }

  function delBtnHandler(): void {
    openModal()
    actionTitleHandler('удалить')
  }

  // Для добавления строки
  function addBtnHandler() {
    openModal()
    actionTitleHandler('добавить')
  }
  function addStaff() {
    console.log('Add staff')
    closeModal()
  }

  // Управление видом действия
  const [actionTitle, setActionTitle] = useState<ActionTitleType>('удалить')
  const action = actionTitle === 'удалить' ? deleteStaff : addStaff

  function actionTitleHandler(title: ActionTitleType): void {
    setActionTitle(title)
  }

  // Управление списком
  const [filterValue, setFilterValue] = useState<string>('')
  function filterValueHandler(value: string): void {
    setFilterValue(value)
  }

  const [hideArchive, setHideArchive] = useState<boolean>(true)
  function hideArchiveHandler() {
    setHideArchive(!hideArchive)
  }

  function filteredStaffList() {
    const result = filterValue
      ? staffList.filter(({ FIO }) =>
          FIO.toUpperCase().includes(filterValue.toUpperCase()),
        )
      : staffList

    return result
  }

  useEffect(() => {
    dispatch(fetchStaffListThunk())
  }, [])

  return (
    <>
      {isOpen && (
        <Modal>
          <ConfirmAction
            actionTitle={actionTitle}
            onConfirm={action}
            onAbort={closeModal}
          />
        </Modal>
      )}
      <div className={css.staff}>
        <div>
          <div className={css.tableWrapper}>
            <table className={css.table}>
              <thead>
                <tr>
                  <th rowSpan={2}>Фамилия И.О.</th>
                  <th colSpan={2}>Не использовать в</th>
                  <th rowSpan={2}>Расшифровка ФИО</th>
                  <th rowSpan={2}>Период стажировки</th>
                  <th rowSpan={2}>ID из 1С</th>
                  <th rowSpan={2}>Удалить</th>
                </tr>
                <tr>
                  <th>Путевках</th>
                  <th>Разнарядке</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaffList().map((staff) => (
                  <Row
                    key={staff.FIO_KEY}
                    data={staff}
                    isActive={staff.FIO_KEY === activeStaff.FIO_KEY}
                    isActiveHandler={activeStaffHandler}
                  />
                ))}
              </tbody>
            </table>
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
                <input type="text" defaultValue={activeStaff.TAB_NO} readOnly />
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
