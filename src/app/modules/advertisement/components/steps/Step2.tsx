import React, {FC} from 'react'
import { Field } from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Profile ID</h2>
      </div>

      <div className='mb-10 fv-row row'>
        <div className='col'>
          <label className='form-label mb-3'>First Name</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='firstName'
          />
        </div>
        <div className='col'>
          <label className='form-label mb-3'>Last Name</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='lastName'
          />
          {/* <div className='text-danger mt-2'>
            <ErrorMessage name='lastName' />
          </div> */}
        </div>
      </div>

      <div className='mb-10 fv-row row'>
        <div className='col'>
          <label className='form-label mb-3'>Mail</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='mail'
          />
        </div>
        <div className='col'>
          <label className='form-label mb-3'>Phone Number</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='phoneNumber'
          />
        </div>
      </div>

      <div className='mb-10 fv-row row'>
        <div className='col'>
          <label className='form-label mb-3'>Company Name</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='companyName'
          />
        </div>
        <div className='col'>
          <label className='form-label mb-3'>Company Website</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='companyWebsite'
          />
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='d-flex align-items-center form-label mb-3'>
          Company Size
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide your company size'
          ></i>
        </label>

        <div className='row mb-2' data-kt-buttons='true'>
          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='1-1'
              id='kt_account_team_size_select_1'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_1'
            >
              <span className='fw-bolder fs-3'>1-1</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='2-10'
              id='kt_account_team_size_select_2'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_2'
            >
              <span className='fw-bolder fs-3'>2-10</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='10-50'
              id='kt_account_team_size_select_3'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_3'
            >
              <span className='fw-bolder fs-3'>10-50</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='50+'
              id='kt_account_team_size_select_4'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_4'
            >
              <span className='fw-bolder fs-3'>50+</span>
            </label>
          </div>
        </div>

        <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div>
      </div>
    </div>
  )
}

export {Step2}
