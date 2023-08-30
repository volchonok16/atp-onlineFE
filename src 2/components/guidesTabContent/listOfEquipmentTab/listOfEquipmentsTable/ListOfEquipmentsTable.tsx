import css from './listOfEquipmentsTableStyle.module.scss'

import { ScrollableTableWrapper } from '../../../../common/table/scrollableTableWrapper/ScrollableTableWrapper'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { getListOfEquipmentsInfo } from '../../../../redux/catalogs/listOfEquipmentsReducer'

export const ListOfEquipmentsTable = () => {
  const equipmentsData = useAppSelector(getListOfEquipmentsInfo)

  return (
    <div className={css.tableWrapper}>
      <ScrollableTableWrapper>
        <table className={css.table}>
          <thead className={css.tableHeader}>
            <tr>
              <th>Марка автомобиля</th>
              <th>Номер</th>
              <th>Фамилия водителя</th>
              <th>Название машины для заявок</th>
              <th>Тип автомобиля</th>
              <th>Смен в месяц</th>
              <th>Тип технол. карты</th>
              <th>Норма заправки</th>
              <th>Автоколонна</th>
              <th>Вид перевозок</th>
              <th>Вид сообщения</th>
              <th>Редкое исп-е</th>
              <th>Проверка штрафов</th>
              <th>ID в 1С</th>
              <th>Удалено</th>
            </tr>
          </thead>
          <tbody>
            {equipmentsData.map((equipm) => {
              return (
                <tr key={equipm.RAZN_OD_KEY}>
                  <td>{equipm.MAM}</td>
                  <td>{equipm.NOMER}</td>
                  <td>{'Иванов И.И.'}</td>
                  <td>{equipm.REQ_NAME}</td>
                  <td>{equipm.TIP}</td>
                  <td>{equipm.GRAFIK}</td>
                  <td>{equipm.TIP_PL}</td>
                  <td>{equipm.NORM_ZAPR}</td>
                  <td>{equipm.NAME_AK}</td>
                  <td>{equipm.VID_PEREV}</td>
                  <td>{equipm.VID_SOOB}</td>
                  <td>
                    <input
                      type={'checkbox'}
                      checked={!!equipm.RARE_USE}
                      readOnly
                    />
                  </td>
                  <td>
                    <input type={'checkbox'} checked={!!equipm.FINES_PROBLEM} />
                  </td>
                  <td>{equipm.FROM_1C_ID}</td>
                  <td>
                    <input type={'checkbox'} checked={false} />
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
