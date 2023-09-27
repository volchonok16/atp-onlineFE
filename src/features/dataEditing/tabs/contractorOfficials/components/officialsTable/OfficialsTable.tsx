import { useEffect } from 'react'

import css from './officialsTable.module.scss'

import {
  selectedActiveOfficialId,
  selectedActiveSubunitId,
  selectedOfficials,
  postNewOfficialThunk,
  getOfficialLitsThunk,
  setActiveOfficialIdAC,
} from '../../model/contractorOfficialReducer'

import {
  CreateOfficialForm,
  CreateOfficialFormData,
} from '../createOfficialForm/CreateOfficialForm'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { Modal } from 'src/common/modals/Modal'
import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'

import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { useAppSelector } from 'src/hooks/useAppSelector'
import { useToggle } from 'src/hooks/useToggle'

export const OfficialsTable = () => {
  const dispatch = useAppDispatch()

  const officialList = useAppSelector(selectedOfficials)
  const activeOfficialId = useAppSelector(selectedActiveOfficialId)
  const activeSubunitId = useAppSelector(selectedActiveSubunitId)
  const activeRowHandler = (id: number) => {
    dispatch(setActiveOfficialIdAC(id))
  }

  const isOfficial = !!officialList.length

  const [formIsOpen, openForm, closeForm] = useToggle(false)

  const createOfficial = (data: CreateOfficialFormData) => {
    dispatch(postNewOfficialThunk(data))
    closeForm()
  }
  useEffect(() => {
    if (activeSubunitId) {
      dispatch(getOfficialLitsThunk(activeSubunitId))
      dispatch(setActiveOfficialIdAC(null))
    }
    if (!activeSubunitId) {
      dispatch(setActiveOfficialIdAC(null))
    }
  }, [activeSubunitId])
  return (
    <section>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>ФИО ответственного</th>
              <th>Должность</th>
            </tr>
          </thead>
          <tbody>
            {isOfficial ? (
              officialList.map((official) => {
                return (
                  <tr
                    key={official.DATA_FIO_KEY}
                    className={
                      official.DATA_FIO_KEY === activeOfficialId
                        ? css.activeRow
                        : ''
                    }
                    onClick={() => activeRowHandler(official.DATA_FIO_KEY)}
                  >
                    <td className={css.firstColumn}>{official.FIO}</td>
                    <td>{official.DOLGN}</td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={2}>Нет данных о должностных лицах</td>
              </tr>
            )}
          </tbody>
        </table>
      </ScrollableTableWrapper>
      <div className={css.btnBlock}>
        <FuncButton
          title="Добавить"
          disabled={!activeSubunitId}
          onClick={openForm}
        />
        <FuncButton title="Удалить" disabled={!activeOfficialId} />
      </div>
      {formIsOpen && (
        <Modal>
          <CreateOfficialForm onClose={closeForm} onSubmit={createOfficial} />
        </Modal>
      )}
    </section>
  )
}
