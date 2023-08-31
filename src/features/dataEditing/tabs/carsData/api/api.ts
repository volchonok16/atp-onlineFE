import { instance } from '../../../../../app/api/instance'

export const carsApi = {
  fetchCarsData(archive: boolean = false, number?: number, brand?: string) {
    return instance.get<CarType[]>('data-editing/cars-info', {
      params: { archive, number, brand },
    })
  },
}

//======Types======

export type FuelType = 'Дизель' | 'АИ-80' | 'АИ-92' | 'АИ-95' | 'АИ-98' | 'СУГ'
export type CarType = {
  // Марка автомобиля
  M_AM: string
  // Гос.номер
  NAVTO: string
  // Короткое название марки (для работы в программе)
  LM_AM: string
  // Норма расхода на слив
  NRT_SLIV: number
  // Норма расхода на подъем кузова
  NRT_PODJOM: number
  // Норма расхода на час осн. двиг. летом
  NRT_CH_OSN_DVIG_L: number
  // Норма расхода на час осн. двиг. зимой
  NRT_CH_OSN_DVIG_Z: number
  // Норма расхода на час агрег. летом
  RCH: number
  // Норма расхода на час агрег. зимой
  RCH_Z: number
  // Норма расхода на час прогрев зимой
  RPROG_Z: number
  // Норма расхода на час прогрев летом
  RPROG_L: number
  // Норма расхода на 100 км летом
  NRT_L: number
  // Норма расхода на 100 км зимой
  NRT_Z: number
  // Норма расхода на 100 км на тонну летом
  NRT_GRUZ_L: number
  // Норма расхода на 100 км на тонну зимой
  NRT_GRUZ_Z: number
  // Норма расхода на 100 км межгород летом
  NRT_L_MG: number
  // Норма расхода на 100 км межгород зимой
  NRT_Z_MG: number
  // Тип топлива
  TOPL: FuelType
  // Синхронизация с разнарядкой
  RAZN_OD_ID: number
  // ID услуги из 1C
  FROM_1C_ID: string
  // Архив
  ARHIV: boolean

  // Тип топлива механизма
  TOPL_MEH: FuelType
  // Зарплатный коэфф.
  ST_ZARPL: number
  // Метод расчета
  METOD: number
  // Норма расхода газа на 100 км летом
  NRT_SUG_L: number
  // Норма расхода газа на 100 км зимой
  NRT_SUG_Z: number
  // Машина подрядчика
  DATA_ID: number
  // Архив ???
  DEL: string
  // Запрет автоматического расчета остатков топлива по путевым листам
  DISABLE_AUTOCALC_FUEL: number

  // ????
  SUG: number
  // ????
  V_BAK: number
  // ???????
  PREDUPR: number
  // ????
  OD_KEY: number
  // ??????
  MAM_NOM: string
  // ????
  INV_NO: number
  // ???
  TIP_TEHN: string
}
