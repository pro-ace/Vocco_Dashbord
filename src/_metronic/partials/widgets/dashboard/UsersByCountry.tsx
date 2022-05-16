<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState, Fragment} from 'react'
import {getusersbycountry} from './core/_requests'

type Props = {
  className: string,
}

type CountryData = {
  US: {
    y: number,
    t: number
  },
  UK: {
    y: number,
    t: number
  },
  FR: {
    y: number,
    t: number
  },
  CA: {
    y: number,
    t: number
  },
  BE: {
    y: number,
    t: number
  },
  GE: {
    y: number,
    t: number
  },
  SP: {
    y: number,
    t: number
  }
}

const countries = [
  {
    country: "United States",
    ab: "US",
    flag: "united-states.svg"
  },
  {
    country: "United Kingdom",
    ab: "UK",
    flag: "united-kingdom.svg"
  },
  {
    country: "France",
    ab: "FR",
    flag: "france.svg"
  },
  {
    country: "Spain",
    ab: "SP",
    flag: "spain.svg"
  },
  {
    country: "Belium",
    ab: "BE",
    flag: "belgium.svg"
  },
  {
    country: "Germany",
    ab: "GE",
    flag: "germany.svg"
  },
  {
    country: "Canada",
    ab: "CA",
    flag: "canada.svg"
  }
]

const UsersByCountry: React.FC<Props> = ({className}) => {

  const [usersCountryData, setUsersCountryData] = useState<CountryData | null>(null)

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getusersbycountry();
      
      let countryData = {
        "US": {
          y: 0,
          t: 0
        },
        "UK": {
          y: 0,
          t: 0
        },
        "FR": {
          y: 0,
          t: 0
        },
        "SP": {
          y: 0,
          t: 0
        },
        "BE": {
          y: 0,
          t: 0
        },
        "GE": {
          y: 0,
          t: 0
        },
        "CA": {
          y: 0,
          t: 0
        }
      }
      let date = new Date();
      let ysDay = new Date(date.getFullYear(), date.getMonth() , date.getDate() - 1);
      let yeDay = new Date(date.getFullYear(), date.getMonth() , date.getDate());
      let neDay = new Date(date.getFullYear(), date.getMonth() , date.getDate() + 1);
      res.users.map((user) => {
        if (new Date(user.createdAt) >= ysDay && new Date(user.createdAt) < yeDay){
          if (user.country === "United States") countryData.US.y++;
          if (user.country === "United Kingdom") countryData.UK.y++;
          if (user.country === "Canada") countryData.CA.y++;
          if (user.country === "Spain") countryData.SP.y++;
          if (user.country === "Belgium") countryData.BE.y++;
          if (user.country === "France") countryData.FR.y++;
          if (user.country === "Germany") countryData.GE.y++;
        } 
        if (new Date(user.createdAt) >= yeDay && new Date(user.createdAt) < neDay){
          if (user.country === "United States") countryData.US.t++;
          if (user.country === "United Kingdom") countryData.UK.t++;
          if (user.country === "Canada") countryData.CA.t++;
          if (user.country === "Spain") countryData.SP.t++;
          if (user.country === "Belgium") countryData.BE.t++;
          if (user.country === "France") countryData.FR.t++;
          if (user.country === "Germany") countryData.GE.t++;
        } 

        return true;
      })
      setUsersCountryData(countryData);
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header pt-7 mb-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Users by Country</span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">20 countries share 97% Users</span>
        </h3>
        <div className="card-toolbar">
          <a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
        </div>
      </div>
      <div className="card-body pt-0">
        {
          countries.map((eCountry, index) => {
            return (
              <Fragment key={index}>
                <div className="d-flex flex-stack">
                  <img src={`media/flags/${eCountry.flag}`} className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                  <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                    <div className="me-5">
                      <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">{eCountry.country}</a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">
                        {
                          eCountry.ab === "US" ? 
                          usersCountryData?.US.t :
                          eCountry.ab === "UK" ? 
                          usersCountryData?.UK.t :
                          eCountry.ab === "CA" ? 
                          usersCountryData?.CA.t :
                          eCountry.ab === "FR" ? 
                          usersCountryData?.FR.t :
                          eCountry.ab === "BE" ? 
                          usersCountryData?.BE.t :
                          eCountry.ab === "SP" ? 
                          usersCountryData?.SP.t :
                          eCountry.ab === "GE" ? 
                          usersCountryData?.GE.t : 0
                        }
                      </span>
                      <div className="m-0">
                        <span className="badge badge-success fs-base">
                          {
                            eCountry.ab === "US" ? 
                            usersCountryData?.US.t && usersCountryData?.US.y ? Math.round(((usersCountryData?.US.t - usersCountryData?.US.y) * 100 / usersCountryData?.US.y) * 100) / 100  : 0 :
                            eCountry.ab === "UK" ? 
                            usersCountryData?.UK.t && usersCountryData?.UK.y ? Math.round(((usersCountryData?.UK.t - usersCountryData?.UK.y) * 100 / usersCountryData?.UK.y) * 100) / 100  : 0 :
                            eCountry.ab === "CA" ? 
                            usersCountryData?.CA.t && usersCountryData?.CA.y ? Math.round(((usersCountryData?.CA.t - usersCountryData?.CA.y) * 100 / usersCountryData?.CA.y) * 100) / 100  : 0 :
                            eCountry.ab === "FR" ? 
                            usersCountryData?.FR.t && usersCountryData?.FR.y ? Math.round(((usersCountryData?.FR.t - usersCountryData?.FR.y) * 100 / usersCountryData?.FR.y) * 100) / 100  : 0 :
                            eCountry.ab === "BE" ? 
                            usersCountryData?.BE.t && usersCountryData?.BE.y ? Math.round(((usersCountryData?.BE.t - usersCountryData?.BE.y) * 100 / usersCountryData?.BE.y) * 100) / 100  : 0 :
                            eCountry.ab === "SP" ? 
                            usersCountryData?.SP.t && usersCountryData?.SP.y ? Math.round(((usersCountryData?.SP.t - usersCountryData?.SP.y) * 100 / usersCountryData?.SP.y) * 100) / 100  : 0 :
                            eCountry.ab === "GE" ? 
                            usersCountryData?.GE.t && usersCountryData?.GE.y ? Math.round(((usersCountryData?.GE.t - usersCountryData?.GE.y) * 100 / usersCountryData?.GE.y) * 100) / 100  : 0 :
                            0
                          }{"%"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="separator separator-dashed my-3"></div>
              </Fragment>
            )
          })
        }
      </div>
      {/* end::Body */}
    </div>
  )
}

export {UsersByCountry}
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const UsersByCountry: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7 mb-5">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Users by Country</span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">20 countries share 97% Users</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className="card-toolbar">
          <a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-0">
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/united-states.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">United States</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">9,763</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}2.6%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/brazil.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Brasil</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">4,062</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-danger fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}0.4%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/turkey.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Turkey</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">1,680</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}0.2%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/france.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">France</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">849</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}4.1%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/india.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">India</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">604</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-danger fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}8.3%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/sweden.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Sweden</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}1.9%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/canada.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Canada</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}1.9%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className="separator separator-dashed my-3"></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className="d-flex flex-stack">
          {/* begin::Flag */}
          <img src="media/flags/italy.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
          {/* end::Flag */}
          {/* begin::Section */}
          <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
            {/* begin::Content */}
            <div className="me-5">
              {/* begin::Title */}
              <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Italy</a>
              {/* end::Title */}
            </div>
            {/* end::Content */}
            {/* begin::Info */}
            <div className="d-flex align-items-center">
              {/* begin::Number */}
              <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
              {/* end::Number */}
              {/* begin::Label */}
              <div className="m-0">
                {/* begin::Label */}
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span>
                {/* end::Svg Icon */}1.9%</span>
                {/* end::Label */}
              </div>
              {/* end::Label */}
            </div>
            {/* end::Info */}
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        
      </div>
      {/* end::Body */}
    </div>
  )
}

export {UsersByCountry}
>>>>>>> 7efb2ae9bfd5ff75ec627c17f0cf3af148a7c714
