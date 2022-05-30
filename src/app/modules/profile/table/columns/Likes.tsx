import { FC } from 'react'

type Props = {
    likes?: string
}

const Likes: FC<Props> = ({ likes }) => (
    <div className='fw-bolder'>{likes ? likes : 0}</div>
)

export { Likes }
