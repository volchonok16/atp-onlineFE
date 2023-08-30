import css from './mechanismTypesTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getMechanismTypes } from '../../../../../redux/catalogs/directoriesReducer'

export const MechanismTypesTable = () => {
  const mechanismTypes = useAppSelector(getMechanismTypes)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Шифр</th>
              <th>Тип техники</th>
              <th>Прицепное оборудование</th>
            </tr>
          </thead>
          <tbody>
            {mechanismTypes.map((mechanism) => {
              return (
                <tr key={mechanism.RAZN_T_T_KEY}>
                  <td className={css.tableCell}>{mechanism.NOM}</td>
                  <td className={css.tableCell}>{mechanism.T_T}</td>
                  <td>
                    <input
                      type={'checkbox'}
                      checked={!!mechanism.SETUP_ID}
                      readOnly
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
