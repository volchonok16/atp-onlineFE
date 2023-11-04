import css from './documentsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
// import { useAppSelector } from '../../../../../../hooks/useAppSelector'
// import { getDocuments } from '../../model/objectAndEquipmentReducer'

export const DocumentsTable = () => {
  // const documents = useAppSelector(getDocuments)
  const documents = [
    {
      KEY_ID: 1,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 2,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 3,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 4,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 5,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 6,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 7,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
    {
      KEY_ID: 8,
      NAIM: 'title',
      NOMER: '536363',
      KEM_VID: 'Ivanov',
      DATE_OT: '76/44/22',
      DATE_DO: '22/33/22',
      D_PREDUPR: '1 month',
    },
  ]

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'270px'}>
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
            {documents.map((document) => {
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
