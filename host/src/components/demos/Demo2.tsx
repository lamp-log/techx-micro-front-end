import React, { useState } from 'react'
import RemoteComponent from '../RemoteComponent'

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

          <button
            onClick={handleToggle}
            className="
              mb-6 px-6 py-3 
              bg-gradient-to-r from-blue-500 to-purple-600 
              text-white rounded-lg 
              hover:from-blue-600 hover:to-purple-700 
              transition-all duration-200 
              font-medium shadow-lg
              transform active:scale-95 active:shadow-md
              hover:scale-105 hover:shadow-xl
              relative overflow-hidden
              group
            "
          >
            <span className="relative z-10">
              {showCounter ? 'Hide' : 'Show'} Counter
            </span>
            
            {/* Ripple effect on click */}
            <span className="
              absolute inset-0 rounded-lg
              bg-white opacity-0 
              group-active:opacity-20
              transition-opacity duration-300
            " />
            
            {/* Shimmer effect on hover */}
            <span className="
              absolute inset-0 rounded-lg
              bg-gradient-to-r from-transparent via-white to-transparent
              opacity-0 group-hover:opacity-10
              transform -skew-x-12 -translate-x-full
              group-hover:translate-x-full
              transition-all duration-1000 ease-out
            " />
          </button>

          {showCounter && (
            <div 
              className={`mt-4 transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <RemoteComponent module="Counter" scope="remote" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Demo2
