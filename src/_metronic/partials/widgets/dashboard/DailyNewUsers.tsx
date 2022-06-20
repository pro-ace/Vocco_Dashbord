import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {getusersdaily} from './core/_requests'
import { UserModel, MFPercentModel } from './core/_models';

type Props = {
  className: string,
}

const DailyNewUsers: React.FC<Props> = ({className}) => {
  const [todayUsers, setTodayUsers] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [avgAge, setAvgAge] = useState<number>(0);
  const [lastUsers, setLastUsers] = useState<Array<UserModel | null>>([]);
  const [mfPercent, setMFPercent] = useState<MFPercentModel | null>(null);
  
  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getusersdaily();
      setTotalUsers(res.totalUsers);
      setTodayUsers(res.todayUsers);
      setLastUsers(res.lastUsers);
      setAvgAge(res.avgAge);
      setMFPercent(res.mfPercent);

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
      <div className="card-header pt-5">
        <div className="card-title d-flex flex-column">
          <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">
            <a href="/apps/user-management/users" className='text-white'>
              {todayUsers}
            </a>
          </span>
          <span className="text-gray-400 pt-1 fw-bold fs-6">New users today</span>
        </div>
      </div>
      <div className="card-body d-flex flex-column justify-content-end pe-0">
        <div className='d-flex fs-6 fw-bold align-items-center me-10'>
          <span className="text-gray-500 flex-grow-1 me-4">Avg age</span>
          <span className="fw-boldest text-gray-700 text-xxl-end">{avgAge.toFixed()}</span>
        </div>
        <div className='d-flex fs-6 fw-bold align-items-center me-10'>
          <span className="text-gray-500 flex-grow-1 me-4">Male</span>
          <span className="fw-boldest text-gray-700 text-xxl-end">{mfPercent ? Math.round((mfPercent.male * 100 / mfPercent.total) * 100) / 100 : 0}%</span>
        </div>
        <div className='d-flex fs-6 fw-bold align-items-center me-10'>
          <span className="text-gray-500 flex-grow-1 me-4">Female</span>
          <span className="fw-boldest text-gray-700 text-xxl-end">{mfPercent ? Math.round((mfPercent.female * 100 / mfPercent.total) * 100) / 100 : 0}%</span>
        </div>
        <span className="fs-6 fw-boldest text-gray-800 d-block mb-2">
          <Link to='/apps/user-management/users' className='text-white'>
            Today’s Voccers
          </Link>
        </span>
        <div className="symbol-group symbol-hover flex-nowrap">
          {
            lastUsers.map((eUser, index) => {
              return (
                eUser ? 
                eUser.avatar ? 
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon" key={index}>
                  <img alt="Pic" src={eUser.avatar.url} />
                </div> :
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden" key={index}>
                  <span className="symbol-label bg-warning text-inverse-warning fw-bolder">{eUser.name ? eUser.name.charAt(0).toUpperCase() : "N"}</span>
                </div>
                : null
              )
            })
          }
          {totalUsers > 6 ? 
            <span className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
              <span className="symbol-label bg-light text-gray-400 fs-8 fw-bolder">+{totalUsers * 1 - 6}</span>
            </span> : <></>
          }
        </div>
      </div>
    </div>
  )
}

export {DailyNewUsers}
