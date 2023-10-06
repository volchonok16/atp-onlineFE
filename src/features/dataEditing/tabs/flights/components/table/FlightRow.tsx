import { useAppDispatch } from '../../../../../../hooks/useAppDispatch'
import { FlightsType } from '../../api/api'
import css from '../../flightsStyle.module.scss'
import { setActiveFlightIdAC } from '../../model/flightsReducer'

type FlightRowData = {
  flight: FlightsType
  activeRowId: number
}

export const FlightRow = ({ flight, activeRowId }: FlightRowData) => {
  const dispatch = useAppDispatch()
  const activeRowHandler = (idFlight: number) => {
    dispatch(setActiveFlightIdAC(idFlight))
  }
  return (
    <tr
      className={activeRowId === flight.PL_ROUTE_KEY ? css.activeRow : ''}
      onClick={() => {
        activeRowHandler(flight.PL_ROUTE_KEY)
      }}
    >
      <td>{flight.ROUTE}</td>
      <td>{flight.DESCR && 'Условное описание рейса'}</td>
      <td>{flight.CENA}</td>
      <td>{flight.C_TONN}</td>
      <td>{flight.C_KM}</td>
      <td>{flight.C_TONN_KM}</td>
      <td>{flight.C_SUTKI}</td>
      <td>{flight.C_HOUR}</td>
      <td>
        <input type={'checkbox'} checked={!!flight.COMMAND} disabled />
      </td>
      <td>{flight.VREM}</td>
      <td>{flight.V_TOPL}</td>
    </tr>
  )
}
