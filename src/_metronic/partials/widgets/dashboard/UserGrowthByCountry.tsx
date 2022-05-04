/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const UserGrowthByCountry: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Growth by country</span>
          <span className="text-gray-400 pt-2 fw-bold fs-6">Statistics by Countries</span>
        </h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-5">
        {/* begin::Chart container */}
          {/* <div id="kt_charts_widget_15_chart" className="min-h-auto ps-4 pe-6 mb-3 h-350px"></div> */}
        {/* end::Chart container */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {UserGrowthByCountry}
