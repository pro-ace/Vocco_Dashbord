import React, {useEffect, useState} from 'react'
import {getTopUsers} from './core/_requests'
import {topUserModel} from './core/_models'
type Props = {
  className: string,
}

const TopUsers: React.FC<Props> = ({className}) => {
  const [topUsers, setTopUsers] = useState<topUserModel | null>(null);

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getTopUsers();
      console.log(res);
      setTopUsers(res);
    }
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header pt-7">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Top users(Top 100)</span>
        </h3>
      </div>
      <div className="card-body pt-2">
        <table className="table align-middle table-row-dashed fs-6 gy-3" id="kt_table_widget_4_table">
          <thead>
            <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
              <th className="">USERNAME</th>
              <th className=" min-w-100px">EMAIL</th>
              <th className="text-end">LIKES</th>
              <th className="text-end">REACTIONS</th>
            </tr>
          </thead>
          <tbody className="fw-bolder text-gray-600">
            {
              topUsers?.data ? 
              topUsers.data.map((eData, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">{eData.user_name}</a>
                    </td>
                    <td className="">{eData.user_email}</td>
                    <td className="text-end">
                      {eData.likes_sum}
                    </td>
                    <td className="text-end">{eData.reaction_sum}</td>
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

export {TopUsers}
