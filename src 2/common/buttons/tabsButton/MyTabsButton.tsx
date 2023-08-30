import { FC } from 'react'

import css from './tabsButton.module.scss'

type TabsButtonPropsType = {
  title: string
  onClickHandler?: () => void
  isActive?: boolean
  isForGuides?: boolean
}

export const TabsButton: FC<TabsButtonPropsType> = ({
  title,
  onClickHandler,
  isActive,
  isForGuides,
}) => {
  return (
    <button
      className={isActive ? `${css.button} ${css.button_active}` : css.button}
      onClick={onClickHandler}
      style={isForGuides ? { width: '100%' } : {}}
    >
      {title}
    </button>
  )
}
