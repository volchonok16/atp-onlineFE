import { ReactElement, useEffect, useRef } from 'react'

import { createPortal } from 'react-dom'

import { useNavigate } from 'react-router-dom'

import css from './modalMenuStyle.module.scss'

import { isLoggedInAC } from '../../../../features/auth/model/authReducer'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { AUTH, PERSONAL_ACCOUNT } from '../../../../routes/paths'

type ModalMenuPropsType = {
  closeModal: VoidFunction
}

export const ModalMenu = ({ closeModal }: ModalMenuPropsType): ReactElement => {
  const navigate = useNavigate()
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(isLoggedInAC(false))
    sessionStorage.removeItem('token')
    navigate(AUTH)
  }
  const goToPersonalAccount = () => navigate(PERSONAL_ACCOUNT)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as HTMLDivElement)
      ) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return createPortal(
    <div className={css.modal_container} ref={modalRef}>
      <span className={css.text} onClick={goToPersonalAccount}>
        Мой аккаунт
      </span>
      <span className={css.text} onClick={logoutHandler}>
        Выйти из системы
      </span>
    </div>,
    document.getElementById('modal-menu-root') as HTMLElement,
  )
}
