import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import {
  AuthActionsType,
  authReducer,
} from '../../features/auth/model/authReducer'

import {
  CarsActionsType,
  carsReducer,
} from '../../features/dataEditing/tabs/carsData/model/carsReducer'
import {
  CompaniesActionsType,
  companiesReducer,
} from '../../features/dataEditing/tabs/companies/model/companiesReducer'

import {
  ContractorsActionsType,
  contractorsReducer,
} from '../../features/dataEditing/tabs/contractorOfficials/model/contractorOfficialReducer'
import {
  FlightsActionType,
  flightsReducer,
} from '../../features/dataEditing/tabs/flights/model/flightsReducer'
import {
  ObjectAndEquipmentsActionsType,
  equipmentsReducer,
} from '../../features/dataEditing/tabs/objectAndEquipments/model/objectAndEquipmentReducer'
import {
  StaffActionsType,
  staffReducer,
} from '../../features/dataEditing/tabs/staff/model/staffReducer'
import {
  DirectoriesActionsType,
  directoriesReducer,
} from '../../redux/catalogs/directoriesReducer'
import {
  ExtendedInfoActionType,
  extendedInfoReducer,
} from '../../redux/catalogs/extendedInfoReducer'
import {
  ListOfEquipmentsInfoActionsType,
  listOfEquipmentsInfoReducer,
} from '../../redux/catalogs/listOfEquipmentsReducer'
import { OrderActionsType, orderReducer } from '../../redux/orderReducer'

const RootReducer = combineReducers({
  auth: authReducer,
  cars: carsReducer,
  staff: staffReducer,
  flights: flightsReducer,
  equipments: equipmentsReducer,
  contractors: contractorsReducer,
  listOfEquipments: listOfEquipmentsInfoReducer,
  companies: companiesReducer,
  extendedInfo: extendedInfoReducer,
  directories: directoriesReducer,
  order: orderReducer,
})

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type AppRootStateType = ReturnType<typeof store.getState>

export type ActionsType =
  | AuthActionsType
  | CarsActionsType
  | StaffActionsType
  | CompaniesActionsType
  | FlightsActionType
  | ObjectAndEquipmentsActionsType
  | ContractorsActionsType
  | ListOfEquipmentsInfoActionsType
  | ExtendedInfoActionType
  | DirectoriesActionsType
  | OrderActionsType

export type AppDispatchType = ThunkDispatch<
  AppRootStateType,
  unknown,
  ActionsType
>

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  ActionsType
>
