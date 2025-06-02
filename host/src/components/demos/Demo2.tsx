import React, { useState } from 'react'
import RemoteComponent from '../RemoteComponent'

const Demo2: React.FC = () => {
  const [showCounter, setShowCounter] = useState(false)

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
            onClick={() => setShowCounter(!showCounter)}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            {showCounter ? 'Hide' : 'Show'} Counter
          </button>

          {showCounter && (
            <div className="mt-4">
              <RemoteComponent module="Counter" scope="remote" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Demo2
