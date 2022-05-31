import { FC } from 'react'

type Props = {
    emoji?: string
}

const Emoji: FC<Props> = ({ emoji }) => (
    <div className='fw-bolder'>{emoji ? emoji : ''}</div>
)

export { Emoji }
