import { Table } from './table/Table'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { FilterTools } from 'src/common/ui/filterTools/FilterTools'
import { TableTools } from 'src/common/ui/tableTools/TableTools'

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
        withArchive={true}
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
