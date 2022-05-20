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
  weekData: WeekDataModel
}

export interface WeekDataModel {
  weekUsers: Array<number>
  datesArr: Array<Date>
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

export interface MFPercentModel {
  total: number
  male: number
  female: number
}

export interface UserModel {
  id: string
  name: string
  avatar: {
    url: string
    link: string
  }
  premium: string
  pseudo: string
}

export interface DailyUsersModel {
  todayUsers: number
  lastUsers: Array<UserModel>
  totalUsers: number
  avgAge: number
  mfPercent: MFPercentModel
}

export interface UsersCountryModel {
  id: string
  createdAt: Date
  country: string
}

export interface UsersByCountry {
  users: Array<UsersCountryModel>
}

export interface SubscribeCountModel {
  count: number
  growthPercent: number
  totalRecords: number
  funRecords: number
  adultsRecords: number
  educationRecords: number
}

export interface IdCreatedAtModel {
  id: string
  createdAt: Date
}

export interface PremiumUsersByMonthModel {
  premiumUsers: Array<IdCreatedAtModel>
}

export interface DownloadsByMonthModel {
  devices: Array<IdCreatedAtModel>
  lmNumber: number
}

export interface VocalModel {
  answersCount: number
  colorType: number
  createdAt: Date
  duration: string
  emoji: string
  file: {
    id: string
    link: string
    url: string
  }
  id: string
  likesCount: string
  privacy: boolean
  reactionsCount: number
  temporary: boolean
  title: string
  user: UserModel
}

export interface TopCategoryVocalModel {
  Fun: Array<VocalModel>
  Adults: Array<VocalModel>
  Education: Array<VocalModel>
  Horror: Array<VocalModel>
  Transport: Array<VocalModel>
}

export interface LastVocalsModel {
  lastVocals: Array<VocalModel>
}

export interface RecordDuration {
  total: number
  totalRecords: Array<{
    duration: number
    createdAt: Date
    answers: Array<{
      duration: number
    }>
  }>
}

export interface countriesModel {
  data: Array<{
    country: string
  }>
}
