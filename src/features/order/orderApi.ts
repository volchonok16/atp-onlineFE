import { instance } from '../../app/api/instance'

export const orderApi = {
  fetchPreparingData(
    date: string,
    motorcadeName: MotorcadeNameType = 'all',
    filter?: OrderPreparingDataType,
  ) {
    return instance.get('order/prepare-a-table-for', {
      params: { date, motorcadeName, filter },
    })
  },
  fetchOrderByOrder(
    date: string,
    motorcadeName: MotorcadeNameType = 'all',
    filter?: OrderPurchasesType,
  ) {
    return instance.get<OrderByOrderType[]>('order/order', {
      params: { date, motorcadeName, filter },
    })
  },

  fetchOrderData(
    date: string,
    motorcadeName: MotorcadeNameType = 'all',
    filter?: OrderPurchasesType,
  ) {
    return instance.get<OrderPurchasesType[]>('', {
      params: { date, motorcadeName, filter },
    })
  },
}
//======Types======
export type MotorcadeNameType = 'all' | 'first' | 'upp'

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
// в стадии разработки
export type OrderByOrderType = ''
