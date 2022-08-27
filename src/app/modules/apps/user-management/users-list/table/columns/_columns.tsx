import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import { UserBirthday } from './UserBirthday'
import { UserGender } from './UserGender'
import {User} from '../../core/_models'
import { UserPhoneNumberCell } from './UserPhoneNumberCell'
import {UserActive} from './UserActiveCell'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Gender' />,
    id: 'gender',
    Cell: ({...props}) => <UserGender gender={props.data[props.row.index].gender} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Birthday' className='min-w-125px' />,
    id: 'dob',
    Cell: ({...props}) => <UserBirthday dob={props.data[props.row.index].dob} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='country'/>,
    accessor: 'country',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone Number' className='min-w-125px' />
    ),
    id: 'phone_number',
    Cell: ({...props}) => <UserPhoneNumberCell phone_number={props.data[props.row.index].phoneNumber} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Active'/>,
    id: 'isactive',
    Cell: ({...props}) => <UserActive active={props.data[props.row.index].isActive} />,
  },
  {
    Header: (props) => (
    <UserCustomHeader tableProps={props} title='Premium'/>
    ),
    accessor: 'premium',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].lastActivity} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
      ),
      id: 'joined_day',
      Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].createdAt} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
