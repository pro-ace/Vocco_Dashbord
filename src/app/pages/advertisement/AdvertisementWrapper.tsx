/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { AdverWidget } from '../../../_metronic/partials/widgets/advertisement/AdverWidget'

const AdvertisementPage: FC = () => (
  <div className='row g-5 g-xxl-8'>
    <div className='col-xl-12'>
      <AdverWidget className='mb-5 mb-xxl-8' />
    </div>
  </div>
)

const AdvertisementWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.ADVERTISEMENT'})}</PageTitle>
      <AdvertisementPage />
    </>
  )
}

export {AdvertisementWrapper}
