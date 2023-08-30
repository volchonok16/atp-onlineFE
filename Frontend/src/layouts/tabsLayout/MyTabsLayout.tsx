import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import css from './tabsLayout.module.scss'

import Reports from '../../components/reports/Reports'

import { TabsButtons } from '../../components/tabsButtons/MyTabsButtons'
import DataEditing from '../../features/dataEditing/DataEditing'
import InfoFromDriver from '../../features/infoFromDriver/InfoFromDriver'
import { useAppSelector } from '../../hooks/useAppSelector'

import GuidesLayout from '../guidesLayout/MyGuidesLayout'
import { TabOrderLayout } from '../tabOrderLayout/MyTabOrderLayout'

export const TabsLayout = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  const [buttonsState, setButtonsState] = useState([
    true,
    false,
    false,
    false,
    false,
  ])
  const handleButtonClick = (index: number) => {
    const newButtonsState = buttonsState.map((button, i) => index === i)
    setButtonsState(newButtonsState)
  }

  if (!isLoggedIn) {
    return <Navigate to={'auth'} />
  }

  return (
    <section className={css.tabsLayout__wrapper}>
      <TabsButtons
        buttonsState={buttonsState}
        handleButtonClick={handleButtonClick}
      />
      {buttonsState[0] && <TabOrderLayout />}
      {buttonsState[1] && <DataEditing />}
      {buttonsState[2] && <GuidesLayout />}
      {buttonsState[3] && <Reports />}
      {buttonsState[4] && <InfoFromDriver />}
    </section>
  )
}
