import React, { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
      <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
        Remote Counter Component
      </h3>
      <div className="bg-gray-900 rounded-lg p-6 mb-6">
        <p className="text-4xl font-bold text-center">
          <span className="text-gray-400">Count:</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {count}
          </span>
        </p>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-lg transform hover:scale-105"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium shadow-lg transform hover:scale-105"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
