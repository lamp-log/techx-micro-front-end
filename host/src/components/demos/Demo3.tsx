import React from 'react'
import { Link } from 'react-router-dom'

const Demo3: React.FC = () => (
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
      </div>
    </div>
  </div>
)

export default Demo3
