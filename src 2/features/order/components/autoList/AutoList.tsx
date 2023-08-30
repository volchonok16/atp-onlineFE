import { FC, ComponentProps } from 'react'

import css from './autoList.module.scss'

type DefaultProps = ComponentProps<'input'>

type Props = DefaultProps & {
  autoList: string[]
}

export const AutoList: FC<Props> = ({ autoList, value, ...props }) => {
  return (
    <div className={css.list}>
      {autoList.map((item, i) => (
        <label key={i} className={css.listItem}>
          <input
            type="radio"
            name="list"
            value={item}
            checked={item === value}
            {...props}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}
