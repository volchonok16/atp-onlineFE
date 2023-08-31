import { instance } from '../../../../../app/api/instance'

export const companiesApi = {
  fetchCompaniesData(shortName?: string) {
    return instance.get<CompanyListItemType[]>(
      'data-editing/organizations-list',
      {
        params: { shortName },
      },
    )
  },
  fetchCompanyData(id: number) {
    return instance.get<CompanyType>(`data-editing/organizations/${id}`)
  },
}

//======Types======

export type CompanyListItemType = {
  LNAME: string
  DATA_KEY: number
  ZAK_: string
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
