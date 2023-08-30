import { FC } from 'react'

import css from './singleParamSearchModal.module.scss'

import inputArrowDownIcon from '../../../assets/img/inputArrowDownIcon.svg'
import { FuncButton } from '../../buttons/funcButton/MyFuncButton'
import { TextInput } from '../../inputs/textInput/MyTextInput'

type SingleParamSearchModalType = {
  dataForModal: { item: string; id: number }[]
  title: string
  setIsModalOpen?: () => void
}

export const SingleParamSearchModal: FC<SingleParamSearchModalType> = ({
  dataForModal,
  title,
  setIsModalOpen,
}) => {
  return (
    <section className={css.singleParamSearchModal__wrapper}>
      <div className={css.singleParamSearchModal__title}>
        {title}
        <img
          src={inputArrowDownIcon}
          alt="arrow down"
          className={css.singleParamSearchModal__title__img}
          onClick={setIsModalOpen}
        />
      </div>

      <div className={css.singleParamSearchModal__content}>
        <div className={css.singleParamSearchModal__items}>
          {dataForModal.map((el) => (
            <span className={css.singleParamSearchModal__item} key={el.id}>
              {el.item}
            </span>
          ))}
        </div>

        <div className={css.singleParamSearchModal__search_block}>
          <TextInput placeholder="Введите" />
          <FuncButton title="Поиск" />
        </div>
      </div>
    </section>
  )
}
