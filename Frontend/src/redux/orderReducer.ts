import { AppRootStateType, AppThunkType } from '../app/model/store'
import {
  orderApi,
  OrderByOrderType,
  OrderPreparingDataType,
  OrderPurchasesType,
} from '../features/order/orderApi'

const initialState: InitialStateType = {
  isLoading: false,
  errorMessage: '',
  orderInfo: [],
  orderPreparingData: [],
  orderByOrder: [],
}

export const orderReducer = (
  state: InitialStateType = initialState,
  action: OrderActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'order/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'order/SET-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'order/GET-ORDER':
      return {
        ...state,
        orderInfo: action.payload.order,
      }
    case 'order/GET-ORDER-PREPARING-DATA':
      return {
        ...state,
        orderPreparingData: action.payload.orderPreparingData,
      }
    case 'order/GET-ORDER-BY-ORDER':
      return {
        ...state,
        orderByOrder: action.payload.orderByOrder,
      }
    default:
      return state
  }
}
//======THUNKS======
export const fetchPreparingData = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await orderApi.fetchPreparingData('2022-08-10')
    dispatch(getPreparingDataAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}
export const fetchOrderByOrder = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await orderApi.fetchOrderByOrder('2022-08-10')
    dispatch(getOrderByOrderAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}
export const fetchOrderData = (): AppThunkType => async (dispatch) => {
  dispatch(toggleIsLoadingAC(true))
  try {
    const res = await orderApi.fetchOrderData('2022-08-10')
    dispatch(getOrderAC(res.data))
  } catch (e) {
    dispatch(setErrorMessageAC((e as Error).message))
  } finally {
    dispatch(toggleIsLoadingAC(false))
  }
}
//======ACTIONS======
export const toggleIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'order/TOGGLE-IS-LOADING',
    payload: { isLoading },
  }) as const

export const setErrorMessageAC = (errorMessage: string) =>
  ({
    type: 'order/SET-ERROR-MESSAGE',
    payload: { errorMessage },
  }) as const
export const getOrderByOrderAC = (orderByOrder: OrderByOrderType[]) =>
  ({
    type: 'order/GET-ORDER-BY-ORDER',
    payload: { orderByOrder },
  }) as const
export const getOrderAC = (order: OrderPurchasesType[]) =>
  ({
    type: 'order/GET-ORDER',
    payload: { order },
  }) as const
export const getPreparingDataAC = (
  orderPreparingData: OrderPreparingDataType[],
) =>
  ({
    type: 'order/GET-ORDER-PREPARING-DATA',
    payload: { orderPreparingData },
  }) as const

//======SELECTORS======

export const orderInfo = (state: AppRootStateType) => state.order.orderInfo
export const orderPreparingData = (state: AppRootStateType) =>
  state.order.orderPreparingData
export const orderByOrder = (state: AppRootStateType) =>
  state.order.orderByOrder
//======TYPES======
type InitialStateType = {
  isLoading: boolean
  errorMessage: string
  orderInfo: OrderPurchasesType[]
  orderPreparingData: OrderPreparingDataType[]
  orderByOrder: OrderByOrderType[]
}

export type OrderActionsType =
  | ReturnType<typeof toggleIsLoadingAC>
  | ReturnType<typeof setErrorMessageAC>
  | ReturnType<typeof getOrderAC>
  | ReturnType<typeof getPreparingDataAC>
  | ReturnType<typeof getOrderByOrderAC>
