import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return <>{this.props.fallback}</>
      }

      // Default error UI
      return (
        this.props.fallback || (
          <div className="p-6 bg-red-900/20 border border-red-700/50 rounded-lg">
            <h2 className="text-red-400 font-bold mb-2">
              Something went wrong!
            </h2>
            <details className="text-red-300 text-sm">
              <summary>Error details</summary>
              {this.state.error?.toString()}
            </details>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
