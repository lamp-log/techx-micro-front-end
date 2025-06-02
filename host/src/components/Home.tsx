import React from 'react'

const Home: React.FC = () => (
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

export default Home
