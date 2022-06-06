/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {getpersessiontime} from './core/_requests'
import {IdCreatedAtModel} from './core/_models'

type Props = {
  className: string,
}

const GetSeesionPerTime: React.FC<Props> = ({className}) => {
  const [timePerSessions, setTimePerSessions] = useState<Array<IdCreatedAtModel>>([]);
  const [avgSessionTime, setAvgSessionTime] = useState<number>(0);
  const chartRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    if (!timePerSessions || !timePerSessions.length) {
      return
    }

    var date = new Date(timePerSessions[0].createdAt);
    var countArray = [];
    var dayArray = [];
    var maxValue = 0;
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1 , 0).getDate();
    for (var dy = 1 ; dy <= lastDay; dy++){
      let avgValue = 0;
      let sDay = new Date(date.getFullYear(), date.getMonth() , dy);
      dayArray.push(sDay.toLocaleDateString('en-us', { month:"short", day: 'numeric'}));
      let eDay = new Date(date.getFullYear(), date.getMonth() , dy + 1);
      let count = 0;
      let time = 0;
      timePerSessions.map((eData: IdCreatedAtModel, index: number) => {
        if (new Date(eData.createdAt) >= sDay && new Date(eData.createdAt) < eDay){
          time += eData.value ? eData.value : 0;
          count++;
        }
        return true;
      });
      if (count > 0){
        avgValue = Math.round(time / count);
      }
      if (avgValue > maxValue) maxValue = avgValue;
      countArray.push(avgValue);
    }
    
    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(countArray, dayArray, maxValue)
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, timePerSessions])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getpersessiontime();
      setTimePerSessions(res.data);
      setAvgSessionTime(res.total);
    }
  
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Time per session</span>
        </h3>
      </div>
      <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
        <div className="px-9 mb-5">
          <div className="d-flex mb-2">
            <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1 ls-n2">{`${Math.floor(avgSessionTime / 60)}m ${avgSessionTime % 60}s`}</span>
          </div>
        </div>
        <div
          id='chartContainer'
          className='min-h-auto ps-4 pe-6'
          ref={chartRef}
        ></div>
      </div>
    </div>
  )
}

const chartOptions = (cArray: Array<number>, dArray: Array<string>, max: number): ApexOptions => {
  const chartHeight = 350;
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-border-dashed-color');
  const baseColor = getCSSVariableValue('--bs-success');
  const lightColor = getCSSVariableValue('--bs-info');
  return {
    series: [{
      name: 'Open App Count',
      data: cArray
    }],            
    chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: chartHeight,
        toolbar: {
            show: false
        }
    },
    plotOptions: {

    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 80, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor]
    },
    xaxis: {
        categories: dArray,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        tickAmount: 6,
        labels: {
            rotate: 0,
            rotateAlways: true,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: baseColor,
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        tickAmount: 4,
        max: max * 2 < 5000 ? max * 2 : 5000,
        min: 0,
        labels: {
            style: {
                colors: labelColor,
                fontSize: '12px'
            },
            formatter: function (val) {
                return '' + val
            }
        }
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
        y: {
            formatter: function (val) {
                return "" + val
            }
        }
    },
    colors: [lightColor],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        strokeWidth: 3
    }
  }
}

export {GetSeesionPerTime}
