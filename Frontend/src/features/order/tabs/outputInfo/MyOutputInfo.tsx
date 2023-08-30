import { LeftInfoSection } from './leftInfoSection/MyLeftInfoSection'
import css from './outputInfo.module.scss'
import { RightInfoSection } from './rightInfoSection/MyRightInfoSection'

export const OutputInfo = () => {
  return (
    <section className={css.outputInfo__wrapper}>
      <LeftInfoSection />

      <RightInfoSection />
    </section>
  )
}
