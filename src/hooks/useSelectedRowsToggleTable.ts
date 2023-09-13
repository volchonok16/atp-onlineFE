import React, { useState } from 'react'

export const useSelectedRowsToggleTable = <T = number>() => {
  const [isHighlightedRow, setIsHighlightedRow] = useState<T[]>([])
  const selectedRowsToggle = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    selectedId: T,
  ) => {
    if (event.shiftKey || event.ctrlKey) {
      if (!isHighlightedRow.includes(selectedId)) {
        setIsHighlightedRow((arr) => Array.from(new Set([...arr, selectedId])))
      } else {
        setIsHighlightedRow(isHighlightedRow.filter((el) => el !== selectedId))
      }
    }
  }
  return { selectedRowsToggle, isHighlightedRow }
}
