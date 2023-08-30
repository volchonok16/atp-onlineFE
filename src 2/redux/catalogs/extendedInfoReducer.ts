import { AppRootStateType, AppThunkType } from '../../app/model/store'
import {
  extendedInfoApi,
  RelatedDataType,
  ListOFEquipmentsType,
  TechnicalCharacteristicType,
  DocumentationDataType,
  TimingControlDataType,
  RefuelingCardsDataType,
  NotInDemandTypeData,
  ConservationDataType,
  PassesDataType,
  DriverHoldingDataType,
  CarEquipmentData,
} from '../../components/guidesTabContent/extendedInfoTab/api'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  equipments: [],
  activeEquipment: {} as ListOFEquipmentsType,
  relatedData: {} as RelatedDataType,
  technicalCharacteristic: {} as TechnicalCharacteristicType,
  documentations: {} as DocumentationDataType,
  timingControl: [],
  refuelingCards: [],
  notInDemand: [],
  conservation: [],
  passes: [],
  driverHolding: [],
  carEquipment: [],
}

export const extendedInfoReducer = (
  state: InitialStateType = initialState,
  action: ExtendedInfoActionType,
): InitialStateType => {
  switch (action.type) {
    case 'extendedInfo/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'extendedInfo/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'extendedInfo/SET-EQUIPMENTS-LIST':
      return {
        ...state,
        equipments: action.payload.data,
      }
    case 'extendedInfo/SET-ACTIVE-EQUIPMENT':
      return {
        ...state,
        activeEquipment: action.payload.equipment,
      }
    case 'extendedInfo/SET-RELATED-DATA':
      return {
        ...state,
        relatedData: action.payload.relatedData,
      }
    case 'extendedInfo/SET-TECHNICAL-CHARACTERISTIC-DATA':
      return {
        ...state,
        technicalCharacteristic: action.payload.technicalData,
      }
    case 'extendedInfo/SET-DOCUMENTATION-DATA':
      return {
        ...state,
        documentations: action.payload.documentation,
      }
    case 'extendedInfo/SET-TIMING-CONTROL-DATA':
      return {
        ...state,
        timingControl: action.payload.timingData,
      }
    case 'extendedInfo/SET-REFUELING-CARDS-DATA':
      return {
        ...state,
        refuelingCards: action.payload.refuelingCards,
      }
    case 'extendedInfo/SET-NOT-IN-DEMAND-DATA':
      return {
        ...state,
        notInDemand: action.payload.notInDemand,
      }
    case 'extendedInfo/SET-CONSERVATION-DATA':
      return {
        ...state,
        conservation: action.payload.conservationData,
      }
    case 'extendedInfo/SET-PASSES-DATA':
      return {
        ...state,
        passes: action.payload.passes,
      }
    case 'extendedInfo/SET-DRIVING-HOLDING':
      return {
        ...state,
        driverHolding: action.payload.drivers,
      }
    case 'extendedInfo/SET-CAR-EQUIPMENT':
      return {
        ...state,
        carEquipment: action.payload.equipment,
      }
    default:
      return state
  }
}

//======THUNKS======

export const getEquipmentsListTC = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await extendedInfoApi.getListOfEquipments()
    dispatch(setEquipmentsListAC(res.data))
    dispatch(setActiveEquipmentAC(res.data[0]))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const getRelatedDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getRelatedData(id)
      dispatch(setRelatedDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getTechnicalCharacteristicDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getTechnicalCharacteristicData(id)
      dispatch(setTechnicalCharacteristicDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getDocumentationDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getDocumentationsData(id)
      dispatch(setDocumentationDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getTimingControlDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getTimingControlData(id)
      dispatch(setTimingControlDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getRefuelingCardsDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getRefuelingCardsData(id)
      dispatch(setRefuelingCardsDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getNotInDemandDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getNotInDemandAdditionalInfo(id)
      dispatch(setNotInDemandDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getConservationDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getConservationAdditionalInfo(id)
      dispatch(setConservationDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getPassesDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getPassesData(id)
      dispatch(setPassesDataAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getDriverHoldingDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getDriverHoldingData(id)
      dispatch(setDriverHoldingAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const getCarEquipmentDataTC =
  (id: number): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await extendedInfoApi.getCarsEquipments(id)
      dispatch(setCarEquipmentAC(res.data))
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

//======ACTIONS======

export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'extendedInfo/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'extendedInfo/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const setEquipmentsListAC = (data: ListOFEquipmentsType[]) =>
  ({
    type: 'extendedInfo/SET-EQUIPMENTS-LIST',
    payload: { data },
  }) as const

export const setActiveEquipmentAC = (equipment: ListOFEquipmentsType) =>
  ({
    type: 'extendedInfo/SET-ACTIVE-EQUIPMENT',
    payload: { equipment },
  }) as const

export const setRelatedDataAC = (relatedData: RelatedDataType) =>
  ({
    type: 'extendedInfo/SET-RELATED-DATA',
    payload: { relatedData },
  }) as const

export const setTechnicalCharacteristicDataAC = (
  technicalData: TechnicalCharacteristicType,
) =>
  ({
    type: 'extendedInfo/SET-TECHNICAL-CHARACTERISTIC-DATA',
    payload: { technicalData },
  }) as const

export const setDocumentationDataAC = (documentation: DocumentationDataType) =>
  ({
    type: 'extendedInfo/SET-DOCUMENTATION-DATA',
    payload: { documentation },
  }) as const

export const setTimingControlDataAC = (timingData: TimingControlDataType[]) =>
  ({
    type: 'extendedInfo/SET-TIMING-CONTROL-DATA',
    payload: { timingData },
  }) as const

export const setRefuelingCardsDataAC = (
  refuelingCards: RefuelingCardsDataType[],
) =>
  ({
    type: 'extendedInfo/SET-REFUELING-CARDS-DATA',
    payload: { refuelingCards },
  }) as const

export const setNotInDemandDataAC = (notInDemand: NotInDemandTypeData[]) =>
  ({
    type: 'extendedInfo/SET-NOT-IN-DEMAND-DATA',
    payload: { notInDemand },
  }) as const

export const setConservationDataAC = (
  conservationData: ConservationDataType[],
) =>
  ({
    type: 'extendedInfo/SET-CONSERVATION-DATA',
    payload: { conservationData },
  }) as const

export const setPassesDataAC = (passes: PassesDataType[]) =>
  ({
    type: 'extendedInfo/SET-PASSES-DATA',
    payload: { passes },
  }) as const

export const setDriverHoldingAC = (drivers: DriverHoldingDataType[]) =>
  ({
    type: 'extendedInfo/SET-DRIVING-HOLDING',
    payload: { drivers },
  }) as const

export const setCarEquipmentAC = (equipment: CarEquipmentData[]) =>
  ({
    type: 'extendedInfo/SET-CAR-EQUIPMENT',
    payload: { equipment },
  }) as const

//======SELECTORS=====

export const getEquipmentsList = (state: AppRootStateType) =>
  state.extendedInfo.equipments

export const getRelatedData = (state: AppRootStateType) =>
  state.extendedInfo.relatedData

export const getTechnicalCharacteristicData = (state: AppRootStateType) =>
  state.extendedInfo.technicalCharacteristic

export const getDocumentationData = (state: AppRootStateType) =>
  state.extendedInfo.documentations

export const getTimingControlData = (state: AppRootStateType) =>
  state.extendedInfo.timingControl

export const getRefuelingCardsData = (state: AppRootStateType) =>
  state.extendedInfo.refuelingCards

export const getNotInDemandData = (state: AppRootStateType) =>
  state.extendedInfo.notInDemand

export const getConservationData = (state: AppRootStateType) =>
  state.extendedInfo.conservation

export const getPassesData = (state: AppRootStateType) =>
  state.extendedInfo.passes

export const getDriverHolding = (state: AppRootStateType) =>
  state.extendedInfo.driverHolding

export const getCarEquipment = (state: AppRootStateType) =>
  state.extendedInfo.carEquipment

export const getActiveEquipmentID = (state: AppRootStateType) =>
  state.extendedInfo.activeEquipment.RAZN_OD_KEY

//======TYPES======

type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  equipments: ListOFEquipmentsType[]
  activeEquipment: ListOFEquipmentsType
  relatedData: RelatedDataType
  technicalCharacteristic: TechnicalCharacteristicType
  documentations: DocumentationDataType
  timingControl: TimingControlDataType[]
  refuelingCards: RefuelingCardsDataType[]
  notInDemand: NotInDemandTypeData[]
  conservation: ConservationDataType[]
  passes: PassesDataType[]
  driverHolding: DriverHoldingDataType[]
  carEquipment: CarEquipmentData[]
}

export type ExtendedInfoActionType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setEquipmentsListAC>
  | ReturnType<typeof setActiveEquipmentAC>
  | ReturnType<typeof setRelatedDataAC>
  | ReturnType<typeof setTechnicalCharacteristicDataAC>
  | ReturnType<typeof setDocumentationDataAC>
  | ReturnType<typeof setTimingControlDataAC>
  | ReturnType<typeof setRefuelingCardsDataAC>
  | ReturnType<typeof setNotInDemandDataAC>
  | ReturnType<typeof setConservationDataAC>
  | ReturnType<typeof setPassesDataAC>
  | ReturnType<typeof setDriverHoldingAC>
  | ReturnType<typeof setCarEquipmentAC>
