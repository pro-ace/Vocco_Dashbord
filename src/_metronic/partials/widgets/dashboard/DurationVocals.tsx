import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {getRecordsDuration} from './core/_requests'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
}

const DurationVocals: React.FC<Props> = ({className, chartColor, chartHeight}) => {

  const [totalRecords, setTotalRecords] = useState<Array<{
    duration: number
    createdAt: Date
    answers: Array<{duration: number}>
  }>>([]);
  const [total, setTotal] =  useState<number>(0);
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    if (!totalRecords) {
      return 
    }
    var date = new Date();
    var dayArray = [];
    var durationArray = [];
    var answerDurationArray = [];
    var options = { month: 'short'} as const;
    for (var dm = 0 ; dm < 12; dm++){
      let sDay = new Date(date.getFullYear(), dm , 1);
      let eDay = new Date(date.getFullYear(), dm + 1 , 0);
      let duration = 0;
      let durationCount = 0;
      let aDuration = 0;
      let ansersNumber = 0;
      totalRecords.map((eRecord) => {
        if (new Date(eRecord.createdAt) >= sDay && new Date(eRecord.createdAt) < eDay){
          duration += eRecord.duration * 1;
          durationCount++;
          eRecord.answers.map(ea => {
            aDuration += ea.duration;
            ansersNumber++;
          })
        }
        return true
      });
      durationArray.push(durationCount ? Math.round(duration / durationCount) : 0);
      answerDurationArray.push(ansersNumber ? Math.round(aDuration / ansersNumber) : 0);
      dayArray.push(new Intl.DateTimeFormat('en-US', options).format(sDay));
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight, durationArray,answerDurationArray, dayArray))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, totalRecords, chartColor, chartHeight])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getRecordsDuration();
      setTotal(res.total);
      setTotalRecords(res.totalRecords);
    }
    
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
        <div className='d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3'>
          <div className='me-2'>
            <span className='fw-bolder text-gray-800 d-block fs-3'>Duration of vocals</span>
          </div>

          <div className={`fw-bolder fs-3 text-${chartColor}`}>{`${(total / 60).toFixed()}m ${total % 60}`}</div>
        </div>
        <div id='chartContainer' ref={chartRef} className='mixed-widget-10-chart'></div>
      </div>
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string, durArray: Array<number>, aDurArray: Array<number>, dayArray: Array<string>): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')
  const baseColor = getCSSVariableValue('--bs-' + chartColor)

  return {
    series: [
      {
        name: 'Vocal',
        data: durArray,
      },
      {
        name: 'Answer',
        data: aDurArray,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: dayArray,
      tickAmount:6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return val + 's'
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}

export {DurationVocals}
