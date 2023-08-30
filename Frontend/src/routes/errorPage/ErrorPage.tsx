import css from './errorPage.module.scss'

export const ErrorPage = () => {
  return (
    <section className={css.page}>
      <div className={css.circles}>
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
        </p>
        <span className={`${css.circle} ${css.big}`}></span>
        <span className={`${css.circle} ${css.med}`}></span>
        <span className={`${css.circle} ${css.small}`}></span>
      </div>
    </section>
  )
}
