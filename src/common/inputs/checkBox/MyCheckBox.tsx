import React, { useState } from 'react'

import css from './checkBox.module.scss'

import checkIcon from '../../../assets/img/checkIcon.svg'

export const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div className={css.checkBox} onClick={() => setIsChecked(!isChecked)}>
      {isChecked && <img src={checkIcon} />}
    </div>
  )
}
