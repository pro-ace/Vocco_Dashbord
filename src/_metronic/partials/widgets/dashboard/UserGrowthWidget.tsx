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
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [male, setMale] = useState<number>(0);
  const [female, setFemale] = useState<number>(0);
  const [other, setOther] = useState<number>(0);
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }
    if (totalUsers == null || male == null || female == null || other == null){
      return
    }
    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(totalUsers, male, female, other)
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
  }, [chartRef, totalUsers, male, female, other])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getsubscribecount();
      setSubscribeCount(res.count);
      setGrowthPercent(Math.round(res.growthPercent * 100) / 100);
      setTotalUsers(res.total);
      setMale(res.male);
      setFemale(res.female);
      setOther(res.count - res.male - res.female);

      setTimeout(() => {
        fetchData()
          .catch(console.error);
      }, 7200000)
    }
  
    // call the function
    fetchData()
      .catch(console.error);


  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header pt-5">
        <div className="card-title d-flex flex-column">
          <div className="d-flex align-items-center">
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">{subscribeCount.toLocaleString()}</span>
            {
              growthPercent > 0 ? 
                <span className="badge badge-success fs-base">
                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                  </svg>
                </span> 
                {growthPercent}%</span>
              :
              <span className="badge badge-danger fs-base">
              <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                  <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                </svg>
              </span>
              {growthPercent}%</span>
            }
          </div>
          <span className="text-gray-400 pt-1 fw-bold fs-6">Subscribed users</span>
        </div>
      </div>
      <div className="card-body pt-2 pb-4 d-flex align-items-center">
        <div className="d-flex flex-center me-5 pt-2">
          <div
            ref={chartRef}
          ></div>
        </div>
        <div className="d-flex flex-column content-justify-center w-100">
          <div className="d-flex fs-6 fw-bold align-items-center">
            <div className="bullet w-8px h-6px rounded-2 bg-primary me-3"></div>
            <div className="text-gray-500 flex-grow-1 me-4">Male</div>
            <div className="fw-boldest text-gray-700 text-xxl-end">{totalUsers ? (Math.round(male * 100 / totalUsers) * 100) / 100 : 0}%</div>
          </div>
          <div className="d-flex fs-6 fw-bold align-items-center my-3">
            <div className="bullet w-8px h-6px rounded-2 bg-danger me-3"></div>
            <div className="text-gray-500 flex-grow-1 me-4">Female</div>
            <div className="fw-boldest text-gray-700 text-xxl-end">{totalUsers ? (Math.round(female * 100 / totalUsers) * 100) / 100 : 0}%</div>
          </div>
          <div className="d-flex fs-6 fw-bold align-items-center">
            <div className="bullet w-8px h-6px rounded-2 me-3" style={{backgroundColor: '#0bb783'}}></div>
            <div className="text-gray-500 flex-grow-1 me-4">Other</div>
            <div className="fw-boldest text-gray-700 text-xxl-end">{totalUsers ? (Math.round(other * 100 / totalUsers) * 100) / 100 : 0}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const chartOptions = (total: number, males: number, females: number, others: number): ApexOptions => {
  return {
    series: [males, females, others, total - males - females - others],
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
    colors: ['#3699ff', '#f64e60', '#0bb783', '#E4E6EF'],
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
