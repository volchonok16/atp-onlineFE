import { RefObject, useEffect } from 'react'

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  close: () => void,
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && e.target && ref.current.contains(e.target as Node)) {
        return
      }
      close()
    }

    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, close])
}
