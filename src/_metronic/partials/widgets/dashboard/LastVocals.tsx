<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
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
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">{eVocal?.title}</a>
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
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const LastVocals: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Last Vocals</span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">Avg. 57 Vocals per day</span>
        </h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-2">
        {/* begin::Table */}
        <table className="table align-middle table-row-dashed fs-6 gy-3" id="kt_table_widget_4_table">
          {/* begin::Table head */}
          <thead>
            {/* begin::Table row */}
            <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
              <th className="min-w-100px">Username</th>
              <th className="text-end min-w-100px">Listens</th>
              <th className="text-end min-w-125px">Likes</th>
              <th className="text-end min-w-100px">Comments</th>
            </tr>
            {/* end::Table row */}
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody className="fw-bolder text-gray-600">
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">XGY-346</a>
              </td>
              <td className="text-end">123</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">234</a>
              </td>
              <td className="text-end">123</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">YHD-047</a>
              </td>
              <td className="text-end">52</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">454</a>
              </td>
              <td className="text-end">25</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">SRR-678</a>
              </td>
              <td className="text-end">1</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">23</a>
              </td>
              <td className="text-end">1,630</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">PXF-534</a>
              </td>
              <td className="text-end">3</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">34</a>
              </td>
              <td className="text-end">119</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">XGD-249</a>
              </td>
              <td className="text-end">2</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">33</a>
              </td>
              <td className="text-end">660</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">SKP-035</a>
              </td>
              <td className="text-end">2</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">3412</a>
              </td>
              <td className="text-end">290</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">SKP-567</a>
              </td>
              <td className="text-end">7</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">123</a>
              </td>
              <td className="text-end">590</td>
            </tr>
          </tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {LastVocals}
>>>>>>> 7efb2ae9bfd5ff75ec627c17f0cf3af148a7c714
