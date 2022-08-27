import axios from 'axios'
import {
  SubscribeCountModel,
  NewUsersThisWeekModel,
  NewUsersThisMonthModel,
  totalRecordsModel,
  DailyUsersModel,
  PremiumUsersByMonthModel,
  TopCategoryVocalModel,
  DownloadsByMonthModel,
  LastVocalsModel,
  UsersByCountry,
  RecordDuration,
  countriesModel,
  topUserModel,
  UsersByCountryStatis,
  HistoryByMonthModel,
  ActiveUserModel
} from './_models'


//Admin Dashboard
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
//Get Subscribe Count
export function getsubscribecount() {
  return axios.get<SubscribeCountModel>(`${ADMIN_API_URL}/getsubscribeusercount`);
}

export function getnewusersthisweek() {
  return axios.get<NewUsersThisWeekModel>(`${ADMIN_API_URL}/getnewusersthisweek`);
}

export function getuserscountmonth() {
  return axios.get<NewUsersThisMonthModel>(`${ADMIN_API_URL}/getuserscountmonth`);
}

export function gettotalrecords() {
  return axios.get<totalRecordsModel>(`${ADMIN_API_URL}/gettotalrecord`);
}

export function getusersdaily() {
  return axios.get<DailyUsersModel>(`${ADMIN_API_URL}/getusersdaily`);
}

export function getusersbycountry() {
  return axios.get<UsersByCountry>(`${ADMIN_API_URL}/getusersbycountry`);
}

export function getusersstatisticsbycountry() {
  return axios.get<UsersByCountryStatis>(`${ADMIN_API_URL}/getusersstatisticsbycountry`);
}

export function getpremiumusersbymonth() {
  return axios.get<PremiumUsersByMonthModel>(`${ADMIN_API_URL}/getpremiumusersbymonth`);
}

export function getinvitelinks() {
  return axios.get<HistoryByMonthModel>(`${ADMIN_API_URL}/getinvitelinks`);
}

export function getpersessiontime() {
  return axios.get<HistoryByMonthModel>(`${ADMIN_API_URL}/getpersessiontime`);
}

export function getsharestories() {
  return axios.get<HistoryByMonthModel>(`${ADMIN_API_URL}/getsharestories`);
}

export function getopenappcount() {
  return axios.get<HistoryByMonthModel>(`${ADMIN_API_URL}/getopenappcount`);
}

export function getdevicesbymonth() {
  return axios.get<DownloadsByMonthModel>(`${ADMIN_API_URL}/getdevicesbymonth`);
}

export function getTopCategoriesVocals() {
  return axios.get<TopCategoryVocalModel>(`${ADMIN_API_URL}/getvoicebycategory`);
}

export function getLastVocals() {
  return axios.get<LastVocalsModel>(`${ADMIN_API_URL}/getlastvocals`);
}

export function getUserByCountry() {
  return axios.get<DailyUsersModel>(`${ADMIN_API_URL}/getusersdaily`);
}

export function getRecordsDuration() {
  return axios.get<RecordDuration>(`${ADMIN_API_URL}/getrecordseconds`);
}

export function getCountries() {
  return axios.get<countriesModel>(`${ADMIN_API_URL}/getcountries`);
}

export function getTopUsers() {
  return axios.get<topUserModel>(`${ADMIN_API_URL}/getrecordsgbyuser`);
}

export function getActiveUsers() {
  return axios.get<ActiveUserModel>(`${ADMIN_API_URL}/getactiveusercount`);
}
