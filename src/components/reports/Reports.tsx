import { ChatBlock } from './chatBlock/ChatBlock'
import { DriversBlock } from './driversBlock/DriversBlock'
import css from './reportsStyle.module.scss'
import { StatusBlock } from './statusBlock/StatusBlock'

const Reports = () => {
  return (
    <div className={css.container}>
      <DriversBlock />
      <StatusBlock />
      <ChatBlock />
    </div>
  )
}

export default Reports
