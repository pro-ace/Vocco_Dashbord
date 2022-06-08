import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step4: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Customization of the ad</h2>
      </div>
      <div className='fv-row mb-10 row'>
        <div className='col'>
          <label className='form-label'>Catchment Area</label>
          <Field
            as='select'
            name='catchmentArea'
            className='form-select form-select-lg form-select-solid'
          >
            <option value="0-5">0 km/5 km</option>
            <option value="10-50">10 km/50 km</option>
            <option value="50-200">50 km/200 km</option>
            <option value="200-">+200km</option>
          </Field>
        </div>
        <div className='col'>
          <label className="form-label">
            <span>Number of listenings</span>
          </label>
          <Field
            as='select'
            name='numberOfListenings'
            className='form-select form-select-lg form-select-solid'
          >
            <option value="0-10" >0/10k</option>
            <option value="10-20" >10/20k</option>
            <option value="20-50" >20/50k</option>
            <option value="50-" >+50k</option>
          </Field>
        </div>
      </div>
      <div className='fv-row mb-10 row'>
        <div className='col'>
          <label className='form-label'>Number of banner displays</label>
          <Field
            as='select'
            name='numberBannerDisplays'
            className='form-select form-select-lg form-select-solid'
          >
            <option value="0-10">0/10k</option>
            <option value="10-20">10/20k</option>
            <option value="20-50">20/50k</option>
            <option value="50-">+50k</option>
          </Field>
        </div>
        <div className='col'>
          <label className="form-label">
            <span>Number of days</span>
          </label>
          <Field
            as='select'
            name='numberOfDays'
            className='form-select form-select-lg form-select-solid'
          >
            <option value="0-10" >1j</option>
            <option value="10-20" >2d/7d</option>
            <option value="20-50" >7-15j</option>
            <option value="50-" >15 to 30 days</option>
            <option value="50-" >2 months</option>
            <option value="50-" >6 months</option>
            <option value="50-" >1 year</option>
          </Field>
        </div>
      </div>
    </div>
  )
}

export {Step4}
