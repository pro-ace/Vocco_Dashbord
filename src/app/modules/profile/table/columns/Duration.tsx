import { FC } from 'react'

type Props = {
    duration?: string
}

const Duration: FC<Props> = ({ duration }) => (
    <div className='fw-bolder'>{duration ? duration : ''}</div>
)

export { Duration }
