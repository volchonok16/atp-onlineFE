import React from 'react'

export const Head = () => {
  return (
    <thead>
      <tr>
        <th rowSpan={2}>Подразделение</th>
        <th colSpan={2}>Норма времени</th>
        <th rowSpan={2}>Архив</th>
      </tr>
      <tr>
        <th>Будни</th>
        <th>Выходной</th>
      </tr>
    </thead>
  )
}
