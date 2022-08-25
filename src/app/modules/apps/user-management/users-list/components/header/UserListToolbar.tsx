import { DownloadTableExcel } from 'react-export-table-to-excel'
import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'

const UsersListToolbar = (props:any) => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <UsersListFilter />

      {/* begin::Export */}
      <DownloadTableExcel
        filename='users table'
        sheet='users'
        currentTableRef={props.userTableRef.current}
      >
        <button type='button' className='btn btn-light-primary me-3'>
          <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
          Export
        </button>
      </DownloadTableExcel>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add User
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
