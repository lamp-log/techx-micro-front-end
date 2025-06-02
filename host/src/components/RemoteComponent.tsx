import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

interface RemoteComponentProps {
  module: string
  scope: string
  fallback?: React.ReactNode
  [key: string]: unknown
}

const loadComponent = (scope: string, module: string) => {
  if (scope === 'remote') {
    switch (module) {
      case 'Button':
        return import('remote/Button')
      case 'Counter':
        return import('remote/Counter')
      case 'UserContext':
        return import('remote/UserContext')
      case 'routes':
        return import('remote/routes')
      default:
        throw new Error(`Unknown module: ${module}`)
    }
  }
  throw new Error(`Unknown scope: ${scope}`)
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({
  module,
  scope,
  fallback = <div className="p-4 text-gray-400">Loading remote component...</div>,
  ...props
}) => {
  const Component = lazy(() => loadComponent(scope, module))

  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default RemoteComponent
