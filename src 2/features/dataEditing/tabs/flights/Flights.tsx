import { useEffect, useState } from 'react'

import { FlightRow } from './components/table/FlightRow'
import css from './flightsStyle.module.scss'

import { getFlights, getFlightsData } from './model/flightsReducer'

import { EditButtonGroup } from '../../../../common/buttons/editButtonGroup/EditButtonGroup'
import { FilterGroup } from '../../../../common/buttons/filterGroup/FilterGroup'
import { DeleteRowModal } from '../../../../common/modals/deleteRow/DeleteRowModal'
import { Modal } from '../../../../common/modals/Modal'
import { ScrollableTableWrapper } from '../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'

export const Flights = () => {
  const dispatch = useAppDispatch()
  const flights = useAppSelector(getFlights)

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)

  const openDeleteModal = () => setIsShowDeleteModal(true)
  const closeDeleteModal = () => setIsShowDeleteModal(false)

  useEffect(() => {
    dispatch(getFlightsData())
  }, [])

  return (
    <div className={css.container}>
      <div className={css.tableWrapper}>
        <ScrollableTableWrapper>
          <table className={css.table}>
            <thead>
              <tr>
                <th rowSpan={2}>Рейс</th>
                <th rowSpan={2}>Описание</th>
                <th colSpan={6}>Цена</th>
                <th rowSpan={2}>Коммандировка</th>
                <th rowSpan={2}>Длительность, ч</th>
                <th rowSpan={2}>Объем топлива на рейс, л</th>
              </tr>
              <tr>
                <th>За рейс</th>
                <th>За тонну</th>
                <th>За км</th>
                <th>За т/км</th>
                <th>За сутки</th>
                <th>За час</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <FlightRow key={flight.DATA_ID} flight={flight} />
              ))}
            </tbody>
          </table>
        </ScrollableTableWrapper>
      </div>
      <div className={css.logicWrapper}>
        <FilterGroup title={'по рейсу'} />
        <EditButtonGroup deleteFunc={openDeleteModal} />
      </div>
      {isShowDeleteModal && (
        <Modal>
          <DeleteRowModal deleteRow={() => {}} closeModal={closeDeleteModal} />
        </Modal>
      )}
    </div>
  )
}
