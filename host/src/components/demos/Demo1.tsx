import React, { useState } from 'react'
import RemoteButton from '../RemoteButton'

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
            Render components from remote with error boundary protection for
            resilient integration.
          </p>

          <div className="mb-6">
            <RemoteButton onClick={handleToggle} variant="primary">
              {showRemote ? 'Hide' : 'Show'} Remote Component
            </RemoteButton>
          </div>

          {showRemote && (
            <div
              className={`mt-4 transition-all duration-300 ${
                isAnimating
                  ? 'opacity-0 transform -translate-y-2'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <RemoteButton
                onClick={() => alert('Remote button clicked!')}
                variant="secondary"
              >
                Click Me - I'm from Remote!
              </RemoteButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Demo1
