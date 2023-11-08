import { FC, useEffect } from 'react'

import { Row } from './Row'

import css from './table.module.scss'

import { CarType } from '../../api/api'

import { setActiveCarAC } from '../../model/carsReducer'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppDispatch } from 'src/hooks/useAppDispatch'

type PropsType = {
  data: CarType[]
  activeRow: CarType
  hideArchive: boolean
}

export const Table: FC<PropsType> = ({ data, activeRow, hideArchive }) => {
  const dispatch = useAppDispatch()
  const activeCarHandler = (car: CarType) => {
    dispatch(setActiveCarAC(car))
  }
  useEffect(() => {
    dispatch(setActiveCarAC({} as CarType))
  }, [])
  return (
    <ScrollableTableWrapper>
      <table className={css.table}>
        <thead>
          <tr>
            <th rowSpan={4}>Марка автомобиля</th>
            <th rowSpan={4}>Гос. номер</th>
            <th rowSpan={4}>Краткое название марки</th>
            <th colSpan={14}>Норма расхода</th>
            <th rowSpan={4}>Тип топлива</th>
            <th rowSpan={4}>Синхронизация с разнарядкой</th>
            <th rowSpan={4}>ID услуги из 1С</th>
            {!hideArchive && <th rowSpan={4}>В архиве</th>}
          </tr>
          <tr>
            <th rowSpan={3}>На слив</th>
            <th rowSpan={3}>На подъем кузова</th>
            <th colSpan={6}>На час</th>
            <th colSpan={6}>На 100 км</th>
          </tr>
          <tr>
            <th colSpan={2}>Осн. двигатель</th>
            <th colSpan={2}>Агрег.</th>
            <th colSpan={2}>Прогрев</th>
            <th rowSpan={2}>Лето</th>
            <th rowSpan={2}>Зима</th>
            <th colSpan={2}>На тонну</th>
            <th colSpan={2}>На межгород</th>
          </tr>
          <tr>
            <th>Лето</th>
            <th>Зима</th>
            <th>Лето</th>
            <th>Зима</th>
            <th>Лето</th>
            <th>Зима</th>
            <th>Лето</th>
            <th>Зима</th>
            <th>Лето</th>
            <th>Зима</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car, index) => {
            return (
              <Row
                key={`${car.OD_KEY}-${index}`}
                data={car}
                isActive={activeRow.OD_KEY === car.OD_KEY}
                isActiveHandler={activeCarHandler}
                hideArchive={hideArchive}
              />
            )
          })}
        </tbody>
      </table>
    </ScrollableTableWrapper>
  )
}
