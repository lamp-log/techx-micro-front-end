import React, { useState } from 'react'
import RemoteComponent from '../RemoteComponent'

const Demo1: React.FC = () => {
  const [showRemote, setShowRemote] = useState(false)

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Demo 1: Error Boundary
          </h2>
          <p className="text-gray-300 mb-6">
            Render components from remote with error boundary protection for resilient integration.
          </p>
          
          <button
            onClick={() => setShowRemote(!showRemote)}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            {showRemote ? 'Hide' : 'Show'} Remote Component
          </button>

          {showRemote && (
            <div className="mt-4">
              <RemoteComponent module="Button" scope="remote" onClick={() => alert('Remote button clicked!')} variant="primary">
                Remote Button
              </RemoteComponent>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Demo1
