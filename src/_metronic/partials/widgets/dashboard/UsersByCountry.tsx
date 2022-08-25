/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState, Fragment, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryContext } from '../../../../Context'
import {getusersbycountry} from './core/_requests'

type Props = {
  className: string,
}

type CountryData = {
  users_count: number,
  country: string
}

const UsersByCountry: React.FC<Props> = ({className}) => {

  const navigate = useNavigate();
  const [usersCountryData, setUsersCountryData] = useState<Array<CountryData>>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const {setCountry} = useContext(CountryContext)

  const setCountryFunc = (country:string) => {
    setCountry(country)
    navigate('/apps/user-management/users', {replace: true})
  }

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getusersbycountry();
      setUsersCountryData(res.data);
      setTotalUsers(res.totalCount);

      setTimeout(() => {
        fetchData()
          .catch(console.error);
      }, 7200000)
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
      </div>
      <div
        className="card-body pt-0 scroll-y h-200px"
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-max-height='auto'
        data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header'
        data-kt-scroll-wrappers='#kt_content, #kt_chat_contacts_body'
        data-kt-scroll-offset='0px'
      >
        {
          usersCountryData ? usersCountryData.map((eCountry, index) => {
            const flag = `${eCountry.country.toLowerCase().replace(" ", "-")}.svg`
            return (
              <Fragment key={index}>
                <div className="d-flex flex-stack">
                  <img src={`media/flags/${flag}`} className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                  <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                    <div
                      className="me-5 cursor-pointer"
                      onClick={() => {setCountryFunc(eCountry.country)}}
                    >
                      {/* <Link to={`/apps/user-management/users`} className="text-gray-800 fw-bolder text-hover-primary fs-6"> */}
                        {eCountry.country}
                      {/* </Link> */}
                      {/* <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">{eCountry.country}</a> */}
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">
                        {eCountry.users_count}
                      </span>
                      <div className="m-0">
                        <span className="badge badge-success fs-base">
                          {
                            totalUsers ? Math.round((eCountry.users_count * 100 / totalUsers) * 100) / 100 : 0
                          }{"%"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="separator separator-dashed my-3"></div>
              </Fragment>
            )
          }) : null
        }
      </div>
    </div>
  )
}

export {UsersByCountry}
