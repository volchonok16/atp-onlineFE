import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import css from './techCharacteristic.module.scss'

import { FuncButton } from '../../../../common/buttons/funcButton/MyFuncButton'
import { SelectInput } from '../../../../common/inputs/selectInput/MySelectInput'
import { TextInput } from '../../../../common/inputs/textInput/MyTextInput'

import { ConfirmAction } from '../../../../common/modals/confirmAction/ConfirmAction'
import { Actions } from '../../../../features/dataEditing/tabs/carsData/CarsData'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  getActiveEquipmentID,
  getTechnicalCharacteristicData,
  getTechnicalCharacteristicDataTC,
} from '../../../../redux/catalogs/extendedInfoReducer'

export type TechCharacteristicFormType = {
  garageNumber: string
  inventoryNumber: string
  yearOfIssue: string
  bodyColor: string
  bodyType: string
  maxWeight: string
  weightWithoutLoad: string
  loadCapacity: string
  vin: string
  licenseCategory: string
  mechanismCategory: string
  engineModel: string
  engineNumber: string
  enginePower: string
  engineCapacity: string
  bodyNumber: string
  chassisNumber: string
  manufacturer: string
  seats: string
  capacityOfPersons: string
  categoryOfCapacity: string
  fuelTankCapacity: string
  mileage: string
}

export const TechCharacteristic = () => {
  const dispatch = useAppDispatch()
  const activeEquipmentID = useAppSelector(getActiveEquipmentID)
  const technicalCharacteristicData = useAppSelector(
    getTechnicalCharacteristicData,
  )

  const [isOpen, setIsOpen] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [actionTitle, setActionTitle] = useState<Actions>(Actions.save)
  const showAction = () => {
    alert('Action confirm')
    setIsOpen(false)
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDirty, setIsDirty] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const { register, handleSubmit, formState } =
    useForm<TechCharacteristicFormType>({
      defaultValues: {
        garageNumber: '',
        inventoryNumber: '',
        yearOfIssue: '',
        bodyColor: '',
        bodyType: '',
        maxWeight: '',
        weightWithoutLoad: '',
        loadCapacity: '',
        vin: '',
        licenseCategory: '',
        mechanismCategory: '',
        engineModel: '',
        engineNumber: '',
        enginePower: '',
        engineCapacity: '',
        bodyNumber: '',
        chassisNumber: '',
        manufacturer: '',
        seats: '',
        capacityOfPersons: '',
        categoryOfCapacity: '',
        fuelTankCapacity: '',
        mileage: '',
      },
      mode: 'onSubmit',
    })

  const onClickSubmitHandler = (data: TechCharacteristicFormType) => {
    setIsDirty(false)
    console.log('data', data)
  }

  useEffect(() => {
    if (formState.isDirty) {
      console.log('formState.isDirty')
      setIsDirty(true)
    }
  }, [formState.isDirty])

  /*  useEffect(() => {
        const handleVisibilityChange = (e: any) => {
          if (isDirty) {
            console.log("handleBeforeUnload");
            e.preventDefault();
            e.returnValue = "";
          }
        };

        window.addEventListener("beforeunload", handleVisibilityChange);

        return () => {
          window.removeEventListener("beforeunload", handleVisibilityChange);
        };
      }, [window]);*/

  useEffect(() => {
    dispatch(getTechnicalCharacteristicDataTC(activeEquipmentID))
  }, [activeEquipmentID])

  return (
    <section>
      <form
        className={css.techCharacteristic__form_wrapper}
        onSubmit={handleSubmit(onClickSubmitHandler)}
      >
        <div className={css.techCharacteristic__wrapper}>
          <div className={css.techCharacteristic__block}>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Гаражный номер
              </span>
              <TextInput
                id="garageNumber"
                value={technicalCharacteristicData.GAR_NO}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Инв. номер
              </span>
              <TextInput
                id="inventoryNumber"
                value={technicalCharacteristicData.INV_NO}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Год выпуска
              </span>
              <TextInput
                id="yearOfIssue"
                value={technicalCharacteristicData.GOD_VIP}
                register={register}
              />
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Цвет кузова
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="bodyColor"
                  value={technicalCharacteristicData.COLOR}
                  register={register}
                />
              </div>
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Тип кузова
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="bodyType"
                  value={technicalCharacteristicData.TIP_TS}
                  register={register}
                />
              </div>
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Разр. макс. масса
              </span>
              <TextInput
                id="maxWeight"
                value={technicalCharacteristicData.MAX_MASSA}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Масса без нагрузки
              </span>
              <TextInput
                id="weightWithoutLoad"
                value={technicalCharacteristicData.MASS_BEZ_NAGR}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Грузоподъемность
              </span>
              <TextInput
                id="loadCapacity"
                value={technicalCharacteristicData.GRUZOP}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                VIN
              </span>
              <TextInput
                id="vin"
                value={technicalCharacteristicData.VIN}
                register={register}
              />
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Категория прав
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="licenseCategory"
                  value={technicalCharacteristicData.KAT}
                  register={register}
                />
              </div>
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Категория спец. техники
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="mechanismCategory"
                  value={technicalCharacteristicData.KAT_SPEC}
                  register={register}
                />
              </div>
            </div>
          </div>

          <div className={css.techCharacteristic__block}>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Модель двигателя
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="engineModel"
                  value={technicalCharacteristicData.MOD_DV}
                  register={register}
                />
              </div>
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Номер двигателя
              </span>
              <TextInput
                id="engineNumber"
                value={technicalCharacteristicData.N_DV}
                register={register}
              />
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Мощность двигателя
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="enginePower"
                  value={technicalCharacteristicData.MOSHN}
                  register={register}
                />
              </div>
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Раб. об. двигателя
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="engineCapacity"
                  value={technicalCharacteristicData.OB_DV}
                  register={register}
                />
              </div>
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Номер кузова
              </span>
              <TextInput
                id="bodyNumber"
                value={technicalCharacteristicData.N_KUZ}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Номер шасси
              </span>
              <TextInput
                id="chassisNumber"
                value={technicalCharacteristicData.N_SHAS}
                register={register}
              />
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Производитель
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="manufacturer"
                  value={technicalCharacteristicData.PROIZV}
                  register={register}
                />
              </div>
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Посадочных мест
              </span>
              <TextInput
                id="seats"
                value={technicalCharacteristicData.KOL_POSAD_MEST}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Вместимость, чел
              </span>
              <TextInput
                id="capacityOfPersons"
                value={technicalCharacteristicData.VMEST_CHEL}
                register={register}
              />
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Кат. вместимости
              </span>
              <div className={css.techCharacteristic__block_inputItem_select}>
                <SelectInput
                  id="categoryOfCapacity"
                  value={technicalCharacteristicData.KAT_VMEST}
                  register={register}
                />
              </div>
            </div>

            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Объем топл. бака
              </span>
              <TextInput
                id="fuelTankCapacity"
                value={technicalCharacteristicData.V_BAK}
                register={register}
              />
            </div>
            <div className={css.techCharacteristic__block_inputItem}>
              <span className={css.techCharacteristic__block_inputItem_title}>
                Пробег на начало работы программы
              </span>
              <TextInput
                id="mileage "
                value={technicalCharacteristicData.PROBEG_DO_AP}
                register={register}
              />
            </div>
          </div>
        </div>

        <div className={css.techCharacteristic__buttons_wrapper}>
          <FuncButton title="Сохранить " />
          <FuncButton title="Отменить" />
        </div>
      </form>

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
