import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {getLastVocals} from './core/_requests'
import {VocalModel} from './core/_models'

type Props = {
  className: string,
}

const LastVocals: React.FC<Props> = ({className}) => {

  const [lastVocals, setLastVocals] = useState<Array<VocalModel>>([])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getLastVocals();
      setLastVocals(res.lastVocals)
    }
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header pt-7">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Last Vocals</span>
          {/* <span className="text-gray-400 mt-1 fw-bold fs-6">Avg. 57 Vocals per day</span> */}
        </h3>
      </div>
      <div className="card-body pt-2">
        <table className="table align-middle table-row-dashed fs-6 gy-3" id="kt_table_widget_4_table">
          <thead>
            <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
              <th className="min-w-100px">Username</th>
              <th className="text-end min-w-100px">Answers</th>
              <th className="text-end min-w-125px">Likes</th>
              <th className="text-end min-w-100px">Comments</th>
            </tr>
          </thead>
          <tbody className="fw-bolder text-gray-600">
            {
              lastVocals?
              lastVocals.map((eVocal, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <span className="text-gray-800 text-hover-primary">{eVocal?.user.name}</span>
                    </td>
                    <td className="text-end">{eVocal?.answersCount}</td>
                    <td className="text-end">
                     {eVocal?.likesCount}
                    </td>
                    <td className="text-end">{eVocal?.reactionsCount}</td>
                  </tr>
                )
              }) : null
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export {LastVocals}
