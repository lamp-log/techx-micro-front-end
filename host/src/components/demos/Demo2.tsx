import React, { useState } from 'react'
import Button from 'remote/Button'
import Counter from 'remote/Counter'

const Demo2: React.FC = () => {
  const [showCounter, setShowCounter] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    setIsAnimating(true)
    setShowCounter(!showCounter)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Demo 2: Live Component Updates
          </h2>
          <p className="text-gray-300 mb-6">
            Experience hot module replacement across micro frontends. Edit the
            Counter component in the remote app and watch it update here
            instantly.
          </p>

          <div className="mb-6">
            <Button onClick={handleToggle} variant="primary">
              {showCounter ? 'Hide' : 'Show'} Counter
            </Button>
          </div>

          {showCounter && (
            <div
              className={`mt-4 transition-all duration-300 ${
                isAnimating
                  ? 'opacity-0 transform -translate-y-2'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <Counter />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Demo2
