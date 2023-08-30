import css from './notesTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getNotes } from '../../../../../redux/catalogs/directoriesReducer'

export const NotesTable = () => {
  const notesData = useAppSelector(getNotes)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Стандартные примечания</th>
            </tr>
          </thead>
          <tbody>
            {notesData.map((note) => {
              return (
                <tr key={note.RAZN_STAND_PRIM_KEY}>
                  <td className={css.tableCell}>{note.STAND_PRIM}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
