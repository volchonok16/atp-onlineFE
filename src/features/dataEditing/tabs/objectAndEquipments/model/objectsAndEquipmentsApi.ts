import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  DocsType,
  DocumentForEquipmentType,
  ObjectAndEquipmentType,
  addEquipmentResType,
  addEquipmentType,
  updateEquipmentType,
} from 'src/features/dataEditing/tabs/objectAndEquipments/model/apiTypes'

export const objectsAndEquipmentsApi = createApi({
  reducerPath: 'objectsAndEquipmentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://adjnatec.ru:4001/api',
    credentials: 'include',
  }),
  tagTypes: ['getObjects', 'getDocuments'],

  endpoints: (builder) => ({
    // получить список оборудования
    getObjectAndEquipmentsData: builder.query<ObjectAndEquipmentType[], void>({
      query: () => {
        return {
          method: 'GET',
          url: 'data-editing/other-equipment',
        }
      },
      providesTags: ['getObjects'],
    }),
    // получить список документов для оборудования
    getDocumentsForEquipment: builder.query<DocumentForEquipmentType[], number>(
      {
        query: (id: number) => {
          return {
            method: 'GET',
            url: `data-editing/other-equipment/${id}`,
          }
        },
        providesTags: ['getDocuments'],
      },
    ),
    // добавить в список документ
    addDocument: builder.mutation<boolean, DocsType>({
      query: (body) => {
        return {
          method: 'POST',
          url: `data-editing/other-equipments/docs`,
          body,
        }
      },
      invalidatesTags: ['getDocuments'],
    }),
    // изменить имеющийся в списке документ
    updateDocument: builder.mutation<boolean, DocsType>({
      query: (body) => {
        return {
          method: 'PUT',
          url: `data-editing/other-equipments/docs`,
          body,
        }
      },
      invalidatesTags: ['getDocuments'],
    }),
    //удалить из списка документ
    deleteDocument: builder.mutation<boolean, number>({
      query: (OLD_RAZN_OD_DOCS_KEY: number) => {
        return {
          method: 'DELETE',
          url: `data-editing/other-equipments/docs/${OLD_RAZN_OD_DOCS_KEY}`,
        }
      },
      invalidatesTags: ['getDocuments'],
    }),
    // добавить в список новое оборудование
    addEquipment: builder.mutation<addEquipmentResType, addEquipmentType>({
      query: (body) => {
        return {
          method: 'POST',
          url: `data-editing/other-equipments/objects-equipments`,
          body,
        }
      },
      invalidatesTags: ['getObjects'],
    }),
    // изменить имеющиееся в списке оборудование
    updateEquipment: builder.mutation<boolean, updateEquipmentType>({
      query: ({ SKLAD_OBJ_SPIS_KEY, body }) => {
        return {
          method: 'PUT',
          url: `data-editing/other-equipments/objects-equipments/${SKLAD_OBJ_SPIS_KEY}`,
          body,
        }
      },
      invalidatesTags: ['getObjects'],
    }),
    // удалить из списка документ
    deleteEquipment: builder.mutation<boolean, number>({
      query: (SKLAD_OBJ_SPIS_KEY: number) => {
        return {
          method: 'DELETE',
          url: `data-editing/other-equipments/objects-equipments/${SKLAD_OBJ_SPIS_KEY}`,
        }
      },
      invalidatesTags: ['getObjects'],
    }),
  }),
})

export const {
  useGetObjectAndEquipmentsDataQuery,
  useGetDocumentsForEquipmentQuery,
  useAddDocumentMutation,
  useUpdateDocumentMutation,
  useDeleteEquipmentMutation,
} = objectsAndEquipmentsApi
