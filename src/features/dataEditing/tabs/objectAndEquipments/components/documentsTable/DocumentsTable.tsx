import css from './documentsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'

import { useGetDocumentsForEquipmentQuery } from 'src/features/dataEditing/tabs/objectAndEquipments/model/objectsAndEquipmentsApi'

type PropsType = {
  id: number | undefined
}
export const DocumentsTable = ({ id }: PropsType) => {
  const skip = !id
  console.log(id, skip)

  // (id ?? 0) нужно, чтобы TS не ругался, так как id может прийти undefined,
  // а мы должны передать number. Но в этом случае происходит skip запроса
  const { data: documents } = useGetDocumentsForEquipmentQuery(id ?? 0, {
    skip,
  })

  if (documents) {
    console.log(documents)
  }

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'380px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Наименование документа</th>
              <th>Номер</th>
              <th>Выдано</th>
              <th>Дата выдачи</th>
              <th>Действителен до</th>
              <th>Предупреждать за, дней</th>
            </tr>
          </thead>
          <tbody>
            {documents?.map((document) => {
              return (
                <tr key={document.KEY_ID}>
                  <td>{document.NAIM}</td>
                  <td>{document.NOMER}</td>
                  <td>{document.KEM_VID}</td>
                  <td>{document.DATE_OT}</td>
                  <td>{document.DATE_DO}</td>
                  <td>{document.D_PREDUPR}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
