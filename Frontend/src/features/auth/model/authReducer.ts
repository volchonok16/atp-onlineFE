import { redirect } from 'react-router-dom'

import { AppThunkType } from '../../../app/model/store'
import { type LoginDataType, authApi } from '../api/api'

const initialState: InitialAuthStateType = {
  isLoggedIn: false,
  isAuthError: false,
}

export const authReducer = (
  state: InitialAuthStateType = initialState,
  action: AuthActionsType,
): InitialAuthStateType => {
  switch (action.type) {
    case 'auth/IS-LOGGED-IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      }
    case 'auth/IS-AUTH-ERROR':
      return {
        ...state,
        isAuthError: action.isAuthError,
      }
    default:
      return state
  }
}

//=====ACTIONS======
export const isLoggedInAC = (isLoggedIn: boolean) =>
  ({
    type: 'auth/IS-LOGGED-IN',
    isLoggedIn,
  }) as const
export const isAuthErrorAC = (isAuthError: boolean) =>
  ({
    type: 'auth/IS-AUTH-ERROR',
    isAuthError,
  }) as const

//=====THUNKS======
export const signInThunk =
  (formData: LoginDataType): AppThunkType =>
  async (dispatch) => {
    try {
      const res = await authApi.login(formData)
      if (res.status === 200) {
        dispatch(isLoggedInAC(true))
        redirect('/order')
      } else {
        dispatch(isLoggedInAC(false))
      }
    } catch (e) {
      dispatch(isAuthErrorAC(true))
    }
  }

//=====TYPES======
export type AuthActionsType =
  | ReturnType<typeof isAuthErrorAC>
  | ReturnType<typeof isLoggedInAC>

type InitialAuthStateType = {
  isLoggedIn: boolean
  isAuthError: boolean
}
