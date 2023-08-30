import React from 'react'

import css from './ratingButton.module.scss'

import fromLargestIcon from '../../../assets/img/fromLargestIcon.svg'
import fromSmallestIcon from '../../../assets/img/fromSmallestIcon.svg'

type RatingButtonPropsType = {
  isFromLargest?: boolean
  isFromSmallest?: boolean
  onClickRating: () => void
  fromLarge: boolean
}

export const RatingButton: React.FC<RatingButtonPropsType> = ({
  isFromLargest,
  isFromSmallest,
  onClickRating,
  fromLarge,
}) => {
  return (
    <button
      className={
        isFromLargest || isFromSmallest
          ? `${css.button} ${css.button_active}`
          : css.button
      }
      onClick={onClickRating}
    >
      <img src={fromLarge ? fromLargestIcon : fromSmallestIcon} alt="rating" />
    </button>
  )
}
