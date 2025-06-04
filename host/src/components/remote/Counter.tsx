import { FC, lazy, Suspense } from 'react'
import ErrorBoundary from '../ErrorBoundary'

const CounterRemote = lazy(() => import('remote/Counter'))

const Counter: FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <CounterRemote />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Counter
