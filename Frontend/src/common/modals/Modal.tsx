import { ReactElement, ReactNode } from 'react'

import { createPortal } from 'react-dom'

import css from './modalStyle.module.scss'

type TModal = {
  children: ReactNode
}

export const Modal = ({ children }: TModal): ReactElement => {
  return createPortal(
    <div>
      <div className={css.overlap} />
      <div className={css.modal_container}>
        <div className={css.header} />
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
