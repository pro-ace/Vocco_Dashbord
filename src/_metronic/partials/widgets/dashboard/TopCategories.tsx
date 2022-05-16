<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
import {getTopCategoriesVocals} from './core/_requests'
import {VocalModel} from './core/_models'
import {TopCategoryVocalModel} from './core/_models'

type Props = {
  className: string,
}

const categories = [
  {
    category: "Fun",
    icon: "fun.png",
    href: "kt_stats_widget_2_tab_1"
  },
  {
    category: "Adults",
    icon: "adult.png",
    href: "kt_stats_widget_2_tab_2"
  },
  {
    category: "Education",
    icon: "education.png",
    href: "kt_stats_widget_2_tab_3"
  },
  {
    category: "Horror",
    icon: "horror.png",
    href: "kt_stats_widget_2_tab_4"
  },
  {
    category: "Transport",
    icon: "transport.png",
    href: "kt_stats_widget_2_tab_5"
  }
]

const TopCategories: React.FC<Props> = ({className}) => {

  const [topCategoryVocals, setTopCategoryVocals] = useState<TopCategoryVocalModel | null>(null)

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getTopCategoriesVocals();
      setTopCategoryVocals(res);
    }
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header align-items-center border-0">
        <h3 className="fw-bolder text-gray-900 m-0">Category statistics / Top Voice messages</h3>
      </div>
      <div className="card-body pt-2">
        <ul className="nav nav-pills nav-pills-custom mb-3">
          {
            categories.map((eCat, index) => {
              return (
                <li className="nav-item mb-3 me-3 me-lg-6" key={index}>
                  <a className={`nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 ${eCat.category === "Fun" ? "active" : ""}`} data-bs-toggle="pill" href={`#${eCat.href}`}>
                    <div className="nav-icon">
                      <img alt="" src={`/media/stock/categories/${eCat.icon}`} className="" />
                    </div>
                    <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">{eCat.category}</span>
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  </a>
                </li>
              )
            })
          }
        </ul>
        <div className="tab-content">
          {
            categories.map((eCat, index) => {
              return (
                <div className={`tab-pane fade show ${eCat.category === "Fun" ? "active": ""}`} id={eCat.href} key={index}>
                  <div className="table-responsive">
                    <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                      <thead>
                        <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                          <th className="ps-0 w-50px">VOCAL</th>
                          <th className="ps-0 w-100px"></th>
                          <th className="text-end min-w-140px">LIKES</th>
                          <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                          <th className="pe-0 text-end min-w-120px">SHARES</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          topCategoryVocals ?
                          eCat.category === "Fun" ?
                          topCategoryVocals.Fun.map((eVocal: VocalModel, index: number) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                                </td>
                                <td className="ps-0">
                                  <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">{eVocal.title}</a>
                                  <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">{eVocal.user.name}</span>
                                </td>
                                <td>
                                  <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{eVocal.likesCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{eVocal.answersCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{0}</span>
                                </td>
                              </tr>
                            )
                          }) : 
                          eCat.category === "Adults" ?
                          topCategoryVocals.Adults.map((eVocal: VocalModel, index: number) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                                </td>
                                <td className="ps-0">
                                  <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">{eVocal.title}</a>
                                  <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">{eVocal.user.name}</span>
                                </td>
                                <td>
                                  <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{eVocal.likesCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{eVocal.answersCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{0}</span>
                                </td>
                              </tr>
                            )
                          }) : 
                          eCat.category === "Education" ?
                          topCategoryVocals.Education.map((eVocal: VocalModel, index: number) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                                </td>
                                <td className="ps-0">
                                  <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">{eVocal.title}</a>
                                  <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">{eVocal.user.name}</span>
                                </td>
                                <td>
                                  <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{eVocal.likesCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{eVocal.answersCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{0}</span>
                                </td>
                              </tr>
                            )
                          }) : 
                          eCat.category === "Horror" ?
                          topCategoryVocals.Horror.map((eVocal: VocalModel, index: number) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                                </td>
                                <td className="ps-0">
                                  <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">{eVocal.title}</a>
                                  <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">{eVocal.user.name}</span>
                                </td>
                                <td>
                                  <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{eVocal.likesCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{eVocal.answersCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{0}</span>
                                </td>
                              </tr>
                            )
                          }) : 
                          eCat.category === "Transport" ?
                          topCategoryVocals.Transport.map((eVocal: VocalModel, index: number) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                                </td>
                                <td className="ps-0">
                                  <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">{eVocal.title}</a>
                                  <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">{eVocal.user.name}</span>
                                </td>
                                <td>
                                  <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{eVocal.likesCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{eVocal.answersCount}</span>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-800 fw-bolder d-block fs-6">{0}</span>
                                </td>
                              </tr>
                            )
                          }) : 
                          null
                          : null
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export {TopCategories}
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string,
}

const TopCategories: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0">
        {/* begin::Title */}
        <h3 className="fw-bolder text-gray-900 m-0">Category statistics / Top Voice messages</h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-2">
        {/* begin::Nav */}
        <ul className="nav nav-pills nav-pills-custom mb-3">
          {/* begin::Item */}
          <li className="nav-item mb-3 me-3 me-lg-6">
            {/* begin::Link */}
            <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden active w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_1">
              {/* begin::Icon */}
              <div className="nav-icon">
                <img alt="" src="/media/stock/categories/fun.png" className="" />
              </div>
              {/* end::Icon */}
              {/* begin::Subtitle */}
              <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">Fun</span>
              {/* end::Subtitle */}
              {/* begin::Bullet */}
              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
              {/* end::Bullet */}
            </a>
            {/* end::Link */}
          </li>
          {/* end::Item */}
          {/* begin::Item */}
          <li className="nav-item mb-3 me-3 me-lg-6">
            {/* begin::Link */}
            <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_2">
              {/* begin::Icon */}
              <div className="nav-icon">
                <img alt="" src="/media/stock/categories/adult.png" className="" />
              </div>
              {/* end::Icon */}
              {/* begin::Subtitle */}
              <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">Adults</span>
              {/* end::Subtitle */}
              {/* begin::Bullet */}
              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
              {/* end::Bullet */}
            </a>
            {/* end::Link */}
          </li>
          {/* end::Item */}
          {/* begin::Item */}
          <li className="nav-item mb-3 me-3 me-lg-6">
            {/* begin::Link */}
            <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_3">
              {/* begin::Icon */}
              <div className="nav-icon">
                <img alt="" src="/media/stock/categories/education.png" className="" />
              </div>
              {/* end::Icon */}
              {/* begin::Subtitle */}
              <span className="nav-text text-gray-600 fw-bolder fs-6 lh-1">Education</span>
              {/* end::Subtitle */}
              {/* begin::Bullet */}
              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
              {/* end::Bullet */}
            </a>
            {/* end::Link */}
          </li>
          {/* end::Item */}
          {/* begin::Item */}
          <li className="nav-item mb-3 me-3 me-lg-6">
            {/* begin::Link */}
            <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_4">
              {/* begin::Icon */}
              <div className="nav-icon">
                <img alt="" src="/media/stock/categories/horror.png" className="" />
              </div>
              {/* end::Icon */}
              {/* begin::Subtitle */}
              <span className="nav-text text-gray-600 fw-bolder fs-6 lh-1">Horror</span>
              {/* end::Subtitle */}
              {/* begin::Bullet */}
              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
              {/* end::Bullet */}
            </a>
            {/* end::Link */}
          </li>
          {/* end::Item */}
          {/* begin::Item */}
          <li className="nav-item mb-3">
            {/* begin::Link */}
            <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_5">
              {/* begin::Icon */}
              <div className="nav-icon">
              <img alt="" src="/media/stock/categories/transport.png" className="" />
              </div>
              {/* end::Icon */}
              {/* begin::Subtitle */}
              <span className="nav-text text-gray-600 fw-bolder fs-6 lh-1">Transport</span>
              {/* end::Subtitle */}
              {/* begin::Bullet */}
              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
              {/* end::Bullet */}
            </a>
            {/* end::Link */}
          </li>
          {/* end::Item */}
        </ul>
        {/* end::Nav */}
        {/* begin::Tab Content */}
        <div className="tab-content">
          {/* begin::Tap pane */}
          <div className="tab-pane fade show active" id="kt_stats_widget_2_tab_1">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                {/* begin::Table head */}
                <thead>
                  <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                    <th className="ps-0 w-50px">VOCAL</th>
                    <th className="ps-0 w-100px"></th>
                    <th className="text-end min-w-140px">LIKES</th>
                    <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                    <th className="pe-0 text-end min-w-120px">SHARES</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">SO FURIOUS</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">CouzCouz29</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">124</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">13</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">38</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/58.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">You wont belive</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">23</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">12</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">22</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/57.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">Simple way</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">1234</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">84</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">168</span>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className="tab-pane fade" id="kt_stats_widget_2_tab_2">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                {/* begin::Table head */}
                <thead>
                  <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                    <th className="ps-0 w-50px">VOCAL</th>
                    <th className="ps-0 w-100px"></th>
                    <th className="text-end min-w-140px">LIKES</th>
                    <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                    <th className="pe-0 text-end min-w-120px">SHARES</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">First love</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">kokoshka25</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">23</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">11</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">34</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/58.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">MAPED</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Sponsored</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">34</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">34</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">23</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/57.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">Simple way</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">33</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">44</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">22</span>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className="tab-pane fade" id="kt_stats_widget_2_tab_3">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                {/* begin::Table head */}
                <thead>
                  <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                    <th className="ps-0 w-50px">VOCAL</th>
                    <th className="ps-0 w-100px"></th>
                    <th className="text-end min-w-140px">LIKES</th>
                    <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                    <th className="pe-0 text-end min-w-120px">SHARES</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">FURIOUS</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">34</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">23</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">45</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/58.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">You wont belive</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">11</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">44</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">22</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/57.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">blue.water</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">boonmee.m</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">234</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">12</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">45</span>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className="tab-pane fade" id="kt_stats_widget_2_tab_4">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                {/* begin::Table head */}
                <thead>
                  <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                    <th className="ps-0 w-50px">VOCAL</th>
                    <th className="ps-0 w-100px"></th>
                    <th className="text-end min-w-140px">LIKES</th>
                    <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                    <th className="pe-0 text-end min-w-120px">SHARES</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">Bad grades again</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">Digouartout</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">234</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">231</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">111</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/58.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">You wont belive</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">23</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">12</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">22</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/57.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">Simple way</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">1234</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">84</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">168</span>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className="tab-pane fade" id="kt_stats_widget_2_tab_5">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                {/* begin::Table head */}
                <thead>
                  <tr className="fs-7 fw-bolder text-gray-500 border-bottom-0">
                    <th className="ps-0 w-50px">VOCAL</th>
                    <th className="ps-0 w-100px"></th>
                    <th className="text-end min-w-140px">LIKES</th>
                    <th className="pe-0 text-end min-w-120px">ANSWERS</th>
                    <th className="pe-0 text-end min-w-120px">SHARES</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/56.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">SO FURIOUS</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">CouzCouz29</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">124</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">13</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">38</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/58.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">You wont belive</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">23</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">12</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">22</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="media/stock/ecommerce/57.gif" className="w-50px ms-n1" alt="" />
                    </td>
                    <td className="ps-0">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0">Simple way</a>
                      <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">michoto34</span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">1234</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">84</span>
                    </td>
                    <td className="text-end pe-0">
                      <span className="text-gray-800 fw-bolder d-block fs-6">168</span>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
        {/* end::Tab Content */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TopCategories}
>>>>>>> 7efb2ae9bfd5ff75ec627c17f0cf3af148a7c714
