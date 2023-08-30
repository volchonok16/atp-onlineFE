import { useEffect, useState } from 'react'

import { NotesTable } from './notesTable/NotesTable'
import css from './standardNores.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import {
  ActionTitleType,
  ConfirmAction,
} from '../../../../common/modals/confirmAction/ConfirmAction'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getNotesTC } from '../../../../redux/catalogs/directoriesReducer'

export const StandardNotes: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [actionTitle, setActionTitle] = useState<ActionTitleType>('сохранить')
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: ActionTitleType | undefined) => {
    if (actionTitle) {
      setActionTitle(actionTitle)
      openModal()
    }
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNotesTC())
  }, [])

  return (
    <section className={css.standardNotes__wrapper}>
      <NotesTable />

      <div className={css.standardNotes__searchBlock_wrapper}>
        <div className={css.standardNotes__searchBlock}>
          <TextInput placeholder="Поиск по примечаниям" />
        </div>

        <FuncButton title="Очистить" />
      </div>

      <div className={css.standardNotes__buttons_wrapper}>
        <IconButton typeOfIcon="Добавить" />
        <IconButton
          typeOfIcon="Удалить"
          actionTitle="удалить"
          onClickHandler={actionTitleHandler}
        />
        <IconButton typeOfIcon="Сохранить" />
        <IconButton typeOfIcon="Отменить" />
      </div>

      {isOpen && (
        <ConfirmAction
          actionTitle={actionTitle}
          onClose={closeModal}
          onAction={showAction}
        />
      )}
    </section>
  )
}
