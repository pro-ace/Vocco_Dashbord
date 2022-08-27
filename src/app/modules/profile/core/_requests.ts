import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../_metronic/helpers'
import {TransactionQueryResponse, User, userInfoModel, UsersQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_ADMIN_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/getusers`
const GET_USER_INFO_URL = `${API_URL}/getuserinfo`
const GET_USER_TH_URL = `${API_URL}/getusertransactionhistory`;
const GET_USER_RECORDS_NUMBER = `${API_URL}/getuserrecordsnumber`;
const GET_USRR_TOTAL_LISTENS = `${API_URL}/getusertotallitens`;

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

const getUserInfo = (userId: string) => {
  return axios.get<userInfoModel>(`${GET_USER_INFO_URL}?id=${userId}`);
}

// const getUserRecordsNumber = (userId: string): Promise<userRecordsNumberModel> => {
//   return axios
//     .get(`${GET_USER_RECORDS_NUMBER}?&id=${userId}`)
//     .then((d: AxiosResponse<userRecordsNumberModel>) => d.data)
// }

const getUserTransactionHistory = (query: string, userId: string): Promise<TransactionQueryResponse> => {
  return axios
    .get(`${GET_USER_TH_URL}?${query}&id=${userId}`)
    .then((d: AxiosResponse<TransactionQueryResponse>) => d.data)
}

// const getUserTotalListens = (userId: string): Promise<userTotalLitensModel> => {
//   return axios
//     .get(`${GET_USRR_TOTAL_LISTENS}?&id=${userId}`)
//     .then((d: AxiosResponse<userTotalLitensModel>) => d.data)
// }

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser, getUserInfo, getUserTransactionHistory}
