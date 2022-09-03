/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { getActiveUsers } from './core/_requests'
import { ActiveUserModel } from './core/_models'

type Props = {
    className: string
}

const ActiveStatus: React.FC<Props> = ({ className }) => {

    const [activeUserData, setActiveUserData] = useState<ActiveUserModel>(
        {
            "totalCount": 0,
            "activeUserCount": 0,
            "inActiveUserCount": 0,
            "creatorCount": 0,
            "consumerCount": 0
        }
    );

    const chartRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!chartRef.current) {
            return
        }
        if (activeUserData?.totalCount == null || activeUserData?.activeUserCount == null || activeUserData?.inActiveUserCount == null) {
            return
        }
        const chart = new ApexCharts(
            chartRef.current,
            chartOptions(activeUserData?.totalCount, activeUserData?.activeUserCount, activeUserData?.inActiveUserCount)
        )
        if (chart) {
            chart.render()
        }

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
    }, [chartRef, activeUserData])

    useEffect(() => {
        const fetchData = async () => {
            const { data: res } = await getActiveUsers();
            setActiveUserData(res);

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
                        <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">{activeUserData?.activeUserCount.toLocaleString()}</span>
                        {/* {
                            activeUserData?.growthPercent > 0 ?
                                <span className="badge badge-success fs-base">
                                    <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    {activeUserData?.growthPercent}%
                                </span>
                            :
                            <span className="badge badge-danger fs-base">
                                <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                    </svg>
                                </span>
                                {activeUserData?.growthPercent}%</span>
                        } */}
                    </div>
                    <span className="text-gray-400 pt-1 fw-bold fs-6">Active users</span>
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
                        <div className="text-gray-500 flex-grow-1 me-4">Active Users</div>
                        <div className="fw-boldest text-gray-700 text-xxl-end">{activeUserData ? (Math.round(activeUserData.activeUserCount * 100 / activeUserData.totalCount) * 100) / 100 : 0}%</div>
                    </div>
                    <div className="d-flex fs-6 fw-bold align-items-center my-3">
                        <div className="bullet w-8px h-6px rounded-2 bg-danger me-3"></div>
                        <div className="text-gray-500 flex-grow-1 me-4">Inactive Users</div>
                        <div className="fw-boldest text-gray-700 text-xxl-end">{activeUserData ? (Math.round(activeUserData.inActiveUserCount * 100 / activeUserData.totalCount) * 100) / 100 : 0}%</div>
                    </div>
                    <div className="d-flex fs-6 fw-bold align-items-center">
                        <div className="bullet w-8px h-6px rounded-2 bg-success me-3"></div>
                        <div className="text-gray-500 flex-grow-1 me-4">Creators Count</div>
                        <div className="fw-boldest text-gray-700 text-xxl-end">{activeUserData ? activeUserData.creatorCount : 0}</div>
                    </div>
                    <div className="d-flex fs-6 fw-bold align-items-center my-3">
                        <div className="bullet w-8px h-6px rounded-2 bg-warning me-3"></div>
                        <div className="text-gray-500 flex-grow-1 me-4">Consumers Count</div>
                        <div className="fw-boldest text-gray-700 text-xxl-end">{activeUserData ? activeUserData.consumerCount : 0}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const chartOptions = (total: number, active: number, inactive: number ): ApexOptions => {
    return {
        series: [active, inactive],
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
        colors: ['#3699ff', '#f64e60'],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 8280
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
            formatter: function (val, opts) {
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

export { ActiveStatus }
