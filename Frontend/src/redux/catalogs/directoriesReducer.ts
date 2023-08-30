import { AppRootStateType, AppThunkType } from '../../app/model/store'
import {
  CommunicationsType,
  directoriesApi,
  GoodsType,
  LoadingUnloadingAddressesType,
  MechanismTypesType,
  NotesType,
  TransportationsType,
} from '../../components/guidesTabContent/extendedInfoTab/api'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  mechanismTypes: [],
  notes: [],
  loadingUnloadingAddresses: [],
  goodsType: [],
  transportationsType: [],
  communicationsType: [],
}

export const directoriesReducer = (
  state: InitialStateType = initialState,
  action: DirectoriesActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'directories/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'directories/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'directories/SET-MECHANISM-TYPES':
      return {
        ...state,
        mechanismTypes: action.payload.mechanismTypes,
      }
    case 'directories/SET-NOTES':
      return {
        ...state,
        notes: action.payload.notes,
      }
    case 'directories/SET-LOADING-UNLOADING-ADDRESSES':
      return {
        ...state,
        loadingUnloadingAddresses: action.payload.addresses,
      }
    case 'directories/SET-GOODS-TYPE':
      return {
        ...state,
        goodsType: action.payload.goods,
      }
    case 'directories/SET-TRANSPORTATIONS-TYPE':
      return {
        ...state,
        transportationsType: action.payload.transportations,
      }
    case 'directories/SET-COMMUNICATIONS-TYPE':
      return {
        ...state,
        communicationsType: action.payload.communications,
      }
    default:
      return state
  }
}

export const getMechanismTypesTC = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await directoriesApi.getMechanismTypes()
    dispatch(setMechanismTypesAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const getNotesTC = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await directoriesApi.getNotes()
    dispatch(setNotesAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const getLoadingUnloadingAddressesTC =
  (): AppThunkType => async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await directoriesApi.getLoadingUnloadingAddresses()
      dispatch(setLoadingUnloadingAddressesAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getGoodsTypeTC = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await directoriesApi.getGoodsType()
    dispatch(setGoodsTypeAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const getTransportationsTypeTC =
  (): AppThunkType => async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await directoriesApi.getTransportationsType()
      dispatch(setTransportationsTypeAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getCommunicationsTypeTC = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await directoriesApi.getCommunicationsType()
    dispatch(setCommunicationsTypeAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

//======ACTIONS======

export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'directories/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'directories/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const setMechanismTypesAC = (mechanismTypes: MechanismTypesType[]) =>
  ({
    type: 'directories/SET-MECHANISM-TYPES',
    payload: { mechanismTypes },
  }) as const

export const setNotesAC = (notes: NotesType[]) =>
  ({
    type: 'directories/SET-NOTES',
    payload: { notes },
  }) as const

export const setLoadingUnloadingAddressesAC = (
  addresses: LoadingUnloadingAddressesType[],
) =>
  ({
    type: 'directories/SET-LOADING-UNLOADING-ADDRESSES',
    payload: { addresses },
  }) as const

export const setGoodsTypeAC = (goods: GoodsType[]) =>
  ({
    type: 'directories/SET-GOODS-TYPE',
    payload: { goods },
  }) as const

export const setTransportationsTypeAC = (
  transportations: TransportationsType[],
) =>
  ({
    type: 'directories/SET-TRANSPORTATIONS-TYPE',
    payload: { transportations },
  }) as const

export const setCommunicationsTypeAC = (communications: CommunicationsType[]) =>
  ({
    type: 'directories/SET-COMMUNICATIONS-TYPE',
    payload: { communications },
  }) as const

//======SELECTORS

export const getMechanismTypes = (state: AppRootStateType) =>
  state.directories.mechanismTypes

export const getNotes = (state: AppRootStateType) => state.directories.notes

export const getLoadingUnloadingAddresses = (state: AppRootStateType) =>
  state.directories.loadingUnloadingAddresses

export const getGoodsType = (state: AppRootStateType) =>
  state.directories.goodsType

export const getTransportationsType = (state: AppRootStateType) =>
  state.directories.transportationsType

export const getCommunicationsType = (state: AppRootStateType) =>
  state.directories.communicationsType

//======TYPES======

type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  mechanismTypes: MechanismTypesType[]
  notes: NotesType[]
  loadingUnloadingAddresses: LoadingUnloadingAddressesType[]
  goodsType: GoodsType[]
  transportationsType: TransportationsType[]
  communicationsType: CommunicationsType[]
}

export type DirectoriesActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setMechanismTypesAC>
  | ReturnType<typeof setNotesAC>
  | ReturnType<typeof setLoadingUnloadingAddressesAC>
  | ReturnType<typeof setTransportationsTypeAC>
  | ReturnType<typeof setCommunicationsTypeAC>
  | ReturnType<typeof setGoodsTypeAC>
