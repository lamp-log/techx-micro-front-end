import { FC, lazy, Suspense } from 'react'
import type { ButtonProps } from 'remote/Button'
import ErrorBoundary from '../ErrorBoundary'

const ButtonRemote = lazy(() => import('remote/Button'))

const Button: FC<ButtonProps> = (props) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonRemote {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Button
