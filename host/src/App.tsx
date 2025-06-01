import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Remote module imports (to be uncommented during presentation)
// import Button from 'remote/Button'
// import Counter from 'remote/Counter'
// import { UserProvider, useUser } from 'remote/UserContext'
// import RemoteRoutes from 'remote/routes'

// Lazy loading pattern (alternative approach)
// const RemoteButton = React.lazy(() => import('remote/Button'))
// const RemoteCounter = React.lazy(() => import('remote/Counter'))
// const RemoteUserProvider = React.lazy(() => import('remote/UserContext'))
// const RemoteRoutes = React.lazy(() => import('remote/routes'))

// Components for demos (to be created during presentation)
import ErrorBoundary from './components/ErrorBoundary'
import RemoteComponent from './components/RemoteComponent'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        {/* Header Navigation */}
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <div className="flex items-center flex-1">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Host Application
                  </h1>
                </div>
                <div className="hidden sm:ml-10 sm:flex sm:items-center sm:space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    Home
                  </Link>
                  <Link
                    to="/demo1"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    Error Boundary
                  </Link>
                  <Link
                    to="/demo2"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    Live Changes
                  </Link>
                  <Link
                    to="/demo3"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    Shared Router
                  </Link>
                  <Link
                    to="/demo4"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    Shared Context
                  </Link>
                  <Link
                    to="/demo5"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center"
                  >
                    TypeGen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
  <div className="space-y-6">
    <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Micro Frontend with Module Federation
        </h2>
        <p className="text-gray-300 mb-6">
          A production-ready demonstration of Micro Frontend architecture
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Tech Stack</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">▸</span>
                React 18 with TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">▸</span>
                Vite 5 as build tool
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">▸</span>
                Module Federation
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">▸</span>
                React Router
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">▸</span>
                Tailwind CSS
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Architecture</h3>
            <pre className="text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto">
{`micro-fe/
├── host/   # Container (port 5000)
└── remote/ # Micro frontend (port 5001)`}
            </pre>
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
              {/* Remote Button with Error Boundary (to be implemented) */}
              <div className="p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                <p className="text-yellow-400">
                  ⚠️ RemoteComponent with ErrorBoundary will be implemented during presentation
                </p>
              </div>
              {/* Uncomment during demo: */}
              {/* <RemoteComponent module="Button" scope="remote" {...{ onClick: () => alert('Remote button clicked!'), children: 'Remote Button' }} /> */}
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
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Demo 2: Live Component Updates
          </h2>
          <p className="text-gray-300 mb-6">
            Experience hot module replacement across micro frontends. Edit the Counter component in the remote app and watch it update here instantly.
          </p>
          
          <button
            onClick={() => setShowCounter(!showCounter)}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            {showCounter ? 'Hide' : 'Show'} Counter
          </button>

          {showCounter && (
            <div className="mt-4">
              {/* Remote Counter (to be implemented) */}
              <div className="p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                <p className="text-yellow-400">
                  ⚠️ Remote Counter component will be loaded here during presentation
                </p>
              </div>
              {/* Uncomment during demo: */}
              {/* <RemoteComponent module="Counter" scope="remote" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Demo3 = () => (
  <div className="space-y-6">
    <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          Demo 3: Shared Routing
        </h2>
        <p className="text-gray-300 mb-6">
          Seamlessly integrate remote routes into the host application's routing system.
        </p>
        
        <div className="space-y-3">
          <Link 
            to="/remote/page1" 
            className="block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg"
          >
            Navigate to Remote Page 1
          </Link>
          <Link 
            to="/remote/page2" 
            className="block px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            Navigate to Remote Page 2
          </Link>
        </div>

        <div className="mt-6 p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
          <p className="text-yellow-400">
            ⚠️ Remote routes will be integrated during presentation
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Demo4 = () => {
  // const { user, setUser } = useUser() // To be uncommented during presentation

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
          
          {/* UserProvider wrapper and context usage (to be implemented) */}
          <div className="p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
            <p className="text-yellow-400">
              ⚠️ UserContext from remote will be integrated during presentation
            </p>
          </div>
          
          {/* Uncomment during demo: */}
          {/* <UserProvider>
            <div className="mt-6 p-6 bg-gray-900 rounded-lg border border-gray-700">
              {user ? (
                <div className="space-y-3">
                  <p className="text-gray-300">Logged in as: <span className="text-blue-400 font-medium">{user.name}</span></p>
                  <button 
                    onClick={() => setUser(null)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setUser({ id: '1', name: 'John Doe', email: 'john@example.com' })}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Login
                </button>
              )}
            </div>
          </UserProvider> */}
        </div>
      </div>
    </div>
  )
}

const Demo5 = () => (
  <div className="space-y-6">
    <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          Demo 5: Type Generation
        </h2>
        <p className="text-gray-300 mb-6">
          Automatic TypeScript type generation ensures type safety across micro frontends.
        </p>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-3 text-blue-400">Type Generation Process:</h3>
          <ol className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-3">1.</span>
              Remote builds with vite-plugin-dts
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3">2.</span>
              Types are generated in dist/@mf-types/
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3">3.</span>
              Host syncs types with npm run types:sync
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3">4.</span>
              Full IntelliSense support in host
            </li>
          </ol>
        </div>

        <div className="mt-6 p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
          <p className="text-yellow-400">
            ⚠️ Type generation scripts will be demonstrated during presentation
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default App
