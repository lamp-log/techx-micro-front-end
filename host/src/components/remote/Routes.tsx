import { FC, lazy } from 'react'
import ErrorBoundary from '../ErrorBoundary'

const RemoteRoutes = lazy(() => import('remote/routes'))

const Routes: FC = () => {
  return (
    <ErrorBoundary>
      <RemoteRoutes />
    </ErrorBoundary>
  )
}

export default Routes
