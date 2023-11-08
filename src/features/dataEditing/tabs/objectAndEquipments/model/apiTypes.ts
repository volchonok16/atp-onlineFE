export type ObjectAndEquipmentType = {
  SKLAD_OBJ_SPIS_KEY: number
  MAM: string
  NOMER: string
  DEL: number
  SUTUP_ID: number
  DESCR: string
  PREDUPR: string
  FULL_NAME: string
  DATE_VVODA: string
}

export type addEquipmentType = {
  MAM: string
  NOMER: string
  DESCR: string
  DATE_VVODA: string
}

export type addEquipmentResType = {
  SKLAD_OBJ_SPIS_KEY: number
}

export type updateEquipmentType = {
  body: addEquipmentType
  SKLAD_OBJ_SPIS_KEY: number
}

export type DocumentForEquipmentType = {
  RAZN_OD_DOCA_KEY: number
  RAZN_OD_ID: number
  NAIM: string
  NOMER: string
  KEM_VID: string
  DATE_OT: string
  DATE_DO: string
  D_PREDUPR: number
  KEY_ID: number
  SETUP_ID: number
  IN_AKT: number
}

export type DocsType = {
  RAZN_OD_DOCS_KEY: number
  MAS_SKLAD_OBJ_SPIS_KEY: number
  NAIM: string
  NOMER: string
  KEM_VID: string
  DATE_OT: string
  DATE_DO: string
  D_PREDUPR: number
}
