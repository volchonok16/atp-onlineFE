import { ChangeEvent, KeyboardEvent, memo, useState } from 'react'

import css from './editableTableCell.module.scss'

import { Actions } from '../../../features/dataEditing/tabs/carsData/CarsData'

import { ObjectAndEquipmentKeys } from '../../../features/dataEditing/tabs/objectAndEquipments/api/api'

import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'
import { Modal } from 'src/common/modals/Modal'
import { StaffKeys } from 'src/features/dataEditing/tabs/staff/api/api'
import { useToggle } from 'src/hooks/useToggle'

export type TableCellData = {
  name: StaffKeys | ObjectAndEquipmentKeys
  value?: string | null
  itemId: number
  checked?: boolean
}

type Props = {
  value?: string | null
  itemId: number
  name: StaffKeys | ObjectAndEquipmentKeys
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
  const initialValue = value ? value : ''
  const [inputValue, setInputValue] = useState(initialValue)
  const [inputChecked, setInputChecked] = useState<boolean | undefined>(checked)
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    setInputChecked(e.currentTarget.checked)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, openModal, closeModal] = useToggle(false)

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
      openModal()
    }
  }

  const onBlur = () => {
    if (inputValue != value) {
      openModal()
    }
  }

  const confirmChanges = () => {
    onChangeValue()
    closeModal()
  }

  const resetChanges = () => {
    setInputValue(value!)
    setInputChecked(checked)
    closeModal()
  }

  return (
    <td>
      {isOpen && (
        <Modal>
          <ConfirmAction
            onClose={resetChanges}
            onAction={confirmChanges}
            actionTitle={Actions.save}
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
