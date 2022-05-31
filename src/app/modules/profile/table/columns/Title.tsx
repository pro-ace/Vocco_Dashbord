import {FC} from 'react'

type Props = {
  title?: string
}

const Title: FC<Props> = ({title}) => (
  <div className='fw-bolder'>{title ? title: ''}</div>
)

export {Title}
