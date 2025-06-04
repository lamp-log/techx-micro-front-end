import React, { useState, Suspense, lazy } from 'react'
import ErrorBoundary from '../ErrorBoundary'
import Button from 'remote/Button'

// Create a component that will fail to demonstrate error boundary
const FailingButton = lazy(() => import('remote/ButtonThatDoesNotExist'))

const Demo1: React.FC = () => {
  const [showRemote, setShowRemote] = useState(false)
  const [showFailing, setShowFailing] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    setIsAnimating(true)
    setShowRemote(!showRemote)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleToggleFailing = () => {
    setShowFailing(!showFailing)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Demo 1: Error Boundary
          </h2>
          <p className="text-gray-300 mb-6">
            Demonstrates error boundary protection for remote components. Try
            the failing component to see error handling in action.
          </p>

          <div className="space-y-4">
            {/* Working remote component */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-3">
                1. Working Remote Component
              </h3>
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className="text-gray-400">Loading button...</div>
                  }
                >
                  <div className="mb-6">
                    <Button onClick={handleToggle} variant="primary">
                      {showRemote ? 'Hide' : 'Show'} Remote Component
                    </Button>
                  </div>
                  {showRemote && (
                    <div
                      className={`mt-4 transition-all duration-300 ${
                        isAnimating
                          ? 'opacity-0 transform -translate-y-2'
                          : 'opacity-100 transform translate-y-0'
                      }`}
                    >
                      <Button
                        onClick={() => alert('Remote button clicked!')}
                        variant="secondary"
                      >
                        Click Me - I'm from Remote!
                      </Button>
                    </div>
                  )}
                </Suspense>
              </ErrorBoundary>
            </div>

            {/* Failing component to demonstrate error boundary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-3">
                2. Error Boundary Demo
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Click below to try loading a non-existent component and see the
                error boundary in action:
              </p>

              <button
                onClick={handleToggleFailing}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                {showFailing ? 'Hide' : 'Try'} Failing Component
              </button>

              {showFailing && (
                <div className="mt-4">
                  <ErrorBoundary
                    fallback={
                      <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg">
                        <h4 className="text-red-400 font-semibold">
                          Custom Error Fallback
                        </h4>
                        <p className="text-red-300 text-sm mt-1">
                          This is a custom error message. The component failed
                          to load, but the app didn't crash!
                        </p>
                      </div>
                    }
                  >
                    <Suspense
                      fallback={
                        <div className="text-gray-400">
                          Attempting to load...
                        </div>
                      }
                    >
                      <FailingButton />
                    </Suspense>
                  </ErrorBoundary>
                </div>
              )}
            </div>

            {/* Network failure simulation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-3">
                3. Network Failure Simulation
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                To simulate network failure:
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-400 space-y-1 mb-3">
                <li>Open DevTools → Network tab</li>
                <li>Set throttling to "Offline"</li>
                <li>Refresh the page</li>
                <li>Try loading components above</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo1
