/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState, Fragment} from 'react'
import {getusersbycountry} from './core/_requests'

type Props = {
  className: string,
}

type CountryData = {
  US: number,
  UK: number,
  FR: number,
  CA: number,
  BE: number,
  GE: number,
  SP: number
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

  const [usersCountryData, setUsersCountryData] = useState<CountryData | null>(null);
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getusersbycountry();
      
      let countryData = {
        "US": 0,
        "UK": 0,
        "FR": 0,
        "SP": 0,
        "BE": 0,
        "GE": 0,
        "CA": 0
      }
      setTotalUsers(res.users.length);
      res.users.map((user) => {
        if (user.country === "United States") countryData.US++;
        if (user.country === "United Kingdom") countryData.UK++;
        if (user.country === "Canada") countryData.CA++;
        if (user.country === "Spain") countryData.SP++;
        if (user.country === "Belgium") countryData.BE++;
        if (user.country === "France") countryData.FR++;
        if (user.country === "Germany") countryData.GE++;
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
                          usersCountryData?.US :
                          eCountry.ab === "UK" ? 
                          usersCountryData?.UK :
                          eCountry.ab === "CA" ? 
                          usersCountryData?.CA :
                          eCountry.ab === "FR" ? 
                          usersCountryData?.FR:
                          eCountry.ab === "BE" ? 
                          usersCountryData?.BE :
                          eCountry.ab === "SP" ? 
                          usersCountryData?.SP :
                          eCountry.ab === "GE" ? 
                          usersCountryData?.GE : 0
                        }
                      </span>
                      <div className="m-0">
                        <span className="badge badge-success fs-base">
                          {
                            eCountry.ab === "US" ? 
                            totalUsers && usersCountryData?.US ? Math.round((usersCountryData?.US * 100 / totalUsers) * 100) / 100 : 0 :
                            eCountry.ab === "UK" ? 
                            totalUsers && usersCountryData?.UK ? Math.round((usersCountryData?.UK * 100 / totalUsers) * 100) / 100 : 0 :
                            eCountry.ab === "CA" ? 
                            totalUsers && usersCountryData?.CA ? Math.round((usersCountryData?.CA * 100 / totalUsers) * 100) / 100 : 0 :
                            eCountry.ab === "FR" ? 
                            totalUsers && usersCountryData?.FR ? Math.round((usersCountryData?.FR * 100 / totalUsers) * 100) / 100 : 0 :
                            eCountry.ab === "BE" ? 
                            totalUsers && usersCountryData?.BE ? Math.round((usersCountryData?.BE * 100 / totalUsers) * 100) / 100 : 0 :
                            eCountry.ab === "SP" ? 
                            totalUsers && usersCountryData?.SP ? Math.round((usersCountryData?.SP * 100 / totalUsers) * 100) / 100 : 0 :
                            eCountry.ab === "GE" ? 
                            totalUsers && usersCountryData?.GE ? Math.round((usersCountryData?.GE * 100 / totalUsers) * 100) / 100 : 0 :
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
