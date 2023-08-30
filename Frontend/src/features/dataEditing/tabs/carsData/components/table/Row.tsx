import { FC } from 'react'

import css from './table.module.scss'

import { CarType } from '../../api/api'

type PropsType = {
  data: CarType
  isActive: boolean
  hideArchive: boolean
  isActiveHandler: (car: CarType) => void
}

export const Row: FC<PropsType> = ({
  data,
  isActive,
  isActiveHandler,
  hideArchive,
}) => {
  const rowOnClickHandler = () => isActiveHandler(data)

  return (
    <tr className={isActive ? css.activeRow : ''} onClick={rowOnClickHandler}>
      <td>{data.M_AM}</td>
      <td>{data.NAVTO}</td>
      <td>{data.LM_AM}</td>
      <td>{data.NRT_SLIV}</td>
      <td>{data.NRT_PODJOM}</td>
      <td>{data.NRT_CH_OSN_DVIG_L}</td>
      <td>{data.NRT_CH_OSN_DVIG_Z}</td>
      <td>{data.RCH}</td>
      <td>{data.RCH_Z}</td>
      <td>{data.RPROG_L}</td>
      <td>{data.RPROG_Z}</td>
      <td>{data.NRT_L}</td>
      <td>{data.NRT_Z}</td>
      <td>{data.NRT_GRUZ_L}</td>
      <td>{data.NRT_GRUZ_Z}</td>
      <td>{data.NRT_L_MG}</td>
      <td>{data.NRT_Z_MG}</td>
      <td>{data.TOPL}</td>
      <td>{data.MAM_NOM}</td>
      <td>{data.FROM_1C_ID}</td>
      {!hideArchive && (
        <td>
          <input
            type="checkbox"
            checked={data.ARHIV === 'F' ? false : true}
            disabled
          />
        </td>
      )}
    </tr>
  )
}
