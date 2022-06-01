/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import { Link } from 'react-router-dom'
import {User} from '../../core/_models'

type Props = {
  user: User,
}

const UserInfoCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {user.avatar ? (
          <div className='symbol-label'>
            <Link to={`profile/${user.id}`}>
              <img src={`${user.avatar.url}`} alt={user.name} className='w-100' />
            </Link>
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${user.initials?.state}`,
              `text-${user.initials?.state}`
            )}
          >
            {user.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <Link to={`profile/${user.id}`}>
        {user.name}
      </Link>
      <span>{user.email}</span>
    </div>
  </div>
)

export {UserInfoCell}
