import { BrowserRouter as Router } from 'react-router-dom'
import Button from './components/Button'
import Counter from './components/Counter'
import { UserProvider, useUser } from './contexts/UserContext'
import RemoteRoutes from './routes'

function UserDisplay() {
  const { user, setUser } = useUser()

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">User Context Demo</h3>
      {user ? (
        <div>
          <p className="text-gray-600">
            Logged in as: <span className="font-semibold">{user.name}</span>
          </p>
          <p className="text-gray-600">Email: {user.email}</p>
          <Button
            onClick={() => setUser(null)}
            variant="secondary"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mb-4">No user logged in</p>
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
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Remote Application Components
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Button Demo */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Button Component</h2>
                <div className="flex gap-4">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Routes Demo</h2>
              <p className="text-gray-600 mb-4">
                These routes will be exposed to the host application:
              </p>
              <RemoteRoutes />
            </div>
          </div>
        </div>
      </UserProvider>
    </Router>
  )
}

export default App
