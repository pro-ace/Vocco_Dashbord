/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {getuserscountmonth} from './core/_requests'
import { useState } from 'react';

type Props = {
  className: string,
}

const TotalNumberOfNewUserMonth: React.FC<Props> = ({className}) => {

  const [monthTotal, setMonthTotal] = useState<number>(0);
  const [growthPercent, setGrowthPercent] = useState<number>(0);
  
  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getuserscountmonth();
      setMonthTotal(res.count);
      setGrowthPercent(res.growthPercent);
    }
  
    // call the function
    fetchData()
      .catch(console.error);


  }, [])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-5">
        {/* begin::Title */}
        <div className="card-title d-flex flex-column">
          {/* begin::Info */}
          <div className="d-flex align-items-center">
            {/* begin::Amount */}
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">{monthTotal}</span>
            {/* end::Amount */}
            {/* begin::Badge */}
            {
              growthPercent > 0 ? 
                <span className="badge badge-success fs-base">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span> 
                {/* end::Svg Icon */}{growthPercent}%</span>
              :
              <span className="badge badge-danger fs-base">
              {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
              <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                  <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                </svg>
              </span>
              {/* end::Svg Icon */}{growthPercent}%</span>
            }
            {/* end::Badge */}
          </div>
          {/* end::Info */}
          {/* begin::Subtitle */}
          <span className="text-gray-400 pt-1 fw-bold fs-6">New users this month</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body d-flex align-items-end pt-0">
        {/* begin::Progress */}
        <div className="d-flex align-items-center flex-column mt-3 w-100">
          <div className="d-flex justify-content-between w-100 mt-auto mb-2">
            <span className="fw-boldest fs-6 text-dark">{monthTotal} to Goal</span>
            <span className="fw-bolder fs-6 text-gray-400">{monthTotal * 100 / 50000}%</span>
          </div>
          <div className="h-8px mx-3 w-100 bg-light-success rounded">
            <div className="bg-success rounded h-8px" style={{width: `${monthTotal * 100 / 50000}%`}}></div>
          </div>
        </div>
        {/* end::Progress */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TotalNumberOfNewUserMonth}
