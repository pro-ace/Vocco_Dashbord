import { FC } from 'react'

type Props = {
    created_at?: string
}

const CreatedAt: FC<Props> = ({ created_at }) => (
    <div className='fw-bolder'>{created_at ? new Date(created_at).toDateString() : ''}</div>
)

export { CreatedAt }
