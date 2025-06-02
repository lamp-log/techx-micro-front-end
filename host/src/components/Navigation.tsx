import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => (
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
)

export default Navigation
