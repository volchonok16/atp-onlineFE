import { instance } from '../../../../../app/api/instance'

export const flightsApi = {
  getFlightsData() {
    return instance.get<FlightsType[]>('data-editing/flights')
  },
}

//======Types======

export type FlightsType = {
  // Рейс
  ROUTE: string
  // ID рейса
  DATA_ID: number
  // Описание
  DESCR: string
  // Цена за рейс
  CENA: number
  // Цена за тонну
  C_TONN: number
  // Цена за тонну на км
  C_TONN_KM: number
  // Цена за сутки
  C_SUTKI: number
  // Цена за час
  C_HOUR: number
  // Цена за км
  C_KM: number
  // Коммандировка
  COMMAND: number
  // Объем топлива за рейс
  V_TOPL: number
  // Длительность
  VREM: number

  // ???
  PL_ROUTE_KEY: number
  // ??
  DEL: number
  // ??
  ST_ZARPL: number
  // ??
  INERTN: number
  // ??
  RASPISAN: string
  // ??
  DATE_D: string
  // ??
  REQUIRED_DATE: string
}
