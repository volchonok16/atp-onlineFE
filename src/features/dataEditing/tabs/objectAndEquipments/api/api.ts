import { instance } from '../../../../../app/api/instance'
import { StaffKeys } from '../../staff/api/api'

export const objectAndEquipmentsApi = {
  getObjectAndEquipmentsData() {
    return instance.get<ObjectAndEquipmentType[]>(
      'data-editing/other-equipment',
    )
  },
  changeObjectAndEquipmentData(
    id: number | string,
    name: StaffKeys | ObjectAndEquipmentKeys, // нужны только 'MAM' и 'NOMER'
    value?: string | null,
  ) {
    return instance.put<boolean>(
      `data-editing/other-equipments/objects-equipments/${id}`,
      { [name]: value },
    )
  },
  getDocumentsForEquipment(id: number) {
    return instance.get(`data-editing/other-equipment/${id}`)
  },
}

//======Types======

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

export type ObjectAndEquipmentKeys = keyof ObjectAndEquipmentType
