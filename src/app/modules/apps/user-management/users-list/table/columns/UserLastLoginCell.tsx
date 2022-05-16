import {FC} from 'react'

type Props = {
  last_login?: string
}

const UserLastLoginCell: FC<Props> = ({last_login}) => (
  <div className='fw-bolder'>{last_login ? new Date(last_login).toDateString(): ''}</div>
)

export {UserLastLoginCell}
