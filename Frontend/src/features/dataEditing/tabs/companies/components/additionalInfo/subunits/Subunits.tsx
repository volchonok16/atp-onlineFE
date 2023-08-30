import { Table } from './table/Table'

import { FuncButton } from '../../../../../../../common/buttons/funcButton/MyFuncButton'
import { TableTools } from '../../../../../components/table-tools/TableTools'
import { FilterTools } from '../../../../carsData/components/filter-tools/FilterTools'

export const Subunits = () => {
  return (
    <div>
      <Table />
      <FilterTools
        label="Фильтр"
        helperText="по фамилии"
        value={''}
        onChange={() => {}}
        hideArchive={false}
        hideArchiveHandler={() => {}}
      />
      <TableTools>
        <FuncButton title={'Редактировать запись'} />
        <FuncButton title={'Добавить запись'} />
        <FuncButton title={'Удалить'} />
      </TableTools>

      {/*
      {!hideModal && <ConfirmAction onClose={closeModal} actionTitle={actionTitle} onAction={activateAction} />}
      {formIsOpen && <div> Форма редактирования данных</div>}
       */}
    </div>
  )
}
