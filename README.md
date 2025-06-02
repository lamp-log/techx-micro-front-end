# Micro Frontend Demo Project - TechX

This project demonstrates Micro Frontend architecture using Module Federation with React, TypeScript, and Vite.

## 🎯 Project Overview

A complete example of Micro Frontend implementation showcasing:
- Runtime integration via Module Federation
- Full TypeScript support with auto-generated types
- Error boundaries for resilient component loading
- Hot Module Replacement across applications
- Shared routing and context between micro frontends

## 🛠 Tech Stack

- **React 19** with TypeScript
- **Vite 6** as build tool
- **TypeScript 5.8** for type safety
- **@originjs/vite-plugin-federation** for Module Federation
- **vite-plugin-dts** for TypeScript declaration generation
- **React Router v6** for navigation
- **Tailwind CSS** for styling

## 📁 Project Structure

```
techx-micro-front-end/
├── host/                           # Main container application (port 5000)
│   ├── src/
│   │   ├── @types/                # TypeScript type definitions
│   │   │   ├── remote/            # Synced types from remote
│   │   │   └── remotes.d.ts       # Auto-generated module declarations
│   │   ├── components/
│   │   │   ├── demos/             # Demo components for presentation
│   │   │   │   ├── Demo1.tsx      # Error boundary demo
│   │   │   │   ├── Demo2.tsx      # Live updates demo
│   │   │   │   ├── Demo3.tsx      # Shared routing demo
│   │   │   │   ├── Demo4.tsx      # Shared context demo
│   │   │   │   └── Demo5.tsx      # Type generation demo
│   │   │   ├── ErrorBoundary.tsx  # Error handling wrapper
│   │   │   ├── RemoteComponent.tsx # Dynamic remote loader
│   │   │   ├── Navigation.tsx     # App navigation
│   │   │   └── Layout.tsx         # App layout
│   │   ├── App.tsx                # Main app with routing
│   │   └── main.tsx               # Entry point
│   ├── scripts/
│   │   ├── sync-types.sh          # Copy types from remote
│   │   └── gen-remotes-dts.sh     # Generate module declarations
│   ├── vite.config.ts             # Federation consumer config
│   └── package.json
│
└── remote/                         # Micro frontend (port 5001)
    ├── src/
    │   ├── components/             # Exposed components
    │   │   ├── Button.tsx         # Reusable button component
    │   │   └── Counter.tsx        # Stateful counter component
    │   ├── contexts/              # Shared contexts
    │   │   ├── UserContext.ts     # Main context export
    │   │   ├── UserContext.context.ts
    │   │   ├── UserContext.hook.ts
    │   │   └── UserContext.provider.tsx
    │   ├── routes/                # Exposed routes
    │   │   └── index.tsx          # Remote route definitions
    │   └── App.tsx
    ├── dist/
    │   └── @mf-types/             # Generated TypeScript declarations
    ├── vite.config.ts             # Federation provider config
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd techx-micro-front-end
```

2. Install dependencies for both applications:
```bash
# Install host dependencies
cd host
npm install

# Install remote dependencies
cd ../remote
npm install
```

Note: Module Federation plugins are already installed:
- `@originjs/vite-plugin-federation` in both host and remote
- `vite-plugin-dts` in remote for type generation

## 🏃‍♂️ Running the Applications

### Development Mode

You'll need 3 terminal windows:

**Terminal 1 - Build & Watch Remote:**
```bash
cd remote
npm run build:watch
```

**Terminal 2 - Serve Remote:**
```bash
cd remote
npm run preview
```

**Terminal 3 - Run Host:**
```bash
cd host
npm run dev
```

Access the applications:
- **Host**: http://localhost:5000
- **Remote**: http://localhost:5001

### Type Generation

When you update remote components, sync the types:
```bash
cd host
npm run types:sync
```

This command:
1. Copies type definitions from `remote/dist/@mf-types/` to `host/src/@types/remote/`
2. Generates `remotes.d.ts` with proper module declarations

## 🎮 Demo Scenarios

### Demo 1: Error Boundary
- Demonstrates resilient component loading
- Shows fallback UI when remote is unavailable
- Includes retry functionality

### Demo 2: Live Component Updates
- Shows Hot Module Replacement across micro frontends
- Edit Counter component in remote to see live updates
- No page refresh needed

### Demo 3: Shared Routing
- Remote defines its own routes
- Host integrates remote routes seamlessly
- Demonstrates micro frontend composition

### Demo 4: Shared Context
- UserContext provider from remote
- Shared state management across applications
- Full TypeScript support for context

### Demo 5: Type Generation
- Automatic TypeScript declaration generation
- Type-safe imports from remote modules
- IntelliSense support in IDE

## 🔧 Key Features

### Module Federation Configuration

**Remote exposes:**
```typescript
exposes: {
  './Button': './src/components/Button',
  './Counter': './src/components/Counter',
  './UserContext': './src/contexts/UserContext',
  './routes': './src/routes/index',
}
```

**Host consumes:**
```typescript
remotes: {
  remote: "http://localhost:5001/assets/remoteEntry.js",
}
```

### Error Handling
- ErrorBoundary component wraps all remote imports
- Graceful fallbacks for failed loads
- Retry mechanisms for transient failures

### Type Safety
- Full TypeScript support across micro frontends
- Auto-generated type declarations
- IDE IntelliSense for remote modules

## 📋 Available Scripts

### Host
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run types:sync` - Sync types from remote
- `npm run lint` - Run ESLint

### Remote
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:watch` - Build and watch for changes
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗 Deployment Considerations

1. Build both applications:
```bash
cd remote && npm run build
cd ../host && npm run build
```

2. Deploy `remote/dist` to CDN or static hosting
3. Deploy `host/dist` to your main server
4. Update remote URL in host's vite.config.ts for production environment

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to fetch dynamically imported module"**
   - Ensure remote is running on port 5001
   - Check CORS headers in remote's vite.config.ts
   - Clear browser cache

2. **Types not syncing**
   - Ensure remote is built first (`npm run build`)
   - Check that `dist/@mf-types` exists in remote
   - Run `npm run types:sync` in host directory

3. **Module not found errors**
   - Verify exposed modules in remote's vite.config.ts
   - Check that shared dependencies versions match
   - Rebuild both applications

## 📚 Best Practices Demonstrated

1. **Error Boundaries** - Always wrap remote components
2. **Type Safety** - Auto-generate types for all remote modules
3. **Version Management** - Lock shared dependency versions
4. **Component Isolation** - Each micro frontend is independent
5. **Development Experience** - HMR and type safety maintained

## 🎯 Architecture Benefits

- ✅ **Team Autonomy**: Teams can work independently
- ✅ **Technology Flexibility**: Each MFE can use different versions
- ✅ **Incremental Updates**: Deploy micro frontends independently
- ✅ **Fault Isolation**: Errors in one MFE don't crash others
- ✅ **Type Safety**: Full TypeScript support maintained

## 👥 Presentation Notes

This project is designed for live demonstration. The demos are structured to show:
1. The problem each feature solves
2. The implementation approach
3. The benefits in a real-world scenario

Remember to:
- Start with both apps running
- Show the code structure
- Demonstrate live updates
- Explain the type generation process
- Highlight error handling

## 📝 License

This project is created for TechX demonstration purposes.