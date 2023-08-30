import { instance } from '../../../../../app/api/instance'

import type { ArchiveType, FuelType } from '../../carsData/api/api'

export const staffApi = {
  fetchStaffInfo(surname?: string) {
    return instance.get<StaffType[]>('data-editing/staff-info', {
      params: { surname },
    })
  },
  fetchRefuelingCard(id: number) {
    return instance.get<RefuelCardType>(
      `data-editing/staff-info/${id}/refueling-cards`,
    )
  },
  fetchAdditionalInformation(id: number) {
    return instance.get<StaffAdditionalInformationType>(
      `data-editing/staff-info/${id}/additional-information`,
    )
  },
}

//====Types=====

export type StaffType = {
  // ?????
  FIO_KEY: number
  // ??????
  AUTO_ID: number
  // ??????
  EKIPAG: number
  // ?????
  N_IN_EGIPAG: number
  // ?????
  SETUP_ID: number
  // ?????
  KEY_ID: number
  // ?????
  FIO_EXT_KEY: number
  // ??????
  FIO_ID: number
  // ????
  UDOST: string
  // ????
  DATE_UDOST: string
  // ????
  TAB_NO: string
  // ??????
  TEL: string
  // ????
  DATE_SPRAV: string
  // ?????
  DATE_UDOST_SPEC: string
  // ?????
  UDOST_SPEC: string
  // ?????
  KEY_ID_1: number
  // ?????
  SETUP_ID_1: number
  // ??????
  LOGIN: string
  PASS: string
  // ??????
  KARTA_TAHO: string
  // ?????
  DATE_KARTA_TAHO: string
  // ????
  SCAN_CODE: string
  // ?????
  N_CARD_TAHOGRAF: string
  // ?????
  DATE_CARD_TAHOGRAF: string
  // ?????
  ZP_FROM_1C_GROUP_ID: number

  // Фамилия И.О.
  FIO: string
  // Подразделение
  ORG_ID: number
  // Должность
  MAM: string
  // Не использовать в путевках
  ARHIV: ArchiveType
  // Не использовать в разнарядке
  USE_OF_RAZN: ArchiveType
  // Не использовать в табеле
  USE_OF_TABEL: ArchiveType
  // Не использовать в складе
  USE_OF_SKLAD: string
  // Удалить
  DEL: string
  // Расшифровка Ф.И.О.
  FULL_FIO: string
  // График работы
  GRAPH: string
  // Подгруппа
  TABEL_PODGR_ID: number
  // Дата устройства
  D_USTR: string
  // Дата увольнения
  D_UVOL: string
  // ID в 1С
  FROM_1C_ID: string
  // Класс
  KLASS: string
  // Категории водительского удостоверения
  KAT_A: number
  KAT_A1: number
  KAT_B: number
  KAT_BE: number
  KAT_B1: number
  KAT_C: number
  KAT_C1: number
  KAT_C1E: number
  KAT_CE: number
  KAT_D: number
  KAT_D1: number
  KAT_D1E: number
  KAT_DE: number
  KAT_E: number
  KAT_TM: number
  KAT_TB: number
  KAT_S_AI: number
  KAT_S_AII: number
  KAT_S_AIII: number
  KAT_S_AIV: number
  KAT_S_B: number
  KAT_S_C: number
  KAT_S_D: number
  KAT_S_E: number
  KAT_S_F: number
  // Примечание
  PRIM: string
  // Водитель
  TIP_VODIT: number
  // Диспетчер
  TIP_DISPET: number
  // Врач
  TIP_VRACH: number
  // Ремонт. перс.
  TIP_REMONT: number
  // Контролёр
  TIP_CONTROL: number
  // Кондуктор
  TIP_KONDUKTOR: number
  // Начальник автоколонны
  TIP_NACH_A_K: number
  // Период стажировки
  STAGIROVKA_PERIOD: 'string'
}

export type RefuelCardType = {
  FIO_ZAPR_CARDS_KEY: number
  FIO_ID: number
  N_ZAPR_CARD: string
  ORG_NAME: string
  LIMIT_: number
  KEY_ID: number
  SETUP_ID: number
  TOPL: FuelType
}

export type StaffAdditionalInformationType = {
  FIO_DOCS_KEY: number
  FIO_ID: number
  NAIM: string
  NOMER: string
  KEM_VID: string
  DATE_OT: Date
  DATE_DO: Date
  ARHIV: ArchiveType
  D_PREDUPR: number
  KEY_ID: number
  SETUP_ID: number
}
