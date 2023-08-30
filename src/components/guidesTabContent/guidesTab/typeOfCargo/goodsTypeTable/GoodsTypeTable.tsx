import css from './goodsTypeTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../../hooks/useAppSelector'
import { getGoodsType } from '../../../../../redux/catalogs/directoriesReducer'

export const GoodsTypeTable = () => {
  const goodsTypeData = useAppSelector(getGoodsType)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Тип груза</th>
              <th>Автосоздание ТТН</th>
              <th>Класс</th>
              <th>Ср. коэф. исп-я грузо-ти</th>
            </tr>
          </thead>
          <tbody>
            {goodsTypeData.map((good) => {
              return (
                <tr key={good.RAZN_TIP_GRUZ_KEY}>
                  <td className={css.tableCell}>{good.TIP_GRUZ}</td>
                  <td>
                    <input type={'checkbox'} checked={!!good.ENABLE_TTN} />
                  </td>
                  <td>{good.KLASS}</td>
                  <td>{good.SR_KOEF}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollableTableWrapper>
    </div>
  )
}
