import { Routes, Route } from 'react-router-dom'

const RemotePage1 = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Remote Page 1</h2>
    <p className="text-gray-600">
      This is a page from the remote application! It demonstrates how we can
      share routes between micro frontends.
    </p>
    <div className="mt-4 p-4 bg-blue-50 rounded-md">
      <p className="text-blue-800">
        📍 This route is defined in the remote application but rendered in the host.
      </p>
    </div>
  </div>
)

const RemotePage2 = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Remote Page 2</h2>
    <p className="text-gray-600">
      Another page from the remote application with different content.
    </p>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-green-50 rounded-md">
        <h3 className="font-semibold text-green-800 mb-2">Feature A</h3>
        <p className="text-green-700">
          This feature is completely managed by the remote team.
        </p>
      </div>
      <div className="p-4 bg-purple-50 rounded-md">
        <h3 className="font-semibold text-purple-800 mb-2">Feature B</h3>
        <p className="text-purple-700">
          Independent deployment and development lifecycle.
        </p>
      </div>
    </div>
  </div>
)

const RemoteRoutes = () => {
  return (
    <Routes>
      <Route path="remote/page1" element={<RemotePage1 />} />
      <Route path="remote/page2" element={<RemotePage2 />} />
    </Routes>
  )
}

export default RemoteRoutes
