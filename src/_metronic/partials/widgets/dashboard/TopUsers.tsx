<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const TopUsers: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Top users(Top 100)</span>
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
              <th className="min-w-100px">USERNAME</th>
              <th className="text-end min-w-100px">CTEGORY</th>
              <th className="text-end min-w-125px">DATE ADDED</th>
              <th className="text-end min-w-100px">COMMENTS</th>
            </tr>
            {/* end::Table row */}
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody className="fw-bolder text-gray-600">
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">Jinddee</a>
              </td>
              <td className="text-end">123</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">01 May, 2022</a>
              </td>
              <td className="text-end">123</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">Yebin</a>
              </td>
              <td className="text-end">52</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">01 May, 2022</a>
              </td>
              <td className="text-end">25</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">SRR222</a>
              </td>
              <td className="text-end">1</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">02 May, 2022</a>
              </td>
              <td className="text-end">1,630</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">joldie12</a>
              </td>
              <td className="text-end">3</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
              </td>
              <td className="text-end">119</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">kaglia</a>
              </td>
              <td className="text-end">2</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
              </td>
              <td className="text-end">660</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">mochoto12</a>
              </td>
              <td className="text-end">2</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
              </td>
              <td className="text-end">290</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">kokoshka25</a>
              </td>
              <td className="text-end">7</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
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

export {TopUsers}
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const TopUsers: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header pt-7">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-gray-800">Top users(Top 100)</span>
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
              <th className="min-w-100px">USERNAME</th>
              <th className="text-end min-w-100px">CTEGORY</th>
              <th className="text-end min-w-125px">DATE ADDED</th>
              <th className="text-end min-w-100px">COMMENTS</th>
            </tr>
            {/* end::Table row */}
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody className="fw-bolder text-gray-600">
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">Jinddee</a>
              </td>
              <td className="text-end">123</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">01 May, 2022</a>
              </td>
              <td className="text-end">123</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">Yebin</a>
              </td>
              <td className="text-end">52</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">01 May, 2022</a>
              </td>
              <td className="text-end">25</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">SRR222</a>
              </td>
              <td className="text-end">1</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">02 May, 2022</a>
              </td>
              <td className="text-end">1,630</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">joldie12</a>
              </td>
              <td className="text-end">3</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
              </td>
              <td className="text-end">119</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">kaglia</a>
              </td>
              <td className="text-end">2</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
              </td>
              <td className="text-end">660</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">mochoto12</a>
              </td>
              <td className="text-end">2</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
              </td>
              <td className="text-end">290</td>
            </tr>
            <tr>
              <td>
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">kokoshka25</a>
              </td>
              <td className="text-end">7</td>
              <td className="text-end">
                <a href="#" className="text-gray-600 text-hover-primary">03 May, 2022</a>
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

export {TopUsers}
>>>>>>> 7efb2ae9bfd5ff75ec627c17f0cf3af148a7c714
