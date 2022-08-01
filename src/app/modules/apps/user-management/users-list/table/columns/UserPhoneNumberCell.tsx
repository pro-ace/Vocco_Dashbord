import {FC} from 'react'

type Props = {
  phone_number?: string
}

const UserPhoneNumberCell: FC<Props> = ({phone_number}) => (
  <div className='fw-bolder'>{phone_number ? phone_number: ''}</div>
)

export {UserPhoneNumberCell}
