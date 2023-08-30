import { FC } from 'react'

import { Head } from './Head'
import css from './table.module.scss'

// type PropsType = {
//     subunitList: any
// }

export const Table: FC = () => {
  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <Head />
        <tbody>
          {/* {subunitList.map((unit) => <Row key={company.DATA_KEY} data={company} isActive={company.DATA_KEY === activeCompanyId} isActiveHandler={activeRowHandler} />)} */}
        </tbody>
      </table>
    </div>
  )
}
