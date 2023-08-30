import { AppRootStateType, AppThunkType } from '../../app/model/store'
import {
  ListOfEquipmentsInfoType,
  guidesApi,
} from '../../layouts/guidesLayout/api'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  listOfEquipmentsInfo: [],
}

export const listOfEquipmentsInfoReducer = (
  state: InitialStateType = initialState,
  action: ListOfEquipmentsInfoActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'listOfEquipmentsInfo/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'listOfEquipmentsInfo/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'listOfEquipmentsInfo/GET-LIST-OF_EQUIPMENTS-INFO':
      return {
        ...state,
        listOfEquipmentsInfo: action.payload.info,
      }
    default:
      return state
  }
}

//======THUNKS======

export const getListOfEquipmentsInfoData =
  (): AppThunkType => async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await guidesApi.getListOfEquipmentsInfo()
      dispatch(getListOfEquipmentsInfoAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

//======ACTIONS======
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'listOfEquipmentsInfo/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'listOfEquipmentsInfo/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const getListOfEquipmentsInfoAC = (info: ListOfEquipmentsInfoType[]) =>
  ({
    type: 'listOfEquipmentsInfo/GET-LIST-OF_EQUIPMENTS-INFO',
    payload: { info },
  }) as const

//======SELECTORS======

export const getListOfEquipmentsInfo = (state: AppRootStateType) =>
  state.listOfEquipments.listOfEquipmentsInfo

//======TYPES======

type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  listOfEquipmentsInfo: ListOfEquipmentsInfoType[]
}

export type ListOfEquipmentsInfoActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof getListOfEquipmentsInfoAC>
