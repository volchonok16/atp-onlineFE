import { instance } from '../../../../../app/api/instance'

import type { FuelType } from '../../carsData/api/api'

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
  FIO_KEY: number
  FIO: string
  AUTO_ID: number
  ORG_ID: number
  MAM: null | string
  ARHIV: boolean
  USE_OF_RAZN: boolean
  FULL_FIO: string
  EKIPAG: boolean
  N_IN_EGIPAG: number | null
  FROM_1C_ID: null | string
  UDOST: string
  DATE_UDOST: string
  M_AM: string
  TEL: string
  DATE_SPRAV: string
  DATE_UDOST_SPEC: string
  UDOST_SPEC: string
  NAVTO: string
  ORG: string
  PREDUPR: number
  DOPOK_DATE: null | string
  K_VOD_DATE: null | string
  INFO: string
  STAGIROVKA_PERIOD: null | string
  KEY_ID: null | number
  SETUP_ID: number
  SCAN_CODE: null | string
  PRIM: null | string
  KARTA_TAHO: null | string
  DATE_KARTA_TAHO: null | string
  TIP_VODIT: number | boolean
  TIP_DISPET: number | boolean
  TIP_VRACH: number | boolean
  TIP_REMONT: number | boolean
  TIP_CONTROL: number | boolean
  TIP_KONDUKTOR: number | boolean
  TIP_NACH_A_K: number | boolean
  N_CARD_TAHOGRAF: string
  DATE_CARD_TAHOGRAF: string
  ZP_FROM_1C_GROUP_ID: null | number
  KAT_S_AI: boolean
  KAT_S_AII: boolean
  KAT_S_AIII: boolean
  KAT_S_AIV: boolean
  KAT_S_B: boolean
  KAT_S_C: boolean
  KAT_S_D: boolean
  KAT_S_E: boolean
  KAT_S_F: boolean
  KLASS: null | string
  KAT_A: boolean
  KAT_A1: boolean
  KAT_B: boolean
  KAT_BE: boolean
  KAT_B1: boolean
  KAT_C: boolean
  KAT_C1: boolean
  KAT_C1E: boolean
  KAT_CE: boolean
  KAT_D: boolean
  KAT_D1: boolean
  KAT_D1E: boolean
  KAT_DE: boolean
  KAT_E: boolean
  KAT_TM: boolean
  KAT_TB: boolean
  FIO_EXT_KEY: number
  FIO_ID: number
  TAB_NO: number | null
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
  DATE_OT: string
  DATE_DO: string
  ARHIV: boolean
  D_PREDUPR: number
  KEY_ID: number
  SETUP_ID: number
}

export type StaffKeys = keyof StaffType
