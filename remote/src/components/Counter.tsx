import React, { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200 text-center">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Remote Counter Component
      </h3>
      <p className="text-3xl font-bold text-gray-700 mb-6">
        Count: <span className="text-blue-600">{count}</span>
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
