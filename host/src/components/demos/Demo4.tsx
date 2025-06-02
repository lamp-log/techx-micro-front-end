import React from 'react'
import UserProvider, { useUser } from 'remote/UserContext'

const Demo4Content: React.FC = () => {
  const { user, setUser } = useUser()

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

          <div className="mt-6 p-6 bg-gray-900 rounded-lg border border-gray-700">
            {user ? (
              <div className="space-y-3">
                <p className="text-gray-300">
                  Logged in as:{' '}
                  <span className="text-blue-400 font-medium">{user.name}</span>
                </p>
                <p className="text-gray-300">Email: {user.email}</p>
                <button
                  onClick={() => setUser(null)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() =>
                  setUser({
                    id: '1',
                    name: 'John Doe',
                    email: 'john@example.com',
                  })
                }
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Login
              </button>
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
