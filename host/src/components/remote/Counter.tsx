import { FC, lazy } from 'react'
import ErrorBoundary from '../ErrorBoundary'

const CounterRemote = lazy(() => import('remote/Counter'))

const Counter: FC = () => {
  return (
    <ErrorBoundary>
      <CounterRemote />
    </ErrorBoundary>
  )
}

export default Counter
