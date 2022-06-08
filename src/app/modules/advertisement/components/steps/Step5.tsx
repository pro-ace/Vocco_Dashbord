import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'

const Step5: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark'>Your Are Done!</h2>
      </div>

      <div className='mb-0'>
        <div className='fs-6 text-gray-600 mb-5'>
          Customer journey for advertising at Vocco
        </div>

        <div className='notice d-flex rounded border-warning border border-dashed p-6'>
          <KTSVG
            path='/media/icons/advertisement/VOCCO.svg'
            className='svg-icon-5tx svg-icon-warning me-4'
          />
          <div className='d-flex flex-stack flex-grow-1'>
            <div className='fw-bold'>
              <h4 className='text-gray-800 fw-bolder'>PARCOURS CUSTOMER ADS x VOCCO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step5}
