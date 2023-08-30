import css from './companies.module.scss'

import { AdditionalInfo } from './components/additionalInfo/AdditionalInfo'
import { CompanyList } from './components/companyList/CompanyList'

export const Companies = () => {
  return (
    <div className={css.companies}>
      <CompanyList />
      <AdditionalInfo />
    </div>
  )
}
