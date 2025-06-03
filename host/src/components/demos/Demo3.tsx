import React from 'react'
import { useNavigate } from 'react-router-dom'
import RemoteButton from '../RemoteButton'

const Demo3: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Demo 3: Shared Routing
          </h2>
          <p className="text-gray-300 mb-6">
            Seamlessly integrate remote routes into the host application's
            routing system.
          </p>
          <div className="space-y-3">
            <RemoteButton
              onClick={() => navigate('/remote/page1')}
              variant="primary"
              fullWidth={true}
            >
              Navigate to Remote Page 1
            </RemoteButton>

            <RemoteButton
              onClick={() => navigate('/remote/page2')}
              variant="secondary"
              fullWidth={true}
            >
              Navigate to Remote Page 2
            </RemoteButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo3
