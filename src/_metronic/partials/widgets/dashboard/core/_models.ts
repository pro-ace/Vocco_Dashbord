export interface SubscribeCountModel {
  count: number
  growthPercent: number
  total: number
  male: number
  female: number
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

export interface UsersByCountryStatis {
  users: Array<UsersCountryModel>
}

export interface UsersByCountry {
  data: Array<{
    users_count: number,
    country: string
  }>
  totalCount: number
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
  value?: number
}

export interface PremiumUsersByMonthModel {
  premiumUsers: Array<IdCreatedAtModel>
}

export interface HistoryByMonthModel {
  total: number
  data: Array<IdCreatedAtModel>
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
  likesCount: number
  listenCount: number
  privacy: boolean
  reactionsCount: number
  temporary: boolean
  title: string
  user: UserModel
}

export interface TopCategoryVocalModel {
  data: Array<{
    category: string
    data: Array<VocalModel>
  }>
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

export interface topUserModel {
  data: Array<{
    user_email: string
    user_name: string
    user_id: string
    likes_sum: number
    reaction_sum: number
    record: {
      category: string
      createdAt: Date
    }
  }>
}
