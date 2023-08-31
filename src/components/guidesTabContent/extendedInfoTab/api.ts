import { instance } from '../../../app/api/instance'

export const extendedInfoApi = {
  getListOfEquipments() {
    return instance.get<ListOFEquipmentsType[]>('catalogs/extended-information')
  },
  getRelatedData(id: number) {
    return instance.get<RelatedDataType>(
      `catalogs/extended-information/${id}/related-data`,
    )
  },
  getTechnicalCharacteristicData(id: number) {
    return instance.get<TechnicalCharacteristicType>(
      `catalogs/extended-information/${id}/technical-characteristic`,
    )
  },
  getDocumentationsData(id: number) {
    return instance.get<DocumentationDataType>(
      `catalogs/extended-information/${id}/documentation`,
    )
  },
  getTimingControlData(id: number) {
    return instance.get<TimingControlDataType[]>(
      `catalogs/extended-information/${id}/documentation/timing-control`,
    )
  },
  getRefuelingCardsData(id: number) {
    return instance.get<RefuelingCardsDataType[]>(
      `catalogs/extended-information/${id}/documentation/refueling-cards`,
    )
  },
  getNotInDemandAdditionalInfo(id: number) {
    return instance.get<NotInDemandTypeData[]>(
      `catalogs/extended-information/${id}/additional-info/not-in-demand`,
    )
  },
  getConservationAdditionalInfo(id: number) {
    return instance.get<ConservationDataType[]>(
      `catalogs/extended-information/${id}/additional-info/conservation`,
    )
  },
  getPassesData(id: number) {
    return instance.get<PassesDataType[]>(
      `catalogs/extended-information/${id}/passes`,
    )
  },
  getDriverHoldingData(id: number) {
    return instance.get<DriverHoldingDataType[]>(
      `catalogs/extended-information/${id}/driver-holding`,
    )
  },
  getCarsEquipments(id: number) {
    return instance.get<CarEquipmentData[]>(
      `catalogs/extended-information/${id}/car-equipment`,
    )
  },
}

export const directoriesApi = {
  getMechanismTypes() {
    return instance.get<MechanismTypesType[]>(
      'catalogs/directories/mechanism-types',
    )
  },
  getNotes() {
    return instance.get<NotesType[]>('catalogs/directories/notes')
  },
  getLoadingUnloadingAddresses() {
    return instance.get<LoadingUnloadingAddressesType[]>(
      'catalogs/directories/loading-unloading-addresses',
    )
  },
  getGoodsType() {
    return instance.get<GoodsType[]>('catalogs/directories/goods-types')
  },
  getTransportationsType() {
    return instance.get<TransportationsType[]>(
      'catalogs/directories/transportation-types',
    )
  },
  getCommunicationsType() {
    return instance.get<CommunicationsType[]>(
      'catalogs/directories/communication-types',
    )
  },
}

//======Types======

export type ListOFEquipmentsType = {
  RAZN_OD_KEY: number
  MAM: string
  NOMER: string
}

export type RelatedDataType = {
  RAZN_OD_EXT_KEY: number
  RAZN_OD_ID: number
  GPS_ON: number
  GPS_MEHAN: number
  GPS_ID: string
  GPS_DATE: string
  KOL_SHIN: number
  KOL_AKKUM: number
  SCAN_CODE: string
  DELTA_PROBEG: number
  PERIOD_TO: number
  PERIOD_TO_H: number
  AGR_TO1: number
  ZAM_M_G: number
  ZAM_M_T: number
  PERIOD_TO2: number
  PERIOD_TO2_H: number
  AGR_TO2: number
}

export type TechnicalCharacteristicType = {
  RAZN_OD_EXT_KEY: number
  RAZN_OD_ID: number
  GAR_NO: string
  INV_NO: string
  GOD_VIP: number
  COLOR: string
  MAX_MASSA: number
  MASS_BEZ_NAGR: number
  GRUZOP: string
  VIN: string
  KAT: string
  KAT_SPEC: string
  MESTO_RAZM: string
  KATEG_TS: string
  TIP_TS: string
  MODEL: string
  PRIMENENIE: string
  TIP_TEHN_ASU_ODS: string
  MOD_DV: string
  N_DV: string
  MOSHN: string
  OB_DV: number
  N_KUZ: string
  N_SHAS: string
  PROIZV: string
  KOL_POSAD_MEST: number
  VMEST_CHEL: number
  KAT_VMEST: string
  V_BAK: number
  PROBEG_DO_AP: number
  N_KOR_PERED: string
  OSN_VED_MOST: string
  KLASSIFIKATOR: string
  EKO_STANDART: string
  SEZON: string
  S_ZIMA: string
  S_LETO: string
}

export type DocumentationDataType = {
  RAZN_OD_EXT_KEY: number
  RAZN_OD_ID: number
  N_AKT: string
  N_AKT_DATE: string
  PRIKAZ_N: string
  PRIKAZ_N_DATE: string
  DISL: string
  OTV_ITR: string
  PRIKAZ_BAL: number
  PRIKAZ_BAL_DATE: string
  BAL_STOIM: number
  NORMA_PROB: number
  AMORTIZ: number
  DATE_VIBIT: string
  SVID_REG: string
  DATA_REG: string
  KEM_REG: string
  PASP: string
  DATA_VID: string
  KEM_VID: string
  GTO: string
  GTO_DO: string
  STRAH_SVID: string
  STRAH_SVID_DATE_OT: string
  STRAH_SVID_DATE: string
  REG_N_GPM: string
  DATE_P_TAHOGRAFA: string
}

export type TimingControlDataType = {
  RAZN_OD_DOCS_KEY: number
  RAZN_OD_ID: number
  NAIM: string
  NOMER: string
  KEM_VID: string
  DATE_OT: string
  DATE_DO: string
  D_PREDUPR: number
  KEY_ID: number
  IN_AKT: number
}

export type RefuelingCardsDataType = {
  RAZN_OD_ZAPR_CARDS_KEY: number
  SETUP_ID: number
  KEY_ID: number
  RAZN_OD_ID: number
  N_ZAPR_CARD: string
  ORG_NAME: string
  LIMIT_: number
  TOPL: string
}

export type NotInDemandTypeData = {
  RAZN_OD_NE_VOSTR_KEY: number
  RAZN_OD_ID: number
  SETUP_ID: number
  KEY_ID: number
  DATE_OT: string
  DATE_DO: string
}

export type ConservationDataType = {
  RAZN_OD_KONSERV_KEY: number
  RAZN_OD_ID: number
  SETUP_ID: number
  KEY_ID: number
  DATE_OT: string
  DATE_DO: string
}

export type PassesDataType = {
  PROPUSK_KEY: number
  RAZN_OD_ID: number
  MARSHRUT: string
  N_RAZR: string
  DATE_OT: string
  DATE_DO: string
  SETUP_ID: number
  KEY_ID: number
}

export type DriverHoldingDataType = {
  RAZN_OD_ZAKR_KEY: number
  RAZN_OD_ID: number
  FIO_ID: number
  DATES: string
  KEY_ID: number
  SETUP_ID: number
  PRIM: string
  UCHASTOK: string
  ZAK: string
  DATES_DO: string
  ORG_ID: number
  FIO_ID_KONTR: number
}

export type CarEquipmentData = {
  RAZN_OD_KOMPL_KEY: number
  RAZN_OD_ID: number
  NAIM: string
  NOMER: string
  KEY_ID: number
  SETUP_ID: number
  KOL: number
}

export type MechanismTypesType = {
  RAZN_T_T_KEY: number
  T_T: string
  NOM: number
  SETUP_ID: number
  KEY_ID: number
  KEY_TIP: number
}

export type NotesType = {
  RAZN_STAND_PRIM_KEY: number
  STAND_PRIM: string
  SETUP_ID: number
}

export type LoadingUnloadingAddressesType = {
  RAZN_ADRESS_KEY: number
  ADRESS: string
  SETUP_ID: number
}

export type GoodsType = {
  RAZN_TIP_GRUZ_KEY: number
  TIP_GRUZ: string
  SETUP_ID: number
  KEY_ID: number
  ENABLE_TTN: number
  KLASS: number
  SR_KOEF: number
  TIP_RASCH: number
}

export type TransportationsType = {
  RAZN_VID_PEREV_KEY: number
  VID_PEREV: string
  KEY_ID: number
  SETUP_ID: number
}

export type CommunicationsType = {
  RAZN_VID_SOOBSH_KEY: number
  VID_SOOBSH: string
  KEY_ID: number
  SETUP_ID: number
}
