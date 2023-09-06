import { FC } from 'react'

import { useForm } from 'react-hook-form'

import css from './editForm.module.scss'

import { FuncButton } from '../../../../../../common/buttons/funcButton/MyFuncButton'
import { TableTools } from '../../../../components/table-tools/TableTools'
import { CarType, FuelType } from '../../api/api'

type PropsType = {
  activeCar?: CarType
  submit: (formData: CarType) => void
  close: () => void
  onAction: (car?: CarType) => void
}

export const EditForm: FC<PropsType> = ({
  activeCar,
  close,
  submit,
  onAction,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<CarType>({
    defaultValues: activeCar,
  })
  const onSubmit = (values: CarType) => {
    console.log(values)
    submit(values)
    onAction(values)
  }
  const onHandlerSubmit = () => {
    setValue('M_AM', getValues('M_AM'))
    setValue('LM_AM', getValues('LM_AM'))
    setValue('NAVTO', getValues('NAVTO'))
    setValue('ARHIV', getValues('ARHIV'))
    setValue('NRT_SLIV', getValues('NRT_SLIV'))
    setValue('NRT_PODJOM', getValues('NRT_PODJOM'))
    setValue('NRT_CH_OSN_DVIG_L', getValues('NRT_CH_OSN_DVIG_L'))
    setValue('NRT_CH_OSN_DVIG_Z', getValues('NRT_CH_OSN_DVIG_Z'))
    setValue('RCH', getValues('RCH'))
    setValue('RCH_Z', getValues('RCH_Z'))
    setValue('RPROG_L', getValues('RPROG_L'))
    setValue('RPROG_Z', getValues('RPROG_Z'))
    setValue('NRT_L', getValues('NRT_L'))
    setValue('NRT_Z', getValues('NRT_Z'))
    setValue('NRT_GRUZ_L', getValues('NRT_GRUZ_L'))
    setValue('NRT_GRUZ_Z', getValues('NRT_GRUZ_Z'))
    setValue('NRT_L_MG', getValues('NRT_L_MG'))
    setValue('NRT_Z_MG', getValues('NRT_Z_MG'))
  }

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
            <input
              type="text"
              {...register('M_AM', {
                required: true,
                pattern: /^[A-Zа-яё0-9._,()-/\s]+$/i,
                onChange: () => {
                  getValues('M_AM')
                },
              })}
            />
            {errors?.M_AM && (
              <p className={`${css.warningText}`}>Введи корректные данные</p>
            )}
          </label>
          <label>
            Короткое название марки
            <input
              type="text"
              {...register('LM_AM', {
                pattern: /^[A-Zа-яё0-9._,()-/\s]+$/i,
                onChange: () => {
                  getValues('LM_AM')
                },
              })}
            />
            {errors?.LM_AM && (
              <p className={`${css.warningText}`}>Введи корректные данные</p>
            )}
          </label>
          <label>
            Гос. номер
            <input
              type="number"
              {...register('NAVTO', {
                pattern: /[0-9]/g,
                maxLength: 7,
              })}
            />
            {errors?.NAVTO && (
              <p className={`${css.warningText}`}>
                Введи корректные данные, только цифры
              </p>
            )}
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
            <input
              type="checkbox"
              {...register('ARHIV', {
                onChange: () => {
                  getValues('ARHIV')
                },
              })}
            />
          </label>
        </div>
        <div className={css.fuelConsumption}>
          <h2 className={css.title}>Норма расхода:</h2>
          <div>
            <label>
              На слив
              <input
                type="number"
                min="1"
                {...register('NRT_SLIV', {
                  pattern: /[0-9]/g,
                  onChange: () => {
                    getValues('NRT_SLIV')
                  },
                })}
              />
              {errors?.NRT_SLIV && (
                <p> Введи корректные данные, только цифры, минимум 1</p>
              )}
            </label>
            <label>
              На подъем кузова
              <input
                type="number"
                min="1"
                {...register('NRT_PODJOM', {
                  pattern: /[0-9]/g,
                  onChange: () => {
                    getValues('NRT_PODJOM')
                  },
                })}
              />
              {errors?.NRT_PODJOM && (
                <p>Введи корректные данные, только цифры, минимум 1</p>
              )}
            </label>
          </div>
          <div className={css.hour}>
            <h3 className={css.subTitle}>На час:</h3>
            <div>
              <h4>Осн. двигатель</h4>
              <label>
                Лето
                <input
                  type="number"
                  {...register('NRT_CH_OSN_DVIG_L', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_CH_OSN_DVIG_L')
                    },
                  })}
                />
                {errors?.NRT_CH_OSN_DVIG_L && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  type="number"
                  {...register('NRT_CH_OSN_DVIG_Z', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_CH_OSN_DVIG_Z')
                    },
                  })}
                />
                {errors?.NRT_CH_OSN_DVIG_Z && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
            </div>
            <div>
              <h4>Агрегат</h4>
              <label>
                Лето
                <input
                  type="number"
                  {...register('RCH', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('RCH')
                    },
                  })}
                />
                {errors?.RCH && <p>Введи корректные данные, только цифры</p>}
              </label>
              <label>
                Зима
                <input
                  type="number"
                  {...register('RCH_Z', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('RCH_Z')
                    },
                  })}
                />
                {errors?.RCH_Z && <p>Введи корректные данные, только цифры</p>}
              </label>
            </div>
            <div>
              <h4>Прогрев</h4>
              <label>
                Лето
                <input
                  type="number"
                  {...register('RPROG_L', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('RPROG_L')
                    },
                  })}
                />
                {errors?.RPROG_L && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  type="number"
                  {...register('RPROG_Z', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('RPROG_Z')
                    },
                  })}
                />
                {errors?.RPROG_Z && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
            </div>
          </div>

          <div className={css.hundred}>
            <h3 className={css.subTitle}>На 100 км:</h3>
            <div>
              <label>
                Лето
                <input
                  type="number"
                  {...register('NRT_L', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_L')
                    },
                  })}
                />
                {errors?.NRT_L && <p>Введи корректные данные, только цифры</p>}
              </label>
              <label>
                Зима
                <input
                  type="number"
                  {...register('NRT_Z', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_Z')
                    },
                  })}
                />
                {errors?.NRT_Z && <p>Введи корректные данные, только цифры</p>}
              </label>
            </div>

            <div>
              <h4>На тонну</h4>
              <label>
                Лето
                <input
                  type="number"
                  {...register('NRT_GRUZ_L', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_GRUZ_L')
                    },
                  })}
                />
                {errors?.NRT_GRUZ_L && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  type="number"
                  {...register('NRT_GRUZ_Z', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_GRUZ_Z')
                    },
                  })}
                />
                {errors?.NRT_GRUZ_Z && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
            </div>
            <div>
              <h4>На межгород</h4>
              <label>
                Лето
                <input
                  type="number"
                  {...register('NRT_L_MG', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_L_MG')
                    },
                  })}
                />
                {errors?.NRT_L_MG && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  type="number"
                  {...register('NRT_Z_MG', {
                    pattern: /[0-9]/g,
                    onChange: () => {
                      getValues('NRT_Z_MG')
                    },
                  })}
                />
                {errors?.NRT_Z_MG && (
                  <p>Введи корректные данные, только цифры</p>
                )}
              </label>
            </div>
          </div>
        </div>
        <TableTools>
          <FuncButton
            type={'submit'}
            title={'Сохранить'}
            onClickHandler={onHandlerSubmit}
          />
          <FuncButton onClickHandler={close} title={'Отменить'} />
        </TableTools>
      </form>
    </div>
  )
}
