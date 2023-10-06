import { AppRootStateType, AppThunkType } from '../../../../../app/model/store'
import { type FlightsType, flightsApi } from '../api/api'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  flights: [],
  flight: {} as FlightsType,
  activeFlightId: 0,
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
    case 'flights/DELETE-FLIGHTS-DATA':
      return {
        ...state,
        flights: state.flights.filter(
          (el) => el.PL_ROUTE_KEY !== action.payload.idFlight,
        ),
      }
    case 'flights/SET-ACTIVE-FLIGHT':
      return {
        ...state,
        flight: action.payload.flight,
      }
    case 'flights/SET-ACTIVE-FLIGHT-ID':
      return {
        ...state,
        activeFlightId: action.payload.id,
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

export const deleteFlightDataAC = (idFlight: number) =>
  ({
    type: 'flights/DELETE-FLIGHTS-DATA',
    payload: { idFlight },
  }) as const

export const setActiveFlightDataAC = (flight: FlightsType) =>
  ({
    type: 'flights/SET-ACTIVE-FLIGHT',
    payload: { flight },
  }) as const
export const setActiveFlightIdAC = (id: number) =>
  ({
    type: 'flights/SET-ACTIVE-FLIGHT-ID',
    payload: { id },
  }) as const
//======SELECTORS======

export const getFlights = (state: AppRootStateType) => state.flights.flights
export const activeFlight = (state: AppRootStateType) => state.flights.flight
export const activeFlightId = (state: AppRootStateType) =>
  state.flights.activeFlightId

//======TYPES======
type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  flights: FlightsType[]
  flight: FlightsType
  activeFlightId: number
}

export type FlightsActionType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof getFlightsDataAC>
  | ReturnType<typeof deleteFlightDataAC>
  | ReturnType<typeof setActiveFlightDataAC>
  | ReturnType<typeof setActiveFlightIdAC>
