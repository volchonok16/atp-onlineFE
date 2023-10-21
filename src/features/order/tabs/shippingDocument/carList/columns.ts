import { createColumnHelper } from '@tanstack/react-table'

import { CarType } from 'src/features/dataEditing/tabs/carsData/api/api'

const columnHelper = createColumnHelper<CarType>()

export const columns = [
  columnHelper.accessor('M_AM', {
    header: 'Марка автомобиля',
  }),
  columnHelper.accessor('NAVTO', {
    header: 'Номер автомобиля',
  }),
]
