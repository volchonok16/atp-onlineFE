import { ChangeEvent, useState, KeyboardEvent, memo } from 'react'

import css from './editableTableCell.module.scss'

import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'
import { Modal } from 'src/common/modals/Modal'
import { StaffKeys } from 'src/features/dataEditing/tabs/staff/api/api'
import { useToggle } from 'src/hooks/useToggle'

export type TableCellData = {
  name: StaffKeys
  value?: string | null
  itemId: number
  checked?: boolean
}

type Props = {
  value?: string | null
  itemId: number
  name: StaffKeys
  checked?: boolean
  type?: 'text' | 'number' | 'checkbox'
  onChangeData: (data: TableCellData) => void
}

export const EditableTableCell = memo(function ({
  itemId,
  onChangeData,
  value,
  name,
  type = 'text',
  checked,
}: Props) {
  const [inputValue, setInputValue] = useState(value || '')
  const [inputChecked, setInputChecked] = useState<boolean | undefined>(checked)
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    setInputChecked(e.currentTarget.checked)
  }

  const onChangeValue = () => {
    onChangeData({
      itemId: itemId,
      name: name,
      value: inputValue,
      checked: inputChecked,
    })
  }

  const onPressEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      toggleOpen(true)
    }
  }

  const onBlur = () => {
    if (inputValue != value) {
      toggleOpen(true)
    }
  }

  const [isOpen, toggleOpen] = useToggle(false)
  const confirmChanges = () => {
    onChangeValue()
    toggleOpen(false)
  }

  const resetChanges = () => {
    toggleOpen(false)
    setInputValue(value!)
    setInputChecked(checked)
  }

  return (
    <td>
      {isOpen && (
        <Modal>
          <ConfirmAction
            onConfirm={confirmChanges}
            onAbort={resetChanges}
            actionTitle={'сохранить'}
          />
        </Modal>
      )}
      <label className={css.cell}>
        <input
          value={inputValue}
          onChange={inputHandler}
          onBlur={onBlur}
          onKeyDown={onPressEnter}
          type={type}
          checked={inputChecked}
        />
      </label>
    </td>
  )
})
