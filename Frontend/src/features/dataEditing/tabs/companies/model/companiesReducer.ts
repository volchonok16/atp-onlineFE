import { AppThunkType } from '../../../../../app/model/store'

import { CompanyListItemType, CompanyType, companiesApi } from '../api/api'

const initialState: InitialState = {
  isLoading: false,
  errorMessage: '',
  companyList: [],
  aboutCompany: {} as CompanyType,
  activeCompanyId: null,
}

export const companiesReducer = (
  state: InitialState = initialState,
  action: CompaniesActionsType,
): InitialState => {
  switch (action.type) {
    case 'companies/SET-COMPANY-LIST':
      return {
        ...state,
        companyList: action.payload.companyList,
      }
    case 'companies/ADD-COMPANY':
      return {
        ...state,
        companyList: [action.payload.company, ...state.companyList],
      }
    case 'companies/DELETE-COMPANY':
      return {
        ...state,
        companyList: state.companyList.filter(
          (company) => company.DATA_KEY !== action.payload.companyId,
        ),
      }
    case 'companies/SET-ACTIVE-COMPANY-ID':
      return {
        ...state,
        activeCompanyId: action.payload.companyId,
      }
    case 'companies/SET-ABOUT-COMPANY-DATA':
      return {
        ...state,
        aboutCompany: action.payload.data,
      }
    case 'companies/CHANGE-ABOUT-COMPANY-DATA':
      return {
        ...state,
        aboutCompany: action.payload.company,
      }
    case 'companies/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'companies/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}

//==== ACTIONS =====
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'companies/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'companies/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const setCompanyListAC = (companyList: CompanyListItemType[]) =>
  ({
    type: 'companies/SET-COMPANY-LIST',
    payload: { companyList },
  }) as const

export const deleteCompanyAC = (companyId: number) =>
  ({
    type: 'companies/DELETE-COMPANY',
    payload: { companyId },
  }) as const

export const setActiveCompanyIdAC = (companyId: number | null) =>
  ({
    type: 'companies/SET-ACTIVE-COMPANY-ID',
    payload: { companyId },
  }) as const

export const addCompanyAC = (company: CompanyListItemType) =>
  ({
    type: 'companies/ADD-COMPANY',
    payload: { company },
  }) as const

export const setAboutCompanyDataAC = (data: CompanyType) =>
  ({
    type: 'companies/SET-ABOUT-COMPANY-DATA',
    payload: { data },
  }) as const

export const changeAboutCompanyDataAC = (
  companyId: number,
  company: CompanyType,
) =>
  ({
    type: 'companies/CHANGE-ABOUT-COMPANY-DATA',
    payload: { companyId, company },
  }) as const

//====== THUNKS ======

export const fetchCompanyListThunk = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await companiesApi.fetchCompaniesData()
    dispatch(setCompanyListAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const fetchAboutCompanyDataThunk =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await companiesApi.fetchCompanyData(id)
      dispatch(setAboutCompanyDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

//====== TYPES ======
type InitialState = {
  isLoading: boolean
  errorMessage: string
  companyList: CompanyListItemType[]
  aboutCompany: CompanyType
  activeCompanyId: number | null
}

export type CompaniesActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setCompanyListAC>
  | ReturnType<typeof deleteCompanyAC>
  | ReturnType<typeof addCompanyAC>
  | ReturnType<typeof changeAboutCompanyDataAC>
  | ReturnType<typeof setAboutCompanyDataAC>
  | ReturnType<typeof setActiveCompanyIdAC>
