import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {TransactionHistory} from '../../core/_models'

type Props = {
  row: Row<TransactionHistory>
}

const CustomRow: FC<Props> = ({row}) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      return (
        <td
          {...cell.getCellProps()}
          className={clsx({'text-end min-w-100px': cell.column.id === 'actions'})}
        >
          {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)

export {CustomRow}
