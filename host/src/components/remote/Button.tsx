import { FC, lazy } from 'react'
import type { ButtonProps } from 'remote/Button'
import ErrorBoundary from '../ErrorBoundary'

const ButtonRemote = lazy(() => import('remote/Button'))

const Button: FC<ButtonProps> = (props) => {
  return (
    <ErrorBoundary>
      <ButtonRemote {...props} />
    </ErrorBoundary>
  )
}

export default Button
