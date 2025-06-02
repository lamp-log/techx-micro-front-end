import React, { useState } from 'react'
import UserProvider, { useUser } from 'remote/UserContext'

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
                <button
                  onClick={handleLogout}
                  className="
                    px-4 py-2 
                    bg-red-600 text-white rounded 
                    hover:bg-red-700
                    transition-all duration-200
                    transform active:scale-95 active:shadow-md
                    hover:scale-105 hover:shadow-lg
                    relative overflow-hidden
                    group
                  "
                >
                  <span className="relative z-10">Logout</span>

                  {/* Ripple effect on click */}
                  <span
                    className="
                    absolute inset-0 rounded
                    bg-white opacity-0 
                    group-active:opacity-20
                    transition-opacity duration-300
                  "
                  />
                </button>
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
                <button
                  onClick={handleLogin}
                  className="
                  px-4 py-2 
                  bg-green-600 text-white rounded 
                  hover:bg-green-700
                  transition-all duration-200
                  transform active:scale-95 active:shadow-md
                  hover:scale-105 hover:shadow-lg
                  relative overflow-hidden
                  group
                "
                >
                  <span className="relative z-10">Login</span>

                  {/* Ripple effect on click */}
                  <span
                    className="
                  absolute inset-0 rounded
                  bg-white opacity-0 
                  group-active:opacity-20
                  transition-opacity duration-300
                "
                  />
                </button>
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
