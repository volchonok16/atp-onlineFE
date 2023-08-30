import { FC } from 'react'

import { Head } from './Head'
import { Row } from './Row'
import css from './table.module.scss'

import { useAppDispatch } from '../../../../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../../hooks/useAppSelector'
import { CompanyListItemType } from '../../../api/api'
import { setActiveCompanyIdAC } from '../../../model/companiesReducer'

type PropsType = {
  companyList: CompanyListItemType[]
}

export const Table: FC<PropsType> = ({ companyList }) => {
  const dispatch = useAppDispatch()
  const activeCompanyId = useAppSelector(
    (state) => state.companies.activeCompanyId,
  )
  const activeRowHandler = (id: number) => {
    dispatch(setActiveCompanyIdAC(id))
  }

  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <Head />
        <tbody>
          {companyList.map((company) => (
            <Row
              key={company.DATA_KEY}
              data={company}
              isActive={company.DATA_KEY === activeCompanyId}
              isActiveHandler={activeRowHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
