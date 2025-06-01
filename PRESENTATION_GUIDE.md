# Presentation Guide - Micro Frontend Setup

## Pre-Presentation Checklist

1. **Start both applications:**
   ```bash
   # Terminal 1
   cd remote && npm run dev
   
   # Terminal 2
   cd host && npm run dev
   ```

2. **Verify both apps are running:**
   - Host: http://localhost:5000
   - Remote: http://localhost:5001

## Step-by-Step Implementation During Presentation

### Step 1: Install Module Federation

```bash
# In both host and remote directories
npm install -D @originjs/vite-plugin-federation
```

### Step 2: Configure Remote vite.config.ts

Add federation plugin to expose components:
```typescript
import federation from "@originjs/vite-plugin-federation"

// In plugins array:
federation({
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
    "./Counter": "./src/components/Counter",
    "./UserContext": "./src/contexts/UserContext",
    "./routes": "./src/routes/index",
  },
  shared: ["react", "react-dom", "react-router-dom"],
})
```

### Step 3: Configure Host vite.config.ts

Add federation plugin to consume remote:
```typescript
import federation from "@originjs/vite-plugin-federation"

// In plugins array:
federation({
  name: "host",
  remotes: {
    remote: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
})
```

### Step 4: Create ErrorBoundary Component in Host

Create `host/src/components/ErrorBoundary.tsx` (code from guide)

### Step 5: Create RemoteComponent Wrapper

Create `host/src/components/RemoteComponent.tsx` (code from guide)

### Step 6: Update Host App.tsx Demos

Replace placeholder demos with actual implementations.

### Step 7: Type Generation Setup

1. Install vite-plugin-dts in remote:
   ```bash
   cd remote && npm install -D vite-plugin-dts
   ```

2. Add dts plugin to remote vite.config.ts

3. Create type sync scripts in host/scripts/

4. Run type generation

## Demo Flow

### Demo 1: Error Boundary
1. Show component loading from remote
2. Stop remote server to trigger error
3. Show error boundary handling
4. Restart remote and show recovery

### Demo 2: Live Changes
1. Show Counter component in host
2. Edit Counter component in remote
3. Show live updates in host

### Demo 3: Shared Router
1. Navigate to Demo 3
2. Show remote routes integrated
3. Navigate between remote pages

### Demo 4: Shared Context
1. Show UserContext from remote
2. Login/logout functionality
3. State shared across components

### Demo 5: TypeGen
1. Show TypeScript IntelliSense
2. Run type generation script
3. Show updated types

## Key Points to Emphasize

1. **Independence**: Teams can work independently
2. **Runtime Integration**: No build-time coupling
3. **Type Safety**: Full TypeScript support
4. **Error Resilience**: Graceful degradation
5. **Developer Experience**: HMR and type generation

## Troubleshooting Tips

- Clear browser cache if module loading fails
- Ensure both servers are running
- Check console for CORS errors
- Verify exposed module paths match imports
