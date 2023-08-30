import { ArchiveType } from '../features/dataEditing/tabs/carsData/api/api'

export const parseBooleanValue = (value: ArchiveType | string) => {
  if (value === 'F' || value === '0') {
    return false
  }
  if (value === 'T' || value === '1') {
    return true
  }
}
