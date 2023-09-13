import { AppThunkType } from '../../../../../app/model/store'

import {
  staffApi,
  type RefuelCardType,
  type StaffAdditionalInformationType,
  type StaffType,
} from '../api/api'

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
          staff.FIO_ID === action.payload.itemId
            ? {
                ...staff,
                [action.payload.name]:
                  action.payload.value || action.payload.checked,
              }
            : staff,
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

export const changeStaffAC = (data: TableCellData) =>
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
  async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      dispatch(changeStaffAC(data))
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
