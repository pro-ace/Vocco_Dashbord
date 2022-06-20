/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { KTSVG } from '../../../../../_metronic/helpers'
import { Field } from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Choose Advertisement Type
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='adType'
              value='personal'
              id='advertisement_setting_ad_audio'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='advertisement_setting_ad_audio'
            >
              <KTSVG
                path='/media/icons/advertisement/audio.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Audio Advertising</span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='adType'
              value='corporate'
              id='advertisement_setting_ad_banner'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='advertisement_setting_ad_banner'
            >
              <KTSVG path='/media/icons/advertisement/visual.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Visual Advertising</span>
              </span>
            </label>
          </div>
        </div>
        <div>
          <div className="mb-7">
            <label className="fs-6 fw-bold mb-3">
              <span>Select Image</span>
              <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allowed file types: png, jpg, jpeg."></i>
            </label>
            <div className="mt-1">
              <div className="image-input image-input-outline" data-kt-image-input="true" style={{backgroundImage:'assets/media/svg/avatars/blank.svg'}}>
                <div className="image-input-wrapper w-100px h-100px" style={{backgroundImage: 'assets/media//avatars/300-6.jpg'}}></div>
                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                  <i className="bi bi-pencil-fill fs-7"></i>
                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="avatar_remove" />
                </label>
                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                  <i className="bi bi-x fs-2"></i>
                </span>
                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                  <i className="bi bi-x fs-2"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
