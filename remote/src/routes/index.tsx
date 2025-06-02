import { Routes, Route, Link } from 'react-router-dom'

export const RemotePage1 = () => (
  <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
      >
        ← Back to Components
      </Link>
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Remote Page 1</h2>
        <p className="text-gray-300 mb-4">
          This is a page from the remote application! It demonstrates how we can
          share routes between micro frontends.
        </p>
        <div className="mt-6 p-6 bg-blue-900/20 rounded-lg border border-blue-700/50">
          <p className="text-blue-400">
            📍 This route is defined in the remote application but rendered in the host.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export const RemotePage2 = () => (
  <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
      >
        ← Back to Components
      </Link>
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Remote Page 2</h2>
        <p className="text-gray-300 mb-4">
          Another page from the remote application with different content.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-green-900/20 rounded-lg border border-green-700/50">
            <h3 className="font-semibold text-green-400 mb-2">Feature A</h3>
            <p className="text-gray-300">
              This feature is completely managed by the remote team.
            </p>
          </div>
          <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-700/50">
            <h3 className="font-semibold text-purple-400 mb-2">Feature B</h3>
            <p className="text-gray-300">
              Independent deployment and development lifecycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const RemoteRoutes = () => {
  return (
    <Routes>
      <Route path="page1" element={<RemotePage1 />} />
      <Route path="page2" element={<RemotePage2 />} />
      <Route path="/" element={
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h3 className="text-xl font-bold text-purple-400 mb-4">Remote Routes</h3>
          <p className="text-gray-300 mb-4">
            These routes are exposed from the remote application:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Remote Page 1 - A demo page from remote</li>
            <li>Remote Page 2 - Another demo page with features</li>
          </ul>
        </div>
      } />
    </Routes>
  )
}

export default RemoteRoutes
