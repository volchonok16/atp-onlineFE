import { instance } from '../../app/api/instance'

export const orderApi = {
  fetchPreparingData(
    date: string,
    motorcadeName: number = 0,
    filter?: OrderPreparingDataType,
  ) {
    return instance.get('order/prepare-a-table-for', {
      params: { date, motorcadeName, filter },
    })
  },
  fetchOrderByOrder(
    date: string,
    motorcadeName: number = 0,
    filter?: OrderPurchasesType,
  ) {
    return instance.get<OrderBookingType[]>('order/booking', {
      params: { date, motorcadeName, filter },
    })
  },

  fetchOrderData(
    date: string,
    motorcadeName: number = 0,
    filter?: OrderPurchasesType,
  ) {
    return instance.get<OrderPurchasesType[]>('order/order', {
      params: { date, motorcadeName, filter },
    })
  },
}
//======Types======

export type OrderPurchasesType = {
  MAM: string
  NOMER: string
  VR_V: string
  VR_Z: string
  FIO: string
  KARTA: string
  COMMENTAR: string
  ZAKS: string
  PRIM: string
  END_DATE: string
}
export type OrderPreparingDataType = {
  REMONT: string
  B_VOD: string
  MAM: string
  NOMER: string
  FIO: string
  FIO_KOND: string
  VR_V: string
  VR_Z: string
  ORG_NAME: string
  VID_PEREV: string
  VID_SOOB: string
  PRIM_4_SORT: string
  ROUTE: string
  COMMENTAR: string
}

export type OrderBookingType = {
  RAZNAR2_KEY: number
  RAZOV: boolean
  PRIVL_TRANSPORT: object
  VR_V: string
  VR_Z: string
  VR_I: string
  SUMM_VREM: string
  CENA: string
  SUMM: string
  CENA_PODR: string
  VREM_I_PODR: string
  SUMM_PODR: string
  PROFIT_PODR: string
  COMMENTAR: string
  DATA_ID: number
  ORG_ID: number
  FIO_ID: number
  FIO2_ID: number
  ROUTE_ID: number
  RAZN_T_T_ID: number
  RAZN_OD_ID: number
}
