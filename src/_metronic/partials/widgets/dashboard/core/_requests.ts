import axios from 'axios'
import {SubscribeCountModel, NewUsersThisWeekModel, NewUsersThisMonthModel} from './_models'


//Admin Dashboard
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
console.log("ADMIN_API_URL", ADMIN_API_URL);
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