import {
  contractorOfficialsApi,
  type ContractorSubunitType,
  type SubunitOfficialsType,
  type ContractorType,
  OfficialKeys,
} from '../api/api'

import { AppRootStateType, AppThunkType } from 'src/app/model/store'
import { CreateOfficialFormData } from 'src/features/dataEditing/tabs/contractorOfficials/components/createOfficialForm/CreateOfficialForm'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  contractors: [],
  activeContractorId: null,
  subunits: [],
  activeSubunitId: null,
  officials: [],
  activeOfficialId: null,
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
    case 'contractors/SET-CONTRACTORS':
      return {
        ...state,
        contractors: action.payload.contractors,
      }
    case 'contractors/SET-ACTIVE-CONTRACTOR-ID':
      return {
        ...state,
        activeContractorId: action.payload.id,
      }
    case 'contractors/SET-SUBUNITS':
      return {
        ...state,
        subunits: action.payload.subunits,
      }
    case 'contractors/SET-ACTIVE-SUBUNIT-ID':
      return {
        ...state,
        activeSubunitId: action.payload.id,
      }
    case 'contractors/SET-OFFICIALS':
      return {
        ...state,
        officials: action.payload.officials,
      }
    case 'contractors/SET-ACTIVE-OFFICIAL-ID':
      return {
        ...state,
        activeOfficialId: action.payload.id,
      }
    case 'contractors/CHANGE-ACTIVE-OFFICIAL-DATA':
      return {
        ...state,
        officials: state.officials.map((item) => item),
      }
    case 'contractors/ADD-OFFICIAL':
      return {
        ...state,
        officials: [action.payload.official, ...state.officials],
      }
    default:
      return state
  }
}

//======THUNKS======
export const getContractorListThunk = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await contractorOfficialsApi.fetchContractorList()
    dispatch(setContractorsAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const getSubunitListThunk =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await contractorOfficialsApi.fetchContractorSubunitList(id)
      dispatch(setSubunitsAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
      dispatch(setSubunitsAC([]))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getOfficialLitsThunk =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res =
        await contractorOfficialsApi.fetchContractorSubunitOfficialList(id)
      dispatch(setOfficialsAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const changeOfficialData =
  (data: ChangeOfficialDataForm): AppThunkType =>
  async (dispatch, getState: () => AppRootStateType) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      // Заменить на запрос
      const activeOfficialId = getState().contractors.activeOfficialId
      const activeOfficial = getState().contractors.officials.find(
        (item) => item.DATA_FIO_KEY === activeOfficialId,
      )
      if (activeOfficial) {
        const item = { ...activeOfficial, [data.key]: data.value }
        dispatch(changeActiveOfficialDataAC(item))
      }
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const postNewOfficialThunk =
  (data: CreateOfficialFormData): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      // Заменить на запрос
      const officialId = Date.now()
      const newOfficial: SubunitOfficialsType = {
        FIO: data.FIO,
        DOLGN: data.DOLGN,
        DATA_FIO_KEY: officialId,
        DATA_ID: 0,
        DATA_PODR_ID: 0,
      }
      dispatch(addOfficialAC(newOfficial))
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

export const setContractorsAC = (contractors: ContractorType[]) =>
  ({
    type: 'contractors/SET-CONTRACTORS',
    payload: { contractors },
  }) as const

export const setActiveContractorIdAC = (id: number | null) =>
  ({
    type: 'contractors/SET-ACTIVE-CONTRACTOR-ID',
    payload: { id },
  }) as const

export const setSubunitsAC = (subunits: ContractorSubunitType[]) =>
  ({
    type: 'contractors/SET-SUBUNITS',
    payload: { subunits },
  }) as const

export const setActiveSubunitIdAC = (id: number | null) =>
  ({
    type: 'contractors/SET-ACTIVE-SUBUNIT-ID',
    payload: { id },
  }) as const

export const setOfficialsAC = (officials: SubunitOfficialsType[]) =>
  ({
    type: 'contractors/SET-OFFICIALS',
    payload: { officials },
  }) as const

export const setActiveOfficialIdAC = (id: number | null) =>
  ({
    type: 'contractors/SET-ACTIVE-OFFICIAL-ID',
    payload: { id },
  }) as const

export const changeActiveOfficialDataAC = (official: SubunitOfficialsType) =>
  ({
    type: 'contractors/CHANGE-ACTIVE-OFFICIAL-DATA',
    payload: { official },
  }) as const

export const addOfficialAC = (official: SubunitOfficialsType) =>
  ({
    type: 'contractors/ADD-OFFICIAL',
    payload: { official },
  }) as const

//======SELECTORS======
export const selectedContractors = (state: AppRootStateType) =>
  state.contractors.contractors

export const selectedSubunits = (state: AppRootStateType) =>
  state.contractors.subunits

export const selectedOfficials = (state: AppRootStateType) =>
  state.contractors.officials

export const selectedActiveContractorId = (state: AppRootStateType) =>
  state.contractors.activeContractorId

export const selectedActiveSubunitId = (state: AppRootStateType) =>
  state.contractors.activeSubunitId

export const selectedActiveOfficialId = (state: AppRootStateType) =>
  state.contractors.activeOfficialId

//======TYPES======
type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  contractors: ContractorType[]
  activeContractorId: number | null
  subunits: ContractorSubunitType[]
  activeSubunitId: number | null
  officials: SubunitOfficialsType[]
  activeOfficialId: number | null
}

export type ChangeOfficialDataForm = {
  key: OfficialKeys
  value: string | number
}

export type ContractorsActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setContractorsAC>
  | ReturnType<typeof setSubunitsAC>
  | ReturnType<typeof setOfficialsAC>
  | ReturnType<typeof setActiveContractorIdAC>
  | ReturnType<typeof setActiveSubunitIdAC>
  | ReturnType<typeof setActiveOfficialIdAC>
  | ReturnType<typeof changeActiveOfficialDataAC>
  | ReturnType<typeof addOfficialAC>
