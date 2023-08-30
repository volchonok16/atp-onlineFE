import css from './refuelingCardsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../../hooks/useAppSelector'
import { getRefuelingCardsData } from '../../../../../../redux/catalogs/extendedInfoReducer'

export const RefuelingCardsTable = () => {
  const refuelingCards = useAppSelector(getRefuelingCardsData)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper height={'203px'}>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Номер карты</th>
              <th>Название организации-заправщика</th>
              <th>Лимит</th>
              <th>Тип топлива</th>
            </tr>
          </thead>
          <tbody>
            {refuelingCards.map((fuelCards) => {
              return (
                <tr key={fuelCards.RAZN_OD_ZAPR_CARDS_KEY}>
                  <td>{fuelCards.N_ZAPR_CARD}</td>
                  <td>{fuelCards.ORG_NAME}</td>
                  <td>{fuelCards.LIMIT_}</td>
                  <td>{fuelCards.TOPL}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
