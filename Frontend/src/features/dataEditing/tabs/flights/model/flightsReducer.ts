import { AppRootStateType, AppThunkType } from '../../../../../app/model/store'
import { type FlightsType, flightsApi } from '../api/api'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  flights: [],
}

export const flightsReducer = (
  state: InitialStateType = initialState,
  action: FlightsActionType,
): InitialStateType => {
  switch (action.type) {
    case 'flights/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'flights/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'flights/GET-FLIGHTS-DATA':
      return {
        ...state,
        flights: action.payload.flights,
      }
    default:
      return state
  }
}

//======THUNKS======

export const getFlightsData = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await flightsApi.getFlightsData()
    dispatch(getFlightsDataAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

//======ACTIONS======
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'flights/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'flights/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const getFlightsDataAC = (flights: FlightsType[]) =>
  ({
    type: 'flights/GET-FLIGHTS-DATA',
    payload: { flights },
  }) as const

//======SELECTORS======

export const getFlights = (state: AppRootStateType) => state.flights.flights

//======TYPES======
type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  flights: FlightsType[]
}

export type FlightsActionType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof getFlightsDataAC>
