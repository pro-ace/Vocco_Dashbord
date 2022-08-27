import { FC } from 'react'

type Props = {
    active?: boolean
}

const UserActive: FC<Props> = ({ active }) => (

    <div className='fw-bolder'>{ active ? "active" : "inactive"}</div>
)

export { UserActive }
