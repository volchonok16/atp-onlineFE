import { useState } from 'react'

import css from './employeeStyle.module.scss'

import { ModalMenu } from './modalMenu/ModalMenu'

export const Employee = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const menuHandler = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <div className={css.container} onClick={menuHandler}>
      <div className={css.avatar} />
      <div className={css.menuContainer}>
        <span className={css.nameSurname}>Мать драконов</span>
        {isShowMenu && <ModalMenu closeModal={menuHandler} />}
      </div>
    </div>
  )
}
