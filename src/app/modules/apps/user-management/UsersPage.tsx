import {useEffect, useState} from 'react'
import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'
import { useAuth } from '../../auth'
import { useToasts } from 'react-toast-notifications';

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'User Management',
    path: '/apps/user-management/users',
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

const UsersPage = () => {

  const {socketInstance} = useAuth();
  const [sAudio] = useState(new Audio("./audio/subscribe.mp3")) ;
  const [pAudio] = useState(new Audio("./audio/premium.mp3")) ;
  const { addToast } = useToasts();

  useEffect(() => {
    if (!socketInstance) return;
    if (!sAudio) return;

    socketInstance.on("subscribe_user", (res) => {
      console.log("subscribe user in Dashboard", res);
      sAudio.play();
      addToast(`${res.email} is registered`, { appearance: 'success' });
    })

    socketInstance.on("premium_user", (res) => {
      console.log("premium user in Dashbaord", res);
      pAudio.play();
      addToast(`${res.email} is registered as premium uer.`, { appearance: 'success' });
    })
    
  }, [socketInstance])

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Users list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/users' />} />
    </Routes>
  )
}

export default UsersPage
