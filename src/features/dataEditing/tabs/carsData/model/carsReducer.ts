import { AppThunkType } from '../../../../../app/model/store'

import { CarType, carsApi } from '../api/api'

const initialState: InitialState = {
  isLoading: false,
  errorMessage: '',
  cars: [],
  activeCar: {} as CarType,
}

export const carsReducer = (
  state: InitialState = initialState,
  action: CarsActionsType,
): InitialState => {
  switch (action.type) {
    case 'cars/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'cars/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'cars/SET-CARS':
      return {
        ...state,
        cars: action.payload.cars,
      }
    case 'cars/CHANGE-CAR': {
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.OD_KEY === action.payload.carId ? action.payload.car : car,
        ),
      }
    }
    case 'cars/ADD-CAR':
      return {
        ...state,
        cars: [action.payload.car, ...state.cars],
      }
    case 'cars/DELETE-CAR':
      return {
        ...state,
        cars: state.cars.filter((car) => car.OD_KEY !== action.payload.carId),
      }
    case 'cars/SET-ACTIVE-CAR':
      return {
        ...state,
        activeCar: action.payload.car,
      }
    default:
      return state
  }
}

//====ACTIONS=====
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'cars/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'cars/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const

export const setCarsAC = (cars: CarType[]) =>
  ({
    type: 'cars/SET-CARS',
    payload: { cars },
  }) as const

export const changeCarAC = (carId: number, car: CarType) =>
  ({
    type: 'cars/CHANGE-CAR',
    payload: { carId, car },
  }) as const

export const addCarAC = (car: CarType) =>
  ({
    type: 'cars/ADD-CAR',
    payload: { car },
  }) as const

export const deleteCarAC = (carId: number) =>
  ({
    type: 'cars/DELETE-CAR',
    payload: { carId },
  }) as const

export const setActiveCarAC = (car: CarType) =>
  ({
    type: 'cars/SET-ACTIVE-CAR',
    payload: { car },
  }) as const

//=====THUNKS=====

export const fetchCarsData = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await carsApi.fetchCarsData()
    dispatch(setCarsAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}

//======TYPES======
type InitialState = {
  isLoading: boolean
  errorMessage: string
  cars: CarType[]
  activeCar: CarType
}

export type CarsActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof setCarsAC>
  | ReturnType<typeof changeCarAC>
  | ReturnType<typeof addCarAC>
  | ReturnType<typeof deleteCarAC>
  | ReturnType<typeof setActiveCarAC>
