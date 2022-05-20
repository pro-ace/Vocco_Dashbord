/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getsubscribecount} from './core/_requests'

type Props = {
  className: string
}

const UserGrowthWidget: React.FC<Props> = ({className}) => {

  const [subscribeCount, setSubscribeCount] = useState<number>(0);
  const [growthPercent, setGrowthPercent] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number | null>(null);
  const [funRecords, setFunRecords] = useState<number | null>(null);
  const [adultsRecords, setAdultsRecords] = useState<number | null>(null);
  const [educationRecords, setEducationRecords] = useState<number | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }
    if (totalRecords == null || funRecords == null || adultsRecords == null || educationRecords == null){
      return
    }
    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(totalRecords, funRecords, adultsRecords, educationRecords)
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, totalRecords, funRecords, adultsRecords, educationRecords])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getsubscribecount();
      setSubscribeCount(res.count);
      setGrowthPercent(res.growthPercent);
      setTotalRecords(res.totalRecords);
      setFunRecords(res.funRecords);
      setAdultsRecords(res.adultsRecords);
      setEducationRecords(res.educationRecords);
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
            {/* begin::Currency */}
            {/* <span className="fs-4 fw-bold text-gray-400 me-1 align-self-start">$</span> */}
            {/* end::Currency */}
            {/* begin::Amount */}
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">{subscribeCount}</span>
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
          <span className="text-gray-400 pt-1 fw-bold fs-6">Subscribed users</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-2 pb-4 d-flex align-items-center">
        {/* begin::Chart */}
        <div className="d-flex flex-center me-5 pt-2">
          <div
            ref={chartRef}
          ></div>
        </div>
        {/* end::Chart */}
        {/* begin::Labels */}
        <div className="d-flex flex-column content-justify-center w-100">
          {/* begin::Label */}
          <div className="d-flex fs-6 fw-bold align-items-center">
            {/* begin::Bullet */}
            <div className="bullet w-8px h-6px rounded-2 bg-danger me-3"></div>
            {/* end::Bullet */}
            {/* begin::Label */}
            <div className="text-gray-500 flex-grow-1 me-4">Fun</div>
            {/* end::Label */}
            {/* begin::Stats */}
            <div className="fw-boldest text-gray-700 text-xxl-end">{funRecords}</div>
            {/* end::Stats */}
          </div>
          {/* end::Label */}
          {/* begin::Label */}
          <div className="d-flex fs-6 fw-bold align-items-center my-3">
            {/* begin::Bullet */}
            <div className="bullet w-8px h-6px rounded-2 bg-primary me-3"></div>
            {/* end::Bullet */}
            {/* begin::Label */}
            <div className="text-gray-500 flex-grow-1 me-4">For adults</div>
            {/* end::Label */}
            {/* begin::Stats */}
            <div className="fw-boldest text-gray-700 text-xxl-end">{adultsRecords}</div>
            {/* end::Stats */}
          </div>
          {/* end::Label */}
          {/* begin::Label */}
          <div className="d-flex fs-6 fw-bold align-items-center">
            {/* begin::Bullet */}
            <div className="bullet w-8px h-6px rounded-2 me-3" style={{backgroundColor: '#0bb783'}}></div>
            {/* end::Bullet */}
            {/* begin::Label */}
            <div className="text-gray-500 flex-grow-1 me-4">Educations</div>
            {/* end::Label */}
            {/* begin::Stats */}
            <div className="fw-boldest text-gray-700 text-xxl-end">{educationRecords}</div>
            {/* end::Stats */}
          </div>
          {/* end::Label */}
        </div>
        {/* end::Labels */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (total: number, funs: number, adults: number, educations: number): ApexOptions => {
  return {
    series: [funs, adults, educations, total - funs - adults - educations],
    chart: {
      height: 70,
      type: 'donut',
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#f64e60', '#3699ff', '#0bb783', '#E4E6EF'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function(val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex]
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
}

export {UserGrowthWidget}
