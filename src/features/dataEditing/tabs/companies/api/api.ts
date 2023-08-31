import { instance } from '../../../../../app/api/instance'

export const companiesApi = {
  fetchCompaniesData(archive: boolean = false) {
    return instance.get<CompanyListItemType[]>('data-editing/organizations', {
      params: { archive },
    })
  },
  fetchCompanyData(id: number) {
    return instance.get<CompanyType>(`data-editing/organizations/${id}`)
  },
}

//======Types======

export type CompanyListItemType = {
  DATA_KEY: number
  ZAK_: string
  LNAME: string
  KAT: number
  N_KAT: number
  METOD: number
}

export type CompanyType = {
  DATA_EXT_KEY: number
  DATA_ID: number
  ATI: string
  CONTACTS: string
  T_POGR: string
  T_VIGR: string
  REKVIZITI: string
  PRIM: string
  KEY_ID: number
  SETUP_ID: number
  DEBET_LIMIT: number
}
