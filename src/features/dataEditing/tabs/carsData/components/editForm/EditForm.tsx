import { FC, useState } from 'react'

import { useForm } from 'react-hook-form'

import css from './editForm.module.scss'

import { FuncButton } from 'src/common/buttons/funcButton/MyFuncButton'

import { TableTools } from 'src/common/ui/tableTools/TableTools'
import { ConfirmAction } from 'src/common/modals/confirmAction/ConfirmAction'

import { CarType, FuelType } from '../../api/api'
import { Actions } from '../../CarsData'

type PropsType = {
  activeCar?: CarType
  closeForm: VoidFunction
  setActionTitle?: (value: Actions) => void
  onAction: (car?: CarType | null) => void
  actionTitle: Actions
  modalType: Actions.update | Actions.add
}

export const EditForm: FC<PropsType> = ({
  activeCar,
  closeForm,
  onAction,
  actionTitle,
  setActionTitle,
  modalType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarType>({
    defaultValues: activeCar,
  })

  const [data, setData] = useState<null | CarType>(null)
  const [hideModal, setHideModal] = useState<boolean>(true)

  const openModal = (values: CarType) => {
    setData(values)
    setHideModal(false)
  }
  const closeModal = () => {
    setActionTitle?.(Actions.cancel)
    setHideModal(true)
  }

  const onSubmit = (values: CarType) => {
    openModal(values)
  }
  const onHandlerSubmit = () => {
    setActionTitle?.(modalType)
    data && openModal(data)
  }

  const onActionHandler = () => {
    onAction(data)
  }

  const fuelTypes: FuelType[] = [
    'АИ-80',
    'АИ-92',
    'АИ-95',
    'АИ-98',
    'Дизель',
    'СУГ',
  ]

  const onNegativeHandler = () => {
    closeModal()
  }

  const onPositiveHandler = () => {
    closeForm()
  }

  return (
    <div className={css.editForm}>
      {!hideModal && (
        <ConfirmAction
          positiveLabel={Actions.cancel === actionTitle ? 'Да' : ''}
          negativeLabel={Actions.cancel === actionTitle ? 'Нет' : ''}
          onClose={
            Actions.cancel === actionTitle
              ? onNegativeHandler
              : () => {
                  closeModal()
                  closeForm()
                }
          }
          actionTitle={actionTitle}
          onAction={
            Actions.cancel === actionTitle ? onPositiveHandler : onActionHandler
          }
        />
      )}
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
              })}
            />
            {errors?.M_AM && (
              <p className={`${css.warningText}`}>Введите корректные данные</p>
            )}
          </label>
          <label>
            Короткое название марки
            <input
              type="text"
              {...register('LM_AM', {
                pattern: /^[A-Zа-яё0-9._,()-/\s]+$/i,
              })}
            />
            {errors?.LM_AM && (
              <p className={`${css.warningText}`}>Введите корректные данные</p>
            )}
          </label>
          <label>
            Гос. номер
            <input
              type="NAVTO"
              {...register('NAVTO', {
                pattern: /[0-9]/g,
                maxLength: 7,
              })}
            />
            {errors?.NAVTO && (
              <p className={`${css.warningText}`}>
                Введите корректные данные, только цифры
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
            <input type="checkbox" {...register('ARHIV', {})} />
          </label>
        </div>
        <div className={css.fuelConsumption}>
          <h2 className={css.title}>Норма расхода:</h2>
          <div>
            <label>
              На слив
              <input
                step={0.1}
                type="number"
                min="1"
                {...register('NRT_SLIV', {
                  pattern: /^-?(0|[1-9]+)(?:[.,]\d{1,2}|)$/,
                })}
              />
              {errors?.NRT_SLIV && (
                <p> Введите корректные данные, только цифры, минимум 1</p>
              )}
            </label>
            <label>
              На подъем кузова
              <input
                step={0.1}
                type="number"
                min="1"
                {...register('NRT_PODJOM', {
                  pattern: /[0-9]/g,
                })}
              />
              {errors?.NRT_PODJOM && (
                <p>Введите корректные данные, только цифры, минимум 1</p>
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
                  step={0.1}
                  type="number"
                  {...register('NRT_CH_OSN_DVIG_L', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_CH_OSN_DVIG_L && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  step={0.1}
                  type="number"
                  {...register('NRT_CH_OSN_DVIG_Z', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_CH_OSN_DVIG_Z && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
            </div>
            <div>
              <h4>Агрегат</h4>
              <label>
                Лето
                <input
                  step={0.1}
                  type="number"
                  {...register('RCH', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.RCH && <p>Введите корректные данные, только цифры</p>}
              </label>
              <label>
                Зима
                <input
                  step={0.1}
                  type="number"
                  {...register('RCH_Z', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.RCH_Z && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
            </div>
            <div>
              <h4>Прогрев</h4>
              <label>
                Лето
                <input
                  step={0.1}
                  type="number"
                  {...register('RPROG_L', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.RPROG_L && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  step={0.1}
                  type="number"
                  {...register('RPROG_Z', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.RPROG_Z && (
                  <p>Введите корректные данные, только цифры</p>
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
                  step={0.1}
                  type="number"
                  {...register('NRT_L', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_L && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  step={0.1}
                  type="number"
                  {...register('NRT_Z', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_Z && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
            </div>

            <div>
              <h4>На тонну</h4>
              <label>
                Лето
                <input
                  step={0.1}
                  type="number"
                  {...register('NRT_GRUZ_L', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_GRUZ_L && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  step={0.1}
                  type="number"
                  {...register('NRT_GRUZ_Z', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_GRUZ_Z && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
            </div>
            <div>
              <h4>На межгород</h4>
              <label>
                Лето
                <input
                  step={0.1}
                  type="number"
                  {...register('NRT_L_MG', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_L_MG && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
              <label>
                Зима
                <input
                  step={0.1}
                  type="number"
                  {...register('NRT_Z_MG', {
                    pattern: /[0-9]/g,
                  })}
                />
                {errors?.NRT_Z_MG && (
                  <p>Введите корректные данные, только цифры</p>
                )}
              </label>
            </div>
          </div>
        </div>
        <TableTools>
          <FuncButton
            //type={'submit'}
            title={'Сохранить'}
            onClickHandler={onHandlerSubmit}
          />
          <FuncButton onClickHandler={closeModal} title={'Отменить'} />
        </TableTools>
      </form>
    </div>
  )
}
