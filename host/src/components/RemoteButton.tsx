import React, { lazy } from 'react'
import type { ButtonProps } from 'remote/Button'

const RemoteButton = lazy<React.FC<ButtonProps>>(() => import('remote/Button'))

export default RemoteButton
export type { ButtonProps }
