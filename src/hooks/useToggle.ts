import { useState } from 'react'

export const useToggle = (
  initValue: boolean,
): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(initValue)
  const on = () => setValue(true)
  const off = () => setValue(false)
  return [value, on, off]
}
