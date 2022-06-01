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
        if (user.country === "United States") countryData.US.t++;
        if (user.country === "United Kingdom") countryData.UK.t++;
        if (user.country === "Canada") countryData.CA.t++;
        if (user.country === "Spain") countryData.SP.t++;
        if (user.country === "Belgium") countryData.BE.t++;
        if (user.country === "France") countryData.FR.t++;
        if (user.country === "Germany") countryData.GE.t++;

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
        </h3>
        {/* <div className="card-toolbar">
          <a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
        </div> */}
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
                            usersCountryData?.US.t && usersCountryData?.US.y ? Math.round(((usersCountryData?.US.t - usersCountryData?.US.y) * 100 / usersCountryData?.US.y) * 100) / 100  :  usersCountryData?.US.t ? 100 : 0 :
                            eCountry.ab === "UK" ? 
                            usersCountryData?.UK.t && usersCountryData?.UK.y ? Math.round(((usersCountryData?.UK.t - usersCountryData?.UK.y) * 100 / usersCountryData?.UK.y) * 100) / 100  : usersCountryData?.UK.t ? 100 : 0 :
                            eCountry.ab === "CA" ? 
                            usersCountryData?.CA.t && usersCountryData?.CA.y ? Math.round(((usersCountryData?.CA.t - usersCountryData?.CA.y) * 100 / usersCountryData?.CA.y) * 100) / 100  : usersCountryData?.CA.t ? 100 : 0 :
                            eCountry.ab === "FR" ? 
                            usersCountryData?.FR.t && usersCountryData?.FR.y ? Math.round(((usersCountryData?.FR.t - usersCountryData?.FR.y) * 100 / usersCountryData?.FR.y) * 100) / 100  : usersCountryData?.FR.t ? 100 : 0 :
                            eCountry.ab === "BE" ? 
                            usersCountryData?.BE.t && usersCountryData?.BE.y ? Math.round(((usersCountryData?.BE.t - usersCountryData?.BE.y) * 100 / usersCountryData?.BE.y) * 100) / 100  : usersCountryData?.BE.t ? 100 : 0 :
                            eCountry.ab === "SP" ? 
                            usersCountryData?.SP.t && usersCountryData?.SP.y ? Math.round(((usersCountryData?.SP.t - usersCountryData?.SP.y) * 100 / usersCountryData?.SP.y) * 100) / 100  : usersCountryData?.SP.t ? 100 : 0 :
                            eCountry.ab === "GE" ? 
                            usersCountryData?.GE.t && usersCountryData?.GE.y ? Math.round(((usersCountryData?.GE.t - usersCountryData?.GE.y) * 100 / usersCountryData?.GE.y) * 100) / 100  : usersCountryData?.GE.t ? 100 : 0 :
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
