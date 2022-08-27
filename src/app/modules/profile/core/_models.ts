import {ID, Response, QueryState} from '../../../../_metronic/helpers'

export type User = {
  id?: ID
  name?: string
  email?: string,
  dob?: string,
  gender?: string,
  country?: string,
  phone_number?:string,
  position?: string,
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
export type TransactionQueryResponse = Response<Array<TransactionHistory>>

export const initialUser: User = {
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}

export interface userInfoModel {
  data: {
    email: string
    name: string
    firstname: string
    lastname: string
    dob: Date
    gender: string
    country: string
    premium: string
    isActive: boolean
    avatar: {
      url: string
      link: string
    }
  },
  records: {
    count: number
  },
  listens: {
    count: number
  }
}

export interface userTransactionHistoryModel {
  data: Array<TransactionHistory>
}

export type TransactionHistory = {
  title?: string,
  emoji?: string,
  category?: string,
  duration?: string,
  likesCount?: number,
  reactionsCount?: number,
  createdAt?: Date
}

export const initialTransactionHistory: TransactionHistory = {
  title: 'Art Director',
  emoji: '',
  category: '',
  duration: '',
  likesCount: 0,
  reactionsCount: 0,
  createdAt: new Date("2022-05-19T20:31:48.548Z")
}

export const initialQueryState: QueryState = {
  page: 1,
  items_per_page: 10,
}
