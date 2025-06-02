import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/demo1', label: 'Error Boundary' },
    { path: '/demo2', label: 'Live Changes' },
    { path: '/demo3', label: 'Shared Router' },
    { path: '/demo4', label: 'Shared Context' },
    { path: '/demo5', label: 'TypeGen' },
  ]

  return (
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
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative px-3 py-2 rounded-md text-sm font-medium 
                      transition-all duration-200 flex items-center
                      transform active:scale-95
                      ${isActive 
                        ? 'text-white bg-gray-700 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                    )}
                    
                    {/* Click ripple effect container */}
                    <span className="relative overflow-hidden">
                      {item.label}
                      
                      {/* Hover glow effect */}
                      <span className={`
                        absolute inset-0 rounded-md opacity-0 hover:opacity-10 
                        bg-gradient-to-r from-blue-400 to-purple-500 
                        transition-opacity duration-300 pointer-events-none
                      `} />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
