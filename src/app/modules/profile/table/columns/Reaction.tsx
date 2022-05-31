import { FC } from 'react'

type Props = {
    reaction?: string
}

const Reaction: FC<Props> = ({ reaction }) => (
    <div className='fw-bolder'>{reaction ? reaction : 0}</div>
)

export { Reaction }
