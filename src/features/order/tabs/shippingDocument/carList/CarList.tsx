import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FC, useMemo, useState } from 'react'

import css from './carList.module.scss'
import { columns } from './columns'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'

import { FilterTools } from 'src/common/ui/filterTools/FilterTools'

import type { CarType } from 'src/features/dataEditing/tabs/carsData/api/api'

type Props = {
  carList: CarType[]
}

export const CarList: FC<Props> = ({ carList }) => {
  // Управление фильтром
  const [filterValue, setFilterValue] = useState<string>('')
  const filterValueHandler = (value: string) => setFilterValue(value)
  const filter = () => {
    if (!filterValue) return carList
    return carList.filter(
      ({ NAVTO, M_AM }) =>
        NAVTO.toUpperCase().includes(filterValue.toUpperCase()) ||
        M_AM.toUpperCase().includes(filterValue.toUpperCase()),
    )
  }
  const filteredCarList = useMemo(filter, [carList, filterValue])

  const table = useReactTable({
    data: filteredCarList,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const emptyTable = <p>Данные отсутствуют</p>

  return (
    <div className={css.carList}>
      <ScrollableTableWrapper height="70vh">
        {!carList ? (
          emptyTable
        ) : (
          <table className={css.table}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ScrollableTableWrapper>
      <FilterTools
        label="Фильтр"
        helperText="по марке и гос. номеру"
        value={filterValue}
        onChange={filterValueHandler}
        withArchive={false}
      />
    </div>
  )
}
