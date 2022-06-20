import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Horizontal} from './components/Horizontal'

const AdvertisementBreadCrumbs: Array<PageLink> = [
  {
    title: 'Advertisement',
    path: '/advertisement/settings',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AdvertisementPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='settings'
        element={
          <>
            <PageTitle breadcrumbs={AdvertisementBreadCrumbs}>Setting</PageTitle>
            <Horizontal />
          </>
        }
      />
      <Route
        path='statistics'
        element={
          <>
            <PageTitle breadcrumbs={AdvertisementBreadCrumbs}>Statistic</PageTitle>
            {/* <Vertical /> */}
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/wizards/horizontal' />} />
    </Route>
  </Routes>
)

export default AdvertisementPage
