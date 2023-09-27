import { instance } from 'src/app/api/instance'

import type { CompanyListItemType } from '../../companies/api/api'

export const contractorOfficialsApi = {
  fetchContractorList() {
    return instance.get<ContractorType[]>('data-editing/organizations-list')
  },
  fetchContractorSubunitList(contractorId: number) {
    return instance.get<ContractorSubunitType[]>(
      `data-editing/organizations-list/${contractorId}/subunits`,
    )
  },
  fetchContractorSubunitOfficialList(contractorId: number) {
    return instance.get<SubunitOfficialsType[]>(
      `data-editing/organizations-list/${contractorId}/executive`,
    )
  },
}

//=======TYPES========
export type ContractorType = Pick<CompanyListItemType, 'LNAME' | 'DATA_KEY'>

export type ContractorSubunitType = {
  DATA_PODR_KEY: number
  DATA_ID: number
  PODR: string
  NORMA: null | number
  NORMA_VIH: null | number
  ARHIV: boolean
  KEY_ID: null | number
  SETUP_ID: number
  CODE: string | null
}

export type SubunitOfficialsType = {
  DATA_FIO_KEY: number
  DATA_ID: number
  DATA_PODR_ID: number
  FIO: string
  DOLGN: string
}

export type OfficialKeys = keyof SubunitOfficialsType
