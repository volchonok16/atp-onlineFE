import { FC } from 'react'

import { useForm } from 'react-hook-form'

import css from './editForm.module.scss'

import { FuncButton } from '../../../../../../common/buttons/funcButton/MyFuncButton'
import { TableTools } from '../../../../../../common/ui/tableTools/TableTools'
import { CarType, FuelType } from '../../api/api'

type PropsType = {
  activeCar?: CarType
  submit: (formData: CarType) => void
  close: () => void
}

export const EditForm: FC<PropsType> = ({ activeCar, close, submit }) => {
  const { register, handleSubmit } = useForm<CarType>({
    defaultValues: activeCar,
  })
  const onSubmit = (values: CarType) => submit(values)
  const fuelTypes: FuelType[] = [
    'АИ-80',
    'АИ-92',
    'АИ-95',
    'АИ-98',
    'Дизель',
    'СУГ',
  ]

  return (
    <div className={css.editForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.aboutCar}>
          <h2 className={css.title}>О машине:</h2>
          <label>
            Марка автомобиля
            <input type="text" {...register('M_AM')} />
          </label>
          <label>
            Короткое название марки
            <input type="text" {...register('LM_AM')} />
          </label>
          <label>
            Гос. номер
            <input type="text" {...register('NAVTO')} />
          </label>
          <label>
            Тип топлива
            <select {...register('TOPL')}>
              {fuelTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label>
            В архиве
            <input type="checkbox" {...register('ARHIV')} />
          </label>
        </div>
        <div className={css.fuelConsumption}>
          <h2 className={css.title}>Норма расхода:</h2>
          <div>
            <label>
              На слив
              <input type="number" min="1" {...register('NRT_SLIV')} />
            </label>
            <label>
              На подъем кузова
              <input type="number" min="1" {...register('NRT_PODJOM')} />
            </label>
          </div>
          <div className={css.hour}>
            <h3 className={css.subTitle}>На час:</h3>
            <div>
              <h4>Осн. двигатель</h4>
              <label>
                Лето
                <input type="number" {...register('NRT_CH_OSN_DVIG_L')} />
              </label>
              <label>
                Зима
                <input type="number" {...register('NRT_CH_OSN_DVIG_Z')} />
              </label>
            </div>
            <div>
              <h4>Агрегат</h4>
              <label>
                Лето
                <input type="number" {...register('RCH')} />
              </label>
              <label>
                Зима
                <input type="number" {...register('RCH_Z')} />
              </label>
            </div>
            <div>
              <h4>Прогрев</h4>
              <label>
                Лето
                <input type="number" {...register('RPROG_L')} />
              </label>
              <label>
                Зима
                <input type="number" {...register('RPROG_Z')} />
              </label>
            </div>
          </div>

          <div className={css.hundred}>
            <h3 className={css.subTitle}>На 100 км:</h3>
            <div>
              <label>
                Лето
                <input type="number" {...register('NRT_L')} />
              </label>
              <label>
                Зима
                <input type="number" {...register('NRT_Z')} />
              </label>
            </div>

            <div>
              <h4>На тонну</h4>
              <label>
                Лето
                <input type="number" {...register('NRT_GRUZ_L')} />
              </label>
              <label>
                Зима
                <input type="number" {...register('NRT_GRUZ_Z')} />
              </label>
            </div>
            <div>
              <h4>На межгород</h4>
              <label>
                Лето
                <input type="number" {...register('NRT_L_MG')} />
              </label>
              <label>
                Зима
                <input type="number" {...register('NRT_Z_MG')} />
              </label>
            </div>
          </div>
        </div>
        <TableTools>
          <FuncButton type={'submit'} title={'Сохранить'} />
          <FuncButton onClickHandler={close} title={'Отменить'} />
        </TableTools>
      </form>
    </div>
  )
}
