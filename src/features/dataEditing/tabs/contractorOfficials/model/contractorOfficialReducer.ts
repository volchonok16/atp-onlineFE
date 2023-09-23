import { AppRootStateType, AppThunkType } from '../../../../../app/model/store'

import {
  contractorOfficialsApi,
  type ContractorSubunitType,
  type SubunitOfficialsType,
  type ContractorType,
} from '../api/api'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  contractors: [],
  activeContractor: {} as ContractorType,
  contractorSubunits: [],
  subunitOfficial: [],
}

export const contractorsReducer = (
  state: InitialStateType = initialState,
  action: ContractorsActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'contractors/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'contractors/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'contractors/GET-CONTRACTORS-DATA':
      return {
        ...state,
        contractors: action.payload.contractors,
      }
    case 'contractors/SET-ACTIVE-CONTRACTOR':
      return {
        ...state,
        activeContractor: action.payload.contractor,
      }
    case 'contractors/GET-CONTRACTOR-SUBUNIT-DATA':
      return {
        ...state,
        contractorSubunits: action.payload.subunit,
      }
    case 'contractors/GET-SUBUNIT-OFFICIAL-DATA':
      return {
        ...state,
        subunitOfficial: action.payload.subunitOfficial,
      }
    default:
      return state
  }
}

//======THUNKS======

export const getContractorsData = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await contractorOfficialsApi.fetchContractorList()
    dispatch(getContractorsDataAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const getContractorsSubunitData =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await contractorOfficialsApi.fetchContractorSubunitList(id)
      dispatch(getContractorSubunitDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
      dispatch(getContractorSubunitDataAC([]))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getSubunitOfficialData =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res =
        await contractorOfficialsApi.fetchContractorSubunitOfficialList(id)
      dispatch(getSubunitOfficialDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

//======ACTIONS======
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'contractors/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'contractors/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const getContractorsDataAC = (contractors: ContractorType[]) =>
  ({
    type: 'contractors/GET-CONTRACTORS-DATA',
    payload: { contractors },
  }) as const

export const setActiveContractorAC = (contractor: ContractorType) =>
  ({
    type: 'contractors/SET-ACTIVE-CONTRACTOR',
    payload: { contractor },
  }) as const

export const getContractorSubunitDataAC = (subunit: ContractorSubunitType[]) =>
  ({
    type: 'contractors/GET-CONTRACTOR-SUBUNIT-DATA',
    payload: { subunit },
  }) as const

export const getSubunitOfficialDataAC = (
  subunitOfficial: SubunitOfficialsType[],
) =>
  ({
    type: 'contractors/GET-SUBUNIT-OFFICIAL-DATA',
    payload: { subunitOfficial },
  }) as const

//======SELECTORS======

export const getContractors = (state: AppRootStateType) =>
  state.contractors.contractors

export const getContractorSubunits = (state: AppRootStateType) =>
  state.contractors.contractorSubunits

export const getSubunitOfficial = (state: AppRootStateType) =>
  state.contractors.subunitOfficial
export const activeContractor = (state: AppRootStateType) =>
  state.contractors.activeContractor
//======TYPES======

type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  contractors: ContractorType[]
  activeContractor: ContractorType
  contractorSubunits: ContractorSubunitType[]
  subunitOfficial: SubunitOfficialsType[]
}

export type ContractorsActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof getContractorsDataAC>
  | ReturnType<typeof getContractorSubunitDataAC>
  | ReturnType<typeof getSubunitOfficialDataAC>
  | ReturnType<typeof setActiveContractorAC>
