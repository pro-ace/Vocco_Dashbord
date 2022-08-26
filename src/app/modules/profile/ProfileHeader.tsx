/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { userInfoModel } from './core/_models'
import { getUserInfo, getUserRecordsNumber, getUserTotalListens } from './core/_requests'
import { THSListWrapper } from './TransacntionHistoryList'

const ProfileHeader: React.FC = () => {
  const {id: userId} = useParams();
  const [userRcordsNumber, setUserRecordsNumber] = useState<number>(0);
  const [userTotalListenStory , setUserTotalListenStory] = useState<number>(0);
  const [profileData, setProfileData] = useState<userInfoModel>(
    {
      "data": {
          "email": "NoEail",
          "name": "NoName",
          "firstname": "NoName",
          "lastname": "NoName",
          "dob": new Date(),
          "gender": "m",
          "premium": "none",
          "country": "NoCountry",
          "avatar": {
              "url": "",
              "link": ""
          }
      }
    }
  );

  useEffect(() =>{
    const fetchData = async (userId : string) => {
      await getUserInfo(userId).then(res => {
        if (res.data) {
          setProfileData(res.data);
        }
      });
    }

    const fetchPersonalRecords = async (userId: string) => {
      await getUserRecordsNumber(userId).then(res => {
        setUserRecordsNumber(res.count);
      });
      setTimeout(() => {
        fetchPersonalRecords(userId)
      }, 7200000)
    }

    const fetchTotalListens = async (userId: string) => {
      await getUserTotalListens(userId).then(res => {
        setUserTotalListenStory(res.count);
      })
      setTimeout(() => {
        fetchTotalListens(userId)
      }, 7200000)
    }

    fetchData(userId ?? '');
    fetchPersonalRecords(userId ?? '');
    fetchTotalListens(userId ?? '');
  }, [userId])

  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container-xxl">
        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
            <div className="card mb-5 mb-xl-8">
              <div className="card-body pt-15">
                <div className="d-flex flex-center flex-column mb-5">
                  {/* <div className="symbol symbol-150px symbol-circle mb-7"> */}
                    {/* <img src={avatarUrl} alt="avatar link" /> */}
                    {profileData?.data.avatar?.url ? (
                      <div className="symbol symbol-150px symbol-circle mb-7" data-bs-toggle="tooltip" title="Michael Eberon">
                        <img alt="Pic" src={profileData?.data.avatar.url} />
                      </div>
                    ) : (
                      <div className="symbol symbol-150px symbol-circle mb-7" data-bs-toggle="tooltip" title="Alan Warden">
                        <span className="symbol-label bg-warning text-inverse-warning fw-bolder fs-1">{profileData?.data.firstname ? profileData?.data.firstname.charAt(0).toUpperCase() : profileData?.data.name.charAt(0).toUpperCase()}</span>
                      </div>
                    )}
                  {/* </div> */}
                  <a href="#" className="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1">{profileData?.data.firstname} {profileData?.data.lastname}</a>
                  <a href="#" className="fs-5 fw-bold text-muted text-hover-primary mb-6">{profileData?.data.name}</a>
                </div>
                <div className="d-flex flex-stack fs-4 py-3">
                  <div className="fw-bolder">Details</div>
                  {profileData?.data.premium !== 'none' ? <div className="badge badge-light-info d-inline">Premium user</div> : null}
                </div>
                <div className="separator separator-dashed my-3"></div>
                <div className="pb-5 fs-6">
                  <div className="fw-bolder mt-5">EMAIL</div>
                  <div className="text-gray-600">
                    <a href="#" className="text-gray-600 text-hover-primary">{profileData?.data.email}</a>
                  </div>
                  <div className="fw-bolder mt-5">COUNTRY</div>
                  <div className="text-gray-600">{profileData?.data.country}</div>
                  <div className="fw-bolder mt-5">GENDER</div>
                  <div className="text-gray-600">{profileData?.data.gender === 'm' ? 'Male' : (profileData?.data.gender === 'f' ? 'Female' : null)}</div>
                  <div className="fw-bolder mt-5">BIRTHDAY</div>
                  <div className="text-gray-600">{profileData?.data.dob ? new Date(profileData?.data.dob).toDateString() : null}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-lg-row-fluid ms-lg-15">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="kt_ecommerce_customer_overview" role="tabpanel">
                <div className="row row-cols-1 row-cols-md-3 mb-6 mb-xl-9">
                  <div className="col">
                    <div className="card pt-4 h-md-100 mb-6 mb-md-0">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2 className="fw-bolder">Total Records</h2>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="fw-bolder fs-2">
                          <div className="d-flex">
                            <span className="svg-icon svg-icon-info svg-icon-2x">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor" />
                              </svg>
                            </span>
                            <div className="ms-2"> {userRcordsNumber} <span className="text-muted fs-4 fw-bold">Records Posted</span></div>
                          </div>
                          <div className="fs-7 fw-normal text-muted">Earn reward points with every vocals.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card pt-4 h-md-100 mb-6 mb-md-0">
                      <div className="card-header border-0">
                        <div className="card-title">
                          <h2 className="fw-bolder">Total Listen</h2>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="fw-bolder fs-2">
                          <div className="d-flex">
                            <span className="svg-icon svg-icon-info svg-icon-2x">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor" />
                              </svg>
                            </span>
                            <div className="ms-2"> {userTotalListenStory} <span className="text-muted fs-4 fw-bold">Listen</span></div>
                          </div>
                          <div className="fs-7 fw-normal text-muted">Earn reward points with every vocals.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    { profileData?.data.premium !== 'none' ?
                      <a href="#" className="card bg-info hoverable h-md-100">
                        <div className="card-body">
                          <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                              <path opacity="0.3" d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z" fill="currentColor" />
                            </svg>
                          </span>
                          <div className="text-white fw-bolder fs-2 mt-5">Premium Member</div>
                          <div className="fw-bold text-white">{profileData?.data.premium.toUpperCase()}</div>
                        </div>
                      </a> :
                      <a href="#" className="card h-md-100">
                        <div className="card-body">
                          <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor" />
                              <path opacity="0.3" d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z" fill="currentColor" />
                            </svg>
                          </span>
                          <div className="text-white fw-bolder fs-2 mt-8">Member</div>
                        </div>
                      </a>
                    }
                  </div>
                </div>
                <div className="card pt-4 mb-6 mb-xl-9">
                  <div className="card-header border-0">
                    <div className="card-title">
                      <h2>History</h2>
                    </div>
                  </div>
                  <div className="card-body pt-0 pb-5">
                    <THSListWrapper userId = {userId ? userId : ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProfileHeader }
