import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ProfileTable} from './table/ProfileTable'
import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../_metronic/helpers'

type Props = {
  userId: string,
}

const UsersList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        {/* <UsersListHeader /> */}
        <ProfileTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const THSListWrapper: React.FC<Props> = ({userId}) => (
  <QueryRequestProvider>
    <QueryResponseProvider userId = {userId}>
      <ListViewProvider>
        <UsersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {THSListWrapper}
