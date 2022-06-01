import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { ProfileHeader } from '../../profile/ProfileHeader'
import { UsersListWrapper } from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
    {
        title: 'User Management',
        path: '/apps/user-management/users/profile',
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

const UsersProfilePage = () => {
    return (
        <>
            <PageTitle breadcrumbs={usersBreadcrumbs}>UserProfile</PageTitle>
            <ProfileHeader />
        </>

    )
}

export default UsersProfilePage