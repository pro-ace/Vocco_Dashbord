import { Column } from 'react-table'
import { UserCustomHeader } from './UserCustomHeader'
import { TransactionHistory, User } from '../../core/_models'
import { Title } from './Title'
import { Category } from './Category'
import { Duration } from './Duration'
import { Likes } from './Likes'
import { Reaction } from './Reaction'
import { Emoji } from './Emoji'
import { CreatedAt } from './CreatedAt'

const usersColumns: ReadonlyArray<Column<TransactionHistory>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='title' />,
    id: 'title',
    Cell: ({ ...props }) => <Title title={props.data[props.row.index].title} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='emoji' />,
    id: 'emoji',
    Cell: ({ ...props }) => <Emoji emoji={props.data[props.row.index].emoji} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='category' />,
    id: 'category',
    Cell: ({ ...props }) => <Category category={props.data[props.row.index].category} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='duration' />,
    id: 'duration',
    Cell: ({ ...props }) => <Duration duration={props.data[props.row.index].duration} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='likes' />,
    id: 'likes',
    Cell: ({ ...props }) => <Likes likes={props.data[props.row.index].likesCount} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='reaction' />,
    id: 'reaction',
    Cell: ({ ...props }) => <Reaction reaction={props.data[props.row.index].reactionsCount} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='created_at' />,
    id: 'created_at',
    Cell: ({ ...props }) => <CreatedAt created_at={props.data[props.row.index].createdAt} />,
  },
]

export { usersColumns }
