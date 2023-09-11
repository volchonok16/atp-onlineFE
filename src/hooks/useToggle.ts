import { useState } from 'react'

export const useToggle = (
  initValue: boolean,
): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(initValue)
  function turnOn() {
    setValue(true)
  }

  function turnOff() {
    setValue(false)
  }

  return [value, turnOn, turnOff]
}
