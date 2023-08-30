import { AddInfoBlock } from './addInfoBlock/MyAddInfoBlock'
import css from './shippingDocument.module.scss'

import { TableBlock } from './tableBlock/MyTableBlock'

import { AdditionalDataBlock } from '../additionalDataBlock/MyAdditionalDataBlock'

export const ShippingDocument = () => {
  return (
    <section className={css.shippingDocument__wrapper}>
      <TableBlock />
      <AddInfoBlock />
      <AdditionalDataBlock />
    </section>
  )
}
