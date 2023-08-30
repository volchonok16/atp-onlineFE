import css from './chatBlockStyle.module.scss'

import { FuncButton } from '../../../common/buttons/funcButton/MyFuncButton'

export const ChatBlock = () => {
  return (
    <div className={css.container}>
      <span>Чат с водителем</span>
      <div className={css.chatContainer}>
        <div className={css.chat}>
          <div className={css.messages}>
            <span className={css.text}>15:34:12 : Экспедитор</span>
            <span className={css.text}>Возвращайся на базу</span>
          </div>
          <div className={css.messages}>
            <span className={css.text}>15:36:00 : Иванов И.И.</span>
            <span className={css.text}>Похалтурю и приеду</span>
          </div>
        </div>
        <textarea className={css.textarea} />
        <FuncButton title={'Отправить'} />
      </div>
    </div>
  )
}
