import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { objectsAndEquipmentsApi } from 'src/features/dataEditing/tabs/objectAndEquipments/model/objectsAndEquipmentsApi'

export const store = configureStore({
  reducer: {
    [objectsAndEquipmentsApi.reducerPath]: objectsAndEquipmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(objectsAndEquipmentsApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
