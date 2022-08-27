import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  name?: string
  email?: string,
  dob?: string,
  gender?: string,
  country?: string,
  phone_number?: string,
  position?: string,
  isActive?: boolean,
  premium?: string,
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  avatar?: {
    url?: string,
    link?: string
  }
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
