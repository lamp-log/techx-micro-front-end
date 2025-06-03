import React, { useState } from 'react'
import RemoteButton from './RemoteButton'

interface TechStackItem {
  name: string
  details: string
  link?: string
  version?: string
}

const Home: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const techStack: TechStackItem[] = [
    {
      name: 'React 19 with TypeScript 5.8',
      details:
        'Latest React with concurrent features and TypeScript for type safety',
      link: 'https://react.dev',
      version: 'react@19.1.0, typescript@5.8.3',
    },
    {
      name: 'Vite 6 as build tool',
      details:
        'Next generation frontend tooling for lightning fast development',
      link: 'https://vitejs.dev',
      version: 'vite@6.3.5',
    },
    {
      name: '@originjs/vite-plugin-federation',
      details:
        'Module Federation plugin for Vite, enabling runtime integration of micro frontends',
      link: 'https://github.com/originjs/vite-plugin-federation',
      version: '@originjs/vite-plugin-federation@1.4.1',
    },
    {
      name: 'vite-plugin-dts (Type Generation)',
      details:
        'Generates TypeScript declaration files for exposed modules automatically',
      link: 'https://github.com/qmhc/vite-plugin-dts',
      version: 'vite-plugin-dts@4.5.4',
    },
    {
      name: 'React Router v6',
      details:
        'Declarative routing for React with support for nested routes and layouts',
      link: 'https://reactrouter.com',
      version: 'react-router-dom@6.30.1',
    },
    {
      name: 'Tailwind CSS',
      details: 'Utility-first CSS framework for rapid UI development',
      link: 'https://tailwindcss.com',
      version: 'tailwindcss@3.4.17',
    },
  ]

  const toggleExpand = (itemName: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName)
    } else {
      newExpanded.add(itemName)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Micro Frontend with Module Federation
          </h2>
          <p className="text-gray-300 mb-6">
            A demonstration of Micro Frontend architecture using Module
            Federation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-purple-400">
                  Tech Stack
                </h3>
                <RemoteButton
                  onClick={() => setExpandedItems(new Set())}
                  disabled={expandedItems.size === 0}
                  size="sm"
                  variant="secondary"
                >
                  Collapse All
                </RemoteButton>
              </div>
              <ul className="space-y-2">
                {techStack.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="w-full text-left group hover:bg-gray-800 rounded-lg p-2 -ml-2 transition-all duration-200"
                    >
                      <div className="flex items-center text-gray-300">
                        <span
                          className={`text-blue-400 mr-2 transition-transform duration-200 ${expandedItems.has(item.name) ? 'rotate-90' : ''}`}
                        >
                          ▸
                        </span>
                        <span className="group-hover:text-blue-400 transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems.has(item.name)
                          ? 'max-h-40 opacity-100 mt-2'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-6 p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">
                          {item.details}
                        </p>
                        {item.version && (
                          <p className="text-xs text-gray-500 font-mono mb-1">
                            {item.version}
                          </p>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            Learn more →
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Architecture
              </h3>
              <pre className="text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto">
                {`techx-micro-front-end/
├── host/      # Container (port 5000)
│   ├── src/
│   │   ├── @types/    # Generated types
│   │   └── components/
│   └── scripts/       # Type sync scripts
└── remote/    # Micro frontend (port 5001)
    ├── src/
    │   ├── components/
    │   ├── contexts/
    │   └── routes/
    └── dist/@mf-types/  # Type output`}
              </pre>
            </div>
          </div>

          <div className="mt-6 bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">
              Demo Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">
                  Runtime Integration
                </h4>
                <p className="text-sm">
                  Components loaded dynamically at runtime
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">
                  Error Boundaries
                </h4>
                <p className="text-sm">
                  Graceful error handling for remote components
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">
                  Live Updates
                </h4>
                <p className="text-sm">
                  Hot Module Replacement across applications
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">
                  Type Safety
                </h4>
                <p className="text-sm">
                  Full TypeScript support with auto-generation
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">
                  Shared Routing
                </h4>
                <p className="text-sm">
                  Seamless route integration between apps
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">
                  Shared Context
                </h4>
                <p className="text-sm">
                  State management across micro frontends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
