import { instance } from '../../app/api/instance'

export const guidesApi = {
  getListOfEquipmentsInfo(
    motorcadeNumber: MotorcadeNumberType = 'all',
    number?: number,
    brand?: number,
  ) {
    return instance.get<ListOfEquipmentsInfoType[]>('catalogs/equipment-list', {
      params: {
        motorcadeNumber,
        number,
        brand,
      },
    })
  },
}

//======Types======

export type MotorcadeNumberType = 'all' | 'first' | 'second'

export type ListOfEquipmentsInfoType = {
  RAZN_OD_KEY: number
  MAM: string
  NOMER: string
  FIO_ID: number
  TIP: number
  GRAFIK: number
  MK: string
  NAK: number
  TIP_PL: string
  NORM_ZAPR: string
  DEL: string
  PREDUPR: number
  TEK_SPID_POS: number
  TEK_TIMER_DVIG_POS: number
  LAST_DATE: string
  PPROBEG: number
  PERIOD_TO: number
  PERIOD_TO2: number
  VIN: string
  GPS_ID: string
  INFO: string
  PPROBEG_TO1: number
  PPROBEG_TO2: number
  PPROBEG_TO1_AGR: number
  PPROBEG_TO2_AGR: number
  PPROBEG_AGR: number
  REQ_NAME: number
  SPID_TO1: number
  SPID_TO2: number
  HH_TO1: number
  HH_TO2: number
  KEY_TIP: number
  RAZN_OD_ID_PRICEP: number
  RARE_USE: number
  PERIOD_TO_H: number
  PEROID_TO2_H: number
  PPROBEG_TO1_H_DV: number
  PPROBEG_TO2_H_DV: number
  ENABLE_FIND_FINE: number
  FROM_1C_ID: string
  KONSERV_OT: string
  KONSERV_DO: string
  WAIT_4_CANCELLATION: number
  WAIT_4_CANCELLATION_DATE: string
  NAME_AK: string
  SERIJA: string
  FINES_PROBLEM: string
  VID_PEREV: string
  VID_SOOB: string
  TEK_TIMER_POS: number
  INV_NO: string
  GPS_PROBEG: number
  DATE_P_TAHOGRAFA: string
}
