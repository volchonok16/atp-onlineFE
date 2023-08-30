import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from './errorPage/ErrorPage'
import {
  AUTH,
  DATA_EDITING,
  DATA_PREPARATION_TAB,
  DIRECTION_FOR_REPAIR_TAB,
  GUIDES,
  INFO_FROM_DRIVER,
  MAIN_PAGE,
  ORDERS,
  ORDER_TAB,
  OUTPUT_INFO_TAB,
  PURCHASES_TAB,
  REPORTS,
  SHIPPING_DOCUMENT_TAB,
} from './paths'

import { App } from '../app/MyApp'

import { AuthLayout } from '../features/auth/Auth'
import { OrderData } from '../features/order/tabs/addData/OrderData'
import { DataForShippingDocs } from '../features/order/tabs/dataForShippingDocs/MyDataForShippingDocs'
import { DirectionForRepair } from '../features/order/tabs/directionForRepair/MyDirectionForRepair'
import { OutputInfo } from '../features/order/tabs/outputInfo/MyOutputInfo'
import { PreparationData } from '../features/order/tabs/preparationData/PreparationData'
import { ShippingDocument } from '../features/order/tabs/shippingDocument/MyShippingDocument'

const InfoFromDriver = lazy(
  () => import('../features/infoFromDriver/InfoFromDriver'),
)
const DataEditing = lazy(() => import('../features/dataEditing/DataEditing'))
const Reports = lazy(() => import('../components/reports/Reports'))
const Order = lazy(() => import('../features/order/Order'))
const GuidesLayout = lazy(
  () => import('../layouts/guidesLayout/MyGuidesLayout'),
)

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: ORDERS,
        Component: Order,
        children: [
          { path: DATA_PREPARATION_TAB, Component: PreparationData },
          { path: ORDER_TAB, Component: OrderData },
          { path: SHIPPING_DOCUMENT_TAB, Component: ShippingDocument },
          { path: OUTPUT_INFO_TAB, Component: OutputInfo },
          { path: DIRECTION_FOR_REPAIR_TAB, Component: DirectionForRepair },
          { path: PURCHASES_TAB, Component: DataForShippingDocs },
        ],
      },
      {
        path: DATA_EDITING,
        Component: DataEditing,
      },
      {
        path: GUIDES,
        Component: GuidesLayout,
      },
      {
        path: REPORTS,
        Component: Reports,
      },
      {
        path: INFO_FROM_DRIVER,
        Component: InfoFromDriver,
      },
    ],
  },
  {
    path: AUTH,
    Component: AuthLayout,
  },
])
