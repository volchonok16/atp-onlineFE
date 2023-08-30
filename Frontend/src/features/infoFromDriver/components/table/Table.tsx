import css from './Table.module.scss'

const reports = ['wqewyg', 'asdfasda', 'asdasdasd', 'asdasdasd', 'asdasdasdasd']

export const Table = () => {
  return (
    <table className={css.table}>
      {reports.map((rep, i) => (
        <tr key={i}>
          <td>{rep}</td>
        </tr>
      ))}
    </table>
  )
}
