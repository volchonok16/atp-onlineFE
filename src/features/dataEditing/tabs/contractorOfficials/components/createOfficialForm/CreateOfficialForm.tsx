import { FC } from 'react'

import { useForm } from 'react-hook-form'

import css from './createOfficialForm.module.scss'

import { SubunitOfficialsType } from '../../api/api'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'
import { TableTools } from 'src/common/ui/tableTools/TableTools'

export type CreateOfficialFormData = Pick<SubunitOfficialsType, 'FIO' | 'DOLGN'>

type PropsType = {
  onSubmit: (formData: CreateOfficialFormData) => void
  onClose: () => void
}

export const CreateOfficialForm: FC<PropsType> = ({ onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<CreateOfficialFormData>()
  const submit = (values: CreateOfficialFormData) => onSubmit(values)
  const resetForm = () => reset({ FIO: '', DOLGN: '' })

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <h4 className={css.title}>Добавить должностное лицо</h4>
      <label className={css.field}>
        <span>Ф.И.О</span>
        <input {...register('FIO')} />
      </label>
      <label className={css.field}>
        <span>Должность</span>
        <input {...register('DOLGN')} />
      </label>

      <TableTools>
        <FuncButton type={'submit'} title={'Сохранить'} />
        <FuncButton type={'reset'} title={'Сбросить'} onClick={resetForm} />
        <FuncButton onClickHandler={onClose} title={'Отменить'} />
      </TableTools>
    </form>
  )
}
