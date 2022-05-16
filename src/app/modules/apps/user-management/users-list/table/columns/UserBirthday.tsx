import {FC} from 'react'

type Props = {
  dob?: string
}

const UserBirthday: FC<Props> = ({dob}) => (
  <div className='fw-bolder'>{dob ? new Date(dob).toDateString(): ''}</div>
)

export {UserBirthday}
