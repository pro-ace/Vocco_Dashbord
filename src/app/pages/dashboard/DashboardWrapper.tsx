/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useContext, useEffect } from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
// import { useAuth } from '../../modules/auth'
// import { useToasts } from 'react-toast-notifications';
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
  TotalRecords,
  MapDistribution,
  OpenAppByMonth,
  GetInviteLinks,
  GetShareStories,
  GetSeesionPerTime
} from '../../../_metronic/partials/widgets'
import { CountryContext } from '../../../Context'
import { getusersbycountry } from '../../../_metronic/partials/widgets/dashboard/core/_requests'

const DashboardPage: FC = () => {
  const { setUsersByCountry, setTotalUsers } = useContext(CountryContext);

  useEffect(() => {
    const fetchUsersByCountry = async () => {
      await getusersbycountry().then(res => {
        if (res.data) {
          setUsersByCountry(res.data.data);
          setTotalUsers(res.data.totalCount);
        }
      })
    }
    fetchUsersByCountry();
  }, []);

  return (
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
      <div className='col-xl-4 mb-xl-10'>
        <TotalRecords
          className='card-xl-stretch mb-xl-8'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 g-xl-10'>
      <div className='col-xl-6 mb-xl-10'>
        <OpenAppByMonth
          className='card-flush overflow-hidden h-md-100'
        />
      </div>
      <div className='col-xl-6 mb-xl-10'>
        <GetInviteLinks
          className='card-flush overflow-hidden h-md-100'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 g-xl-10'>
      <div className='col-xl-6 mb-xl-10'>
        <GetShareStories
          className='card-flush overflow-hidden h-md-100'
        />
      </div>
      <div className='col-xl-6 mb-xl-10'>
        <GetSeesionPerTime
          className='card-flush overflow-hidden h-md-100'
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
  );
}

const DashboardWrapper: FC = () => {
  // const {socketInstance} = useAuth();
  // const [sAudio] = useState(new Audio("./audio/subscribe.mp3")) ;
  // const [pAudio] = useState(new Audio("./audio/premium.mp3")) ;
  const intl = useIntl()
  // const { addToast } = useToasts();

  // useEffect(() => {
  //   if (!socketInstance) return;
  //   if (!sAudio) return;

  //   socketInstance.on("subscribe_user", (res) => {
  //     console.log("subscribe user in Dashboard", res);
  //     sAudio.play();
  //     addToast(`${res.email} is registered`, { appearance: 'success' });
  //   })

  //   socketInstance.on("premium", (res) => {
  //     console.log("premium user in Dashbaord", res);
  //     pAudio.play();
  //     addToast(`${res.email} is registered as premium uer.`, { appearance: 'success' });
  //   })
  // }, [socketInstance])

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
