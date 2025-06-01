import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Remote module imports (to be uncommented during presentation)
// import Button from 'remote/Button'
// import Counter from 'remote/Counter'
// import { UserProvider, useUser } from 'remote/UserContext'
// import RemoteRoutes from 'remote/routes'

// Components for demos (to be created during presentation)
import ErrorBoundary from './components/ErrorBoundary'
import RemoteComponent from './components/RemoteComponent'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-800">Host Application</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/demo1"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Demo 1: Error Boundary
                  </Link>
                  <Link
                    to="/demo2"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Demo 2: Live Changes
                  </Link>
                  <Link
                    to="/demo3"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Demo 3: Shared Router
                  </Link>
                  <Link
                    to="/demo4"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Demo 4: Shared Context
                  </Link>
                  <Link
                    to="/demo5"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Demo 5: TypeGen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo1" element={<Demo1 />} />
              <Route path="/demo2" element={<Demo2 />} />
              <Route path="/demo3" element={<Demo3 />} />
              <Route path="/demo4" element={<Demo4 />} />
              <Route path="/demo5" element={<Demo5 />} />
              {/* Remote routes (to be uncommented during presentation) */}
              {/* <Route path="/remote/*" element={<RemoteRoutes />} /> */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

// Home Component
const Home = () => (
  <div className="px-4 py-6 sm:px-0">
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Micro Frontend with Module Federation
        </h2>
        <p className="text-gray-600 mb-4">
          This is a demonstration of Micro Frontend architecture using:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React 18 with TypeScript</li>
          <li>Vite 5 as build tool</li>
          <li>@originjs/vite-plugin-federation for Module Federation</li>
          <li>React Router for navigation</li>
          <li>Tailwind CSS for styling</li>
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Architecture</h3>
          <div className="bg-gray-100 p-4 rounded">
            <code className="text-sm">
              <pre>{`micro-fe/
├── host/     # Main container (port 5000)
└── remote/   # Micro frontend (port 5001)`}</pre>
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Demo Components
const Demo1 = () => {
  const [showRemote, setShowRemote] = React.useState(false)

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Demo 1: Error Boundary
          </h2>
          <p className="text-gray-600 mb-4">
            This demo shows how to render components from remote with error boundary protection.
          </p>
          
          <button
            onClick={() => setShowRemote(!showRemote)}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {showRemote ? 'Hide' : 'Show'} Remote Component
          </button>

          {showRemote && (
            <div className="mt-4">
              {/* Remote Button with Error Boundary (to be implemented) */}
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-yellow-800">
                  RemoteComponent with ErrorBoundary will be implemented during presentation
                </p>
              </div>
              {/* <RemoteComponent module="Button" scope="remote">
                Click Me!
              </RemoteComponent> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Demo2 = () => {
  const [showCounter, setShowCounter] = React.useState(false)

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Demo 2: Live Component Updates
          </h2>
          <p className="text-gray-600 mb-4">
            Make changes to the Counter component in the remote app and see them reflect here.
          </p>
          
          <button
            onClick={() => setShowCounter(!showCounter)}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {showCounter ? 'Hide' : 'Show'} Counter
          </button>

          {showCounter && (
            <div className="mt-4">
              {/* Remote Counter (to be implemented) */}
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-yellow-800">
                  Remote Counter component will be loaded here during presentation
                </p>
              </div>
              {/* <RemoteComponent module="Counter" scope="remote" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Demo3 = () => (
  <div className="px-4 py-6 sm:px-0">
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Demo 3: Shared Routing
        </h2>
        <p className="text-gray-600 mb-4">
          Remote routes are integrated into the host application's routing system.
        </p>
        
        <div className="space-y-2">
          <Link 
            to="/remote/page1" 
            className="block px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
          >
            Go to Remote Page 1
          </Link>
          <Link 
            to="/remote/page2" 
            className="block px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
          >
            Go to Remote Page 2
          </Link>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800">
            Remote routes will be integrated during presentation
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Demo4 = () => {
  // const { user, setUser } = useUser() // To be uncommented during presentation

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Demo 4: Shared Context
          </h2>
          <p className="text-gray-600 mb-4">
            Share React context between host and remote applications.
          </p>
          
          {/* UserProvider wrapper and context usage (to be implemented) */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800">
              UserContext from remote will be integrated during presentation
            </p>
          </div>
          
          {/* Example of what will be shown:
          <div className="mt-4">
            {user ? (
              <div>
                <p>Logged in as: {user.name}</p>
                <button onClick={() => setUser(null)}>Logout</button>
              </div>
            ) : (
              <button onClick={() => setUser({ id: '1', name: 'John Doe', email: 'john@example.com' })}>
                Login
              </button>
            )}
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

const Demo5 = () => (
  <div className="px-4 py-6 sm:px-0">
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Demo 5: Type Generation
        </h2>
        <p className="text-gray-600 mb-4">
          Automatic TypeScript type generation ensures type safety across micro frontends.
        </p>
        
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Type Generation Process:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Remote builds with vite-plugin-dts</li>
            <li>Types are generated in dist/@mf-types/</li>
            <li>Host syncs types with npm run types:sync</li>
            <li>Full IntelliSense support in host</li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800">
            Type generation scripts will be demonstrated during presentation
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default App
