import { StaffFormData } from './../components/CreateStaffForm/CreateStaffForm'

import {
  staffApi,
  type RefuelCardType,
  type StaffAdditionalInformationType,
  type StaffType,
} from '../api/api'

import { AppThunkType, AppRootStateType } from 'src/app/model/store'

import { TableCellData } from 'src/common/ui/editableTableCell/EditableTableCell'

const initialState: InitialState = {
  isLoading: false,
  errorMessage: '',
  staffList: [],
  activeStaff: {} as StaffType,
  additionalInformation: {} as StaffAdditionalInformationType,
  refuelingCard: {} as RefuelCardType,
}

export const staffReducer = (
  state: InitialState = initialState,
  action: StaffActionsType,
): InitialState => {
  switch (action.type) {
    case 'staff/ADD-STAFF':
      return {
        ...state,
        staffList: [action.payload.staff, ...state.staffList],
      }
    case 'staff/CHANGE-STAFF':
      return {
        ...state,
        staffList: state.staffList.map((staff) =>
          staff.FIO_ID === action.payload.FIO_ID ? action.payload : staff,
        ),
      }
    case 'staff/DELETE-STAFF':
      return {
        ...state,
        staffList: state.staffList.filter(
          (staff) => staff.FIO_ID !== action.payload.staffId,
        ),
      }
    case 'staff/SET-ACTIVE-STAFF':
      return {
        ...state,
        activeStaff: action.payload.staff,
      }
    case 'staff/SET-ADDITIONAL-INFORMATION':
      return {
        ...state,
        additionalInformation: action.payload.data,
      }
    case 'staff/SET-REFUELING-CARD':
      return {
        ...state,
        refuelingCard: action.payload.card,
      }
    case 'staff/SET-STAFF-LIST':
      return {
        ...state,
        staffList: action.payload.staffList,
      }
    case 'staff/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'staff/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    default:
      return state
  }
}

//==== ACTIONS =====
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'staff/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'staff/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const setStaffListAC = (staffList: StaffType[]) =>
  ({
    type: 'staff/SET-STAFF-LIST',
    payload: { staffList },
  }) as const

export const changeStaffAC = (data: StaffType) =>
  ({
    type: 'staff/CHANGE-STAFF',
    payload: data,
  }) as const

export const addStaffAC = (staff: StaffType) =>
  ({
    type: 'staff/ADD-STAFF',
    payload: { staff },
  }) as const

export const deleteStaffAC = (staffId: number) =>
  ({
    type: 'staff/DELETE-STAFF',
    payload: { staffId },
  }) as const

export const setActiveStaffAC = (staff: StaffType) =>
  ({
    type: 'staff/SET-ACTIVE-STAFF',
    payload: { staff },
  }) as const

export const setRefuelingCardAC = (card: RefuelCardType) =>
  ({
    type: 'staff/SET-REFUELING-CARD',
    payload: { card },
  }) as const

export const setAdditionalInformationAC = (
  data: StaffAdditionalInformationType,
) =>
  ({
    type: 'staff/SET-ADDITIONAL-INFORMATION',
    payload: { data },
  }) as const

//====== THUNKS ======

export const fetchStaffListThunk = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await staffApi.fetchStaffInfo()
    dispatch(setStaffListAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

export const changeStaffDataThunk =
  (data: TableCellData): AppThunkType =>
  async (dispatch, getState: () => AppRootStateType) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      // Заменить на запрос к серверу
      const staff = getState().staff.staffList.find(
        (item) => item.FIO_ID === data.itemId,
      )
      if (staff) {
        const newStaff = { ...staff, [data.name]: data.value }
        dispatch(changeStaffAC(newStaff))
      }
    } catch (e) {
      dispatch(setErrorMessageAC((e as Error).message))
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }

export const createStaffThunk =
  (data: StaffFormData): AppThunkType =>
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      // Заменить на запрос к серверу
      const staffId = Date.now()

      const staff: StaffType = {
        FIO_KEY: 0,
        FIO: data.FIO,
        AUTO_ID: 0,
        ORG_ID: 0,
        MAM: 'string',
        ARHIV: true,
        USE_OF_RAZN: true,
        FULL_FIO: data.FULL_FIO,
        EKIPAG: false,
        N_IN_EGIPAG: 0,
        SETUP_ID: 0,
        KEY_ID: 0,
        FROM_1C_ID: 'string',
        FIO_EXT_KEY: 0,
        FIO_ID: staffId,
        UDOST: 'string',
        DATE_UDOST: '2023-09-13T20:35:16.401Z',
        KLASS: 'string',
        KAT_A: true,
        KAT_A1: true,
        KAT_B: true,
        KAT_BE: true,
        KAT_B1: true,
        KAT_C: true,
        KAT_C1: true,
        KAT_C1E: true,
        KAT_CE: true,
        KAT_D: true,
        KAT_D1: true,
        KAT_D1E: true,
        KAT_DE: true,
        KAT_E: true,
        KAT_TM: true,
        KAT_TB: true,
        TAB_NO: null,
        TEL: 'string',
        DATE_SPRAV: '2023-09-13T20:35:16.401Z',
        KAT_S_AI: true,
        KAT_S_AII: true,
        KAT_S_AIII: true,
        KAT_S_AIV: true,
        KAT_S_B: true,
        KAT_S_C: true,
        KAT_S_D: true,
        KAT_S_E: true,
        KAT_S_F: true,
        DATE_UDOST_SPEC: '2023-09-13T20:35:16.401Z',
        UDOST_SPEC: 'string',
        SCAN_CODE: 'string',
        PRIM: 'string',
        KARTA_TAHO: 'string',
        DATE_KARTA_TAHO: '2023-09-13T20:35:16.401Z',
        TIP_VODIT: 0,
        TIP_DISPET: 0,
        TIP_VRACH: 0,
        TIP_REMONT: 0,
        TIP_CONTROL: 0,
        TIP_KONDUKTOR: 0,
        TIP_NACH_A_K: 0,
        N_CARD_TAHOGRAF: 'string',
        DATE_CARD_TAHOGRAF: '2023-09-13T20:35:16.401Z',
        ZP_FROM_1C_GROUP_ID: 0,
        M_AM: 'string',
        NAVTO: 'string',
        ORG: 'string',
        PREDUPR: 0,
        DOPOK_DATE: '2023-09-13T20:35:16.401Z',
        K_VOD_DATE: '2023-09-13T20:35:16.401Z',
        INFO: 'string',
        STAGIROVKA_PERIOD: 'string',
      }

      dispatch(addStaffAC(staff))
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
  staffList: StaffType[]
  activeStaff: StaffType
  refuelingCard: RefuelCardType
  additionalInformation: StaffAdditionalInformationType
}

export type StaffActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setActiveStaffAC>
  | ReturnType<typeof changeStaffAC>
  | ReturnType<typeof addStaffAC>
  | ReturnType<typeof deleteStaffAC>
  | ReturnType<typeof setStaffListAC>
  | ReturnType<typeof setAdditionalInformationAC>
  | ReturnType<typeof setRefuelingCardAC>
