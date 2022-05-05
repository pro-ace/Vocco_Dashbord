/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string,
}

const DailyNewUsers: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions()
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
  }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-5">
        {/* begin::Title */}
        <div className="card-title d-flex flex-column">
          {/* begin::Amount */}
          <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">6.3k</span>
          {/* end::Amount */}
          {/* begin::Subtitle */}
          <span className="text-gray-400 pt-1 fw-bold fs-6">New users today</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body d-flex flex-column justify-content-end pe-0">
        {/* begin::Title */}
        <div className='d-flex fs-6 fw-bold align-items-center me-10'>
          <span className="text-gray-500 flex-grow-1 me-4">Avg age</span>
          <span className="fw-boldest text-gray-700 text-xxl-end">26</span>
        </div>
        <div className='d-flex fs-6 fw-bold align-items-center me-10'>
          <span className="text-gray-500 flex-grow-1 me-4">Male</span>
          <span className="fw-boldest text-gray-700 text-xxl-end">67%</span>
        </div>
        <div className='d-flex fs-6 fw-bold align-items-center me-10'>
          <span className="text-gray-500 flex-grow-1 me-4">Female</span>
          <span className="fw-boldest text-gray-700 text-xxl-end">33%</span>
        </div>
        <span className="fs-6 fw-boldest text-gray-800 d-block mb-2">Today’s Voccers</span>
        {/* end::Title */}
        {/* begin::Users group */}
        <div className="symbol-group symbol-hover flex-nowrap">
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
            <span className="symbol-label bg-warning text-inverse-warning fw-bolder">A</span>
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
            <img alt="Pic" src="/media/avatars/300-11.jpg" />
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
            <span className="symbol-label bg-primary text-inverse-primary fw-bolder">S</span>
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
            <img alt="Pic" src="/media/avatars/300-2.jpg" />
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
            <span className="symbol-label bg-danger text-inverse-danger fw-bolder">P</span>
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
            <img alt="Pic" src="/media/avatars/300-12.jpg" />
          </div>
          <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
            <span className="symbol-label bg-light text-gray-400 fs-8 fw-bolder">+42</span>
          </a>
        </div>
        {/* end::Users group */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (): ApexOptions => {
  const chartHeight = 80;
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-border-dashed-color');
  const baseColor = getCSSVariableValue('--bs-primary');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');
  return {
    series: [{
      name: 'Sales',
      data: [30, 60, 53, 45, 60, 75, 53]
    }, ],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: chartHeight,
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 6
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 9,
        colors: ['transparent']
    },
    xaxis: {                
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        },
        crosshairs: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        }
    },
    fill: {
        type: 'solid'
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        x: {
            formatter: function (val) {
                return 'Feb: ' + val;
            }
        },
        y: {
            formatter: function (val) {
                return val + "%" 
            }
        }
    },
    colors: [baseColor, secondaryColor],
    grid: {
        padding: {
            left: 10,
            right: 10
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }             
    }
  }
}

export {DailyNewUsers}
