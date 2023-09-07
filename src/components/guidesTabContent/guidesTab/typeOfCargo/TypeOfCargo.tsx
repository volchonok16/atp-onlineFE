import { useEffect, useState } from 'react'

import { GoodsTypeTable } from './goodsTypeTable/GoodsTypeTable'
import css from './TypeOfCargo.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { IconButton } from '../../../../common/buttons/iconButton/MyIconButton'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'
import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'
import { Table } from '../../../../common/table/MyTable'
import { Actions } from '../../../../features/dataEditing/tabs/carsData/CarsData'
import {
  dataRowType,
  headerColumnsType,
} from '../../../../features/order/tabs/dataPreparation/MyDataPreparation'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { getGoodsTypeTC } from '../../../../redux/catalogs/directoriesReducer'

const columns2: headerColumnsType[] = [
  { title: 'Подразделение заказчика', id: 1 }, // accessor is the "key" in the data},
  { title: 'Дата начала действия', id: 2 }, // accessor is the "key" in the data},
  { title: 'Ставка коэффициента', id: 3 }, // accessor is the "key" in the data},
]
const data2: dataRowType[] = [
  {
    col1: '',
    col2: '',
    col3: '',
  },
  {
    col1: '',
    col2: '',
    col3: '',
  },
]

export const TypeOfCargo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [actionTitle, setActionTitle] = useState<Actions>(Actions.save)
  const showAction = () => alert('Action confirm')
  const actionTitleHandler = (actionTitle: Actions | undefined) => {
    console.log(actionTitle)
    if (actionTitle) {
      setActionTitle(actionTitle)
      openModal()
    }
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGoodsTypeTC())
  }, [])

  return (
    <section className={css.typeOfCargo__wrapper}>
      <div className={css.typeOfCargo__block_wrapper}>
        <GoodsTypeTable />

        <div className={css.typeOfCargo__searchBlock_wrapper}>
          <div className={css.typeOfCargo__searchBlock}>
            <TextInput placeholder="Поиск по грузу" />
          </div>

          <FuncButton title="Очистить" />
        </div>

        <div className={css.typeOfCargo__buttons_wrapper}>
          <IconButton typeOfIcon="Добавить" />
          <IconButton
            typeOfIcon="Удалить"
            actionTitle={Actions.delete}
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
      </div>

      <div className={css.typeOfCargo__block_wrapper}>
        <div className={css.typeOfCargo__table_wrapper}>
          <Table columns={columns2} data={data2} />
        </div>

        <div className={css.typeOfCargo__emptyBlock_wrapper} />

        <div className={css.typeOfCargo__buttons_wrapper}>
          <IconButton typeOfIcon="Добавить" />
          <IconButton
            typeOfIcon="Удалить"
            actionTitle={Actions.delete}
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
      </div>
    </section>
  )
}
