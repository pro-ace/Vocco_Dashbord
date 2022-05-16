import {FC} from 'react'

type Props = {
  gender?: string
}

const UserGender: FC<Props> = ({gender}) => (
  <div className='fw-bolder'>{gender ? gender === "m" ? "male" : "female": "other"}</div>
)

export {UserGender}
