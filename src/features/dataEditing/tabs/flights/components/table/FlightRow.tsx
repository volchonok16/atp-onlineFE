import { FlightsType } from '../../api/api'

type FlightRowData = {
  flight: FlightsType
}

export const FlightRow = ({ flight }: FlightRowData) => {
  return (
    <tr>
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
