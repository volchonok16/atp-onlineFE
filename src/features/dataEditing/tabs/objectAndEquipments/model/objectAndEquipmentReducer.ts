// import { AppRootStateType, AppThunkType } from '../../../../../app/model/store'

// import {
//   type DocumentForEquipmentType,
//   // objectAndEquipmentsApi,
//   type ObjectAndEquipmentType,
// } from '../api/api'

// const initialState: InitialStateType = {
//   isLoading: false,
//   errorMessage: '',
//   objectAndEquipment: [],
//   documentsForEquipment: [],
//   activeEquipments: {} as ObjectAndEquipmentType,
// }

// export const equipmentsReducer = (
//   state: InitialStateType = initialState,
//   action: ObjectAndEquipmentsActionsType,
// ): InitialStateType => {
//   switch (action.type) {
//     case 'equipments/TOGGLE-IS-LOADING':
//       return {
//         ...state,
//         isLoading: action.payload.isLoading,
//       }
//     case 'equipments/SET-ERROR-MESSAGE':
//       return {
//         ...state,
//         errorMessage: action.payload.errorMessage,
//       }
// case 'equipments/GET-OBJECT-AND-EQUIPMENTS-DATA':
//   return {
//     ...state,
//     objectAndEquipment: action.payload.equipments,
//   }
// case 'equipments/SET-ACTIVE-EQUIPMENT':
//   return {
//     ...state,
//     activeEquipments: action.payload.equipment,
//   }
// case 'equipments/GET-DOCUMENTS':
//   return {
//     ...state,
//     documentsForEquipment: action.payload.documents,
//   }
//     case 'equipments/DELETE-ACTIVE-EQUIPMENT':
//       return {
//         ...state,
//         objectAndEquipment: state.objectAndEquipment.filter(
//           (el) => el.SKLAD_OBJ_SPIS_KEY !== action.payload.id,
//         ),
//       }
//     default:
//       return state
//   }
// }

//======THUNKS======

// export const getObjectAndEquipmentsData =
//   (): AppThunkType => async (dispatch) => {
//     dispatch(toggleIsLoadingAC(true))
//     try {
//       const res = await objectAndEquipmentsApi.getObjectAndEquipmentsData()
//       dispatch(getObjectAndEquipmentsAC(res.data))
//     } catch (e) {
//       dispatch(setErrorMessageAC((e as Error).message))
//     } finally {
//       dispatch(toggleIsLoadingAC(false))
//     }
//   }

// export const getDocumentsForEquipmentsData =
//   (id: number): AppThunkType =>
//   async (dispatch) => {
//     dispatch(toggleIsLoadingAC(true))
//     try {
//       const res = await objectAndEquipmentsApi.getDocumentsForEquipment(id)
//       dispatch(getDocumentsForEquipmentsAC(res.data))
//     } catch (e) {
//       dispatch(setErrorMessageAC((e as Error).message))
//     } finally {
//       dispatch(toggleIsLoadingAC(false))
//     }
//   }

//======ACTIONS======
// export const toggleIsLoadingAC = (isLoading: boolean) =>
//   ({
//     type: 'equipments/TOGGLE-IS-LOADING',
//     payload: { isLoading },
//   }) as const

// export const setErrorMessageAC = (errorMessage: string) =>
//   ({
//     type: 'equipments/SET-ERROR-MESSAGE',
//     payload: { errorMessage },
//   }) as const

// export const getObjectAndEquipmentsAC = (
//   equipments: ObjectAndEquipmentType[],
// ) =>
//   ({
//     type: 'equipments/GET-OBJECT-AND-EQUIPMENTS-DATA',
//     payload: { equipments },
//   }) as const

// export const setActiveEquipmentAC = (equipment: ObjectAndEquipmentType) =>
//   ({
//     type: 'equipments/SET-ACTIVE-EQUIPMENT',
//     payload: { equipment },
//   }) as const

// export const getDocumentsForEquipmentsAC = (
//   documents: DocumentForEquipmentType[],
// ) =>
//   ({
//     type: 'equipments/GET-DOCUMENTS',
//     payload: { documents },
//   }) as const

// export const deleteActiveEquipmentAC = (id: number) =>
//   ({
//     type: 'equipments/DELETE-ACTIVE-EQUIPMENT',
//     payload: { id },
//   }) as const
//======SELECTORS=====

// export const getObjectAndEquipments = (state: AppRootStateType) =>
//   state.equipments.objectAndEquipment

// export const getDocuments = (state: AppRootStateType) =>
//   state.equipments.documentsForEquipment

// export const getStartDate = (state: AppRootStateType) =>
//   state.equipments.activeEquipments.DATE_VVODA

// export const getDescription = (state: AppRootStateType) =>
//   state.equipments.activeEquipments.DESCR
// export const activeEquipments = (state: AppRootStateType) =>
//   state.equipments.activeEquipments
//======TYPES======
// type InitialStateType = {
//   isLoading: boolean
//   errorMessage: string
//   objectAndEquipment: ObjectAndEquipmentType[]
//   documentsForEquipment: DocumentForEquipmentType[]
//   activeEquipments: ObjectAndEquipmentType
// }

// export type ObjectAndEquipmentsActionsType =
//   | ReturnType<typeof toggleIsLoadingAC>
//   | ReturnType<typeof setErrorMessageAC>
//   // | ReturnType<typeof getObjectAndEquipmentsAC>
//   // | ReturnType<typeof getDocumentsForEquipmentsAC>
//   // | ReturnType<typeof setActiveEquipmentAC>
//   | ReturnType<typeof deleteActiveEquipmentAC>
