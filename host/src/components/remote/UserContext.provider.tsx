import { FC, lazy } from 'react'
import ErrorBoundary from '../ErrorBoundary'
import type { UserProviderProps } from 'remote/UserContext'

const UserProviderRemote = lazy(() => import('remote/UserContext'))

const UserProvider: FC<UserProviderProps> = (props) => {
  return (
    <ErrorBoundary>
      <UserProviderRemote {...props} />
    </ErrorBoundary>
  )
}

export default UserProvider
