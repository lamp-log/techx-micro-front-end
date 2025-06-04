import React, { useState } from 'react'
import UserProvider from '../remote/UserContext.provider'
import { useUser } from '../remote/UserContext.hook'
import Button from '../remote/Button'

const Demo4Content: React.FC = () => {
  const { user, setUser } = useUser()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleLogin = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      })
      setIsTransitioning(false)
    }, 150)
  }

  const handleLogout = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setUser(null)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Demo 4: Shared Context
          </h2>
          <p className="text-gray-300 mb-6">
            Share React context between host and remote applications.
          </p>

          <div className="mt-6 p-6 bg-gray-900 rounded-lg border border-gray-700 relative min-h-[120px]">
            {user ? (
              <div className="space-y-3">
                <div
                  className={`transition-all duration-300 ${
                    isTransitioning
                      ? 'opacity-0 transform -translate-y-2'
                      : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  <p className="text-gray-300">
                    Logged in as:{' '}
                    <span className="text-blue-400 font-medium">
                      {user.name}
                    </span>
                  </p>
                  <p className="text-gray-300">Email: {user.email}</p>
                </div>
                <Button onClick={handleLogout} variant="danger">
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <div
                  className={`transition-all duration-300 mb-3 ${
                    isTransitioning
                      ? 'opacity-0 transform -translate-y-2'
                      : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  <p className="text-gray-400">Not logged in</p>
                </div>
                <Button onClick={handleLogin} variant="success">
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Demo4: React.FC = () => {
  return (
    <UserProvider>
      <Demo4Content />
    </UserProvider>
  )
}

export default Demo4
