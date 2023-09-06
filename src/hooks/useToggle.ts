import { useState } from 'react'

export const useToggle = (
  initValue: boolean,
): [boolean, (value: boolean) => void] => {
  const [value, setValue] = useState(initValue)
  const onToggle = (value: boolean) => setValue(value)

  return [value, onToggle]
}
