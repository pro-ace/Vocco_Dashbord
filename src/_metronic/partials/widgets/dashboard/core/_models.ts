export interface SubscribeCountModel {
  count: number
  growthPercent: number
  totalRecords: number
  funRecords: number
  adultsRecords: number
  educationRecords: number
}

export interface NewUsersThisWeekModel {
  weekTotal: number
  growthWeek: number
  weekUsers: Array<number>
}

export interface NewUsersThisMonthModel {
  count: number
  growthPercent: number
}

export interface UserAddressModel {
  addressLine: string
  city: string
  state: string
  postCode: string
}
