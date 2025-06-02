import React from 'react'

const Demo5: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          Demo 5: Type Generation
        </h2>
        <p className="text-gray-300 mb-6">
          Automatic TypeScript type generation ensures type safety across micro
          frontends.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-3 text-blue-400">
            Type Generation Process:
          </h3>
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

        <div className="mt-6 bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-3 text-blue-400">
            Generated Type Example:
          </h3>
          <pre className="text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto">
            {`declare module "remote/Button" {
  export { default } from "./remote/components/Button";
  export * from "./remote/components/Button";
}`}
          </pre>
        </div>
      </div>
    </div>
  </div>
)

export default Demo5
