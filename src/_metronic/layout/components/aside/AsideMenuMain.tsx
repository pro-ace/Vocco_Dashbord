/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Details</span>
        </div>
      </div>
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Advertisement</span>
        </div>
      </div>
      
      <AsideMenuItemWithSub to='/advertisement' title='Advertisement' hasBullet={true}>
        <AsideMenuItem
          to='/advertisement/settings'
          title='Settings'
          hasBullet={true}
        />
        <AsideMenuItem to='/advertisement/monetization' title='Monetization' hasBullet={true} />
        <AsideMenuItem to='/advertisement/statistics' title='Statistics' hasBullet={true} />
      </AsideMenuItemWithSub>
      
      {/* <AsideMenuItem
        to='/advertisement'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Advertisement'
        fontIcon='bi-layers'
      /> */}
    </>
  )
}
