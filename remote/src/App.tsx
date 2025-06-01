import { BrowserRouter as Router } from 'react-router-dom'
import Button from './components/Button'
import Counter from './components/Counter'
import { UserProvider, useUser } from './contexts/UserContext'
import RemoteRoutes from './routes'

function UserDisplay() {
  const { user, setUser } = useUser()

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
      <h3 className="text-xl font-bold text-purple-400 mb-6">User Context Demo</h3>
      {user ? (
        <div className="space-y-4">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <p className="text-gray-300 mb-2">
              Logged in as: <span className="font-semibold text-blue-400">{user.name}</span>
            </p>
            <p className="text-gray-400">Email: {user.email}</p>
          </div>
          <Button
            onClick={() => setUser(null)}
            variant="secondary"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-400 mb-4">No user logged in</p>
          <Button
            onClick={() =>
              setUser({
                id: '1',
                name: 'John Doe',
                email: 'john@example.com',
              })
            }
          >
            Login as Demo User
          </Button>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Remote Application Components
              </span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Button Demo */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                <h2 className="text-xl font-bold text-purple-400 mb-6">Button Component</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => alert('Primary button clicked!')}>
                    Primary Button
                  </Button>
                  <Button 
                    onClick={() => alert('Secondary button clicked!')} 
                    variant="secondary"
                  >
                    Secondary Button
                  </Button>
                </div>
              </div>

              {/* Counter Demo */}
              <Counter />
            </div>

            {/* User Context Demo */}
            <div className="mb-8">
              <UserDisplay />
            </div>

            {/* Routes Demo */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
              <h2 className="text-xl font-bold text-purple-400 mb-4">Routes Demo</h2>
              <p className="text-gray-300 mb-6">
                These routes will be exposed to the host application:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <RemoteRoutes />
              </div>
            </div>
          </div>
        </div>
      </UserProvider>
    </Router>
  )
}

export default App
