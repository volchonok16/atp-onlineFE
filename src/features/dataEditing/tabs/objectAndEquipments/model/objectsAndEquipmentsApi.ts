import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ObjectAndEquipmentType } from 'src/features/dataEditing/tabs/objectAndEquipments/model/apiTypes'
// import { getItem } from 'common/hooks/useLocalStorage'

// import {

// } from './apiTypes'

export const objectsAndEquipmentsApi = createApi({
  reducerPath: 'objectsAndEquipmentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://adjnatec.ru:4001/api',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // registration: builder.mutation<unknown, RegistrationType>({
    //   query: (body) => ({
    //     url: 'auth/registration',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    // login: builder.mutation<LoginResponseType, LoginType>({
    //   query: (body) => ({
    //     url: 'auth/login',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    // loginWithGoogle: builder.mutation<LoginResponseType, { code: string }>({
    //   query: (body) => ({
    //     url: 'auth/google',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    // loginWithGithub: builder.mutation<LoginResponseType, { code: string }>({
    //   query: (body) => ({
    //     url: 'auth/github',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    // sendRecoveryLink: builder.mutation<unknown, SendLinkType>({
    //   query: (body) => ({
    //     method: 'POST',
    //     url: `/auth/password-recovery`,
    //     body,
    //   }),
    // }),
    // newPassword: builder.mutation<NewPasswordResType, NewPasswordType>({
    //   query: (body) => {
    //     return {
    //       method: 'POST',
    //       url: `/auth/new-password`,
    //       body,
    //     }
    //   },
    // }),
    getObjectAndEquipmentsData: builder.query<ObjectAndEquipmentType[], void>({
      query: () => {
        return {
          method: 'GET',
          url: 'data-editing/other-equipment',
        }
      },
    }),
    // refreshLink: builder.mutation<unknown, RefreshLinkType>({
    //   query: (body) => {
    //     return {
    //       method: 'POST',
    //       url: `/auth/refresh-link`,
    //       body,
    //     }
    //   },
    // }),
    // me: builder.query<MeType, void>({
    //   query: () => {
    //     return {
    //       method: 'GET',
    //       url: `/auth/me`,
    //     }
    //   },
    // }),
    // logout: builder.mutation<void, void>({
    //   query: () => {
    //     return {
    //       method: 'POST',
    //       url: `/auth/logout`,
    //     }
    //   },
    // }),
  }),
})

export const { useGetObjectAndEquipmentsDataQuery } = objectsAndEquipmentsApi
