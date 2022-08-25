/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../core/_models'

type Props = {
  user: User,
}

const UserInfoCell: FC<Props> = ({ user }) => (
  <Link to={`profile/${user.id}`} className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      {user.avatar ? (
        <div className='symbol-label'>
          <img src={`${user.avatar.url}`} alt={user.name} className='w-100' />
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
    </div>
    <div className='d-flex flex-column'>
      {user.name}
      <span>{user.email}</span>
    </div>
  </Link>
)

export { UserInfoCell }
