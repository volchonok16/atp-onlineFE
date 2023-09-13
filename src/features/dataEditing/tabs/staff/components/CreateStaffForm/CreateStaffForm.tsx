import { FC } from 'react'

import { useForm } from 'react-hook-form'

import css from './createStaffForm.module.scss'

import { StaffType } from '../../api/api'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { TableTools } from 'src/common/ui/tableTools/TableTools'

export type StaffFormData = Pick<StaffType, 'FIO' | 'FULL_FIO'>

type PropsType = {
  onSubmit: (formData: StaffFormData) => void
  onClose: () => void
}

export const CreateStaffForm: FC<PropsType> = ({ onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<StaffFormData>()
  const submit = (values: StaffFormData) => onSubmit(values)
  const resetForm = () => reset({ FIO: '', FULL_FIO: '' })

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <h4 className={css.title}>Добавить сотрудника</h4>
      <label className={css.field}>
        <span>Ф.И.О</span>
        <input {...register('FIO')} />
      </label>
      <label className={css.field}>
        <span>Расшифровка</span>
        <input {...register('FULL_FIO')} />
      </label>

      <TableTools>
        <FuncButton type={'submit'} title={'Сохранить'} />
        <FuncButton type={'reset'} title={'Сбросить'} onClick={resetForm} />
        <FuncButton onClickHandler={onClose} title={'Отменить'} />
      </TableTools>
    </form>
  )
}
