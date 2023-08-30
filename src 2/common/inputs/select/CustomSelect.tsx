import { FC, useState } from 'react'

import css from './customSelect.module.scss'

import arrowDown from '../../../assets/img/arrowDownIcon.svg'
import arrowUp from '../../../assets/img/arrowUpIcon.svg'

type Props = {
  options: string[]
  onChange: (value: string) => void
  value?: string
}

export const CustomSelect: FC<Props> = ({ options, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    value || options[0],
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isOpenHandler = () => {
    setIsOpen(!isOpen)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedValueHandler = (e: any) => {
    const value = e.target.dataset.value
    setSelectedValue(value)
    onChange(value)
  }

  const imgSrc = isOpen ? arrowUp : arrowDown
  const imgClassName = isOpen ? css.activeArrow : ''

  const ulClassName = isOpen ? css.options : css.hidden

  const optionList = options.map((opt, i) => {
    const liClassName = selectedValue === opt ? css.active : ''
    return (
      <li key={i} data-value={opt} className={liClassName}>
        {opt}
      </li>
    )
  })

  return (
    <div className={css.select} onClick={isOpenHandler}>
      <input type="text" value={selectedValue} readOnly />
      <img src={imgSrc} alt="arrow" className={imgClassName} />
      <ul className={ulClassName} onClick={selectedValueHandler}>
        {optionList}
      </ul>
    </div>
  )
}
