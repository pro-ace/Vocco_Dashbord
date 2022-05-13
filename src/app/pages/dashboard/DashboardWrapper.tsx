/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  UserGrowthWidget,
  TotalNumberOfNewUserWeek,
  TotalNumberOfNewUserMonth,
  DailyNewUsers,
  NumberOfPremiumMembers,
  TopCategories,
  EvolutionOfDownloadsThisMonth,
  LastVocals,
  TopUsers,
  UsersByCountry,
  UserGrowthByCountry,
  DurationVocals,
  MapDistribution
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-xl-10'>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <UserGrowthWidget
          className='card-flush h-md-50 mb-5 mb-xl-10'
        />
        <TotalNumberOfNewUserMonth
          className='card-flush h-md-50 mb-xl-10'
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <TotalNumberOfNewUserWeek
          className='card-flush h-md-50 mb-5 mb-xl-10'
        />
        <DailyNewUsers
          className='card-flush h-md-50 mb-xl-10'
        />
      </div>
      <div className='col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0'>
        <NumberOfPremiumMembers
          className='card-flush overflow-hidden h-md-100'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-10'>
      <div className='col-xl-6 mb-xl-10'>
        <TopCategories
          className='mb-xl-10'
        />
      </div>
      <div className='col-xl-6 mb-5 mb-xl-10'>
        <EvolutionOfDownloadsThisMonth
          className='h-md-100'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-10'>
      <div className='col-xl-6 mb-xl-10'>
        <LastVocals
          className='card-flush h-xl-100'
        />
      </div>
      <div className='col-xl-6 mb-5 mb-xl-10'>
        <TopUsers
          className='card-flush h-xl-100'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 g-xl-10'>
      <div className='col-xl-4 mb-xl-10'>
        <UsersByCountry
          className='card-flush h-xl-100'
        />
      </div>
      <div className='col-xl-8 mb-xl-10'>
        <UserGrowthByCountry 
          className='card-flush h-xl-100' 
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 g-xl-10'>
      <div className='col-xl-4 mb-xl-10'>
        <DurationVocals
          className='card-xl-stretch mb-xl-8'
          chartColor='primary'
          chartHeight='200px'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 g-xl-10'>
      <div className='col-xl-12 mb-xl-10'>
          <MapDistribution
            className='card-xl-stretch mb-xl-8'
          />
      </div>
    </div>
    {/* end::Row */}
    
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
