# Micro Frontend Demo Project

This project demonstrates Micro Frontend architecture using Module Federation with React, TypeScript, and Vite.

## Project Structure

```
techx-micro-front-end/
├── host/                 # Main container application (port 5000)
│   ├── src/
│   │   ├── components/   # Host components
│   │   ├── App.tsx      # Main app with routing
│   │   └── main.tsx     # Entry point
│   └── vite.config.ts   # Vite configuration
│
└── remote/              # Micro frontend (port 5001)
    ├── src/
    │   ├── components/  # Components to be exposed
    │   │   ├── Button.tsx
    │   │   └── Counter.tsx
    │   ├── contexts/    # Shared contexts
    │   │   └── UserContext.tsx
    │   ├── routes/      # Routes to be exposed
    │   │   └── index.tsx
    │   └── App.tsx
    └── vite.config.ts   # Vite configuration
```

## Tech Stack

- **React 18** with TypeScript
- **Vite 5** as build tool
- **React Router** for navigation
- **Tailwind CSS** for styling
- **@originjs/vite-plugin-federation** (to be added during presentation)

## Running the Applications

### Start the Remote Application
```bash
cd remote
npm run dev
```
The remote app will be available at http://localhost:5001

### Start the Host Application
```bash
cd host
npm run dev
```
The host app will be available at http://localhost:5000

## Demo Scenarios

### Demo 1: Error Boundary
Shows how to handle errors when loading remote components with graceful fallbacks.

### Demo 2: Live Component Updates
Demonstrates hot module replacement working across micro frontends.

### Demo 3: Shared Routing
Shows how routes from the remote can be integrated into the host application.

### Demo 4: Shared Context
Demonstrates sharing React context between host and remote applications.

### Demo 5: Type Generation
Shows automatic TypeScript type generation for remote modules.

## Next Steps (During Presentation)

1. Install Module Federation plugin:
   ```bash
   npm install -D @originjs/vite-plugin-federation
   ```

2. Configure Module Federation in vite.config.ts files

3. Set up type generation with vite-plugin-dts

4. Create RemoteComponent wrapper with error boundaries

5. Implement live demos

## Components Available in Remote

### Button Component
- Primary and secondary variants
- Fully styled with Tailwind CSS
- TypeScript props interface

### Counter Component
- Stateful component with increment/decrement
- Demonstrates component isolation
- Styled with Tailwind CSS

### UserContext
- Context provider for user state
- useUser hook for consuming context
- Full TypeScript support

### Remote Routes
- Two demo pages
- Ready to be integrated into host routing
