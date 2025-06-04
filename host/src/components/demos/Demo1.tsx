import React, { useState } from 'react'
import Button from '../remote/Button'

const Demo1: React.FC = () => {
  const [showRemote, setShowRemote] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    setIsAnimating(true)
    setShowRemote(!showRemote)
    setTimeout(() => setIsAnimating(false), 300)
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

          {/* Failing component to demonstrate error boundary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Error Boundary Demo
            </h3>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo1
