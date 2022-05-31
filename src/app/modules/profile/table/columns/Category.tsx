import { FC } from 'react'

type Props = {
    category?: string
}

const Category: FC<Props> = ({ category }) => (
    <div className='fw-bolder'>{category ? category : ''}</div>
)

export { Category }
