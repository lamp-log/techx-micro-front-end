# Module Federation Demo Checklist

## 📋 Pre-Demo Setup
- [ ] Both applications running (host:5000, remote:5001)
- [ ] Clear browser cache
- [ ] Open code editor with both projects

## 🚀 Demo Steps

### 1. Install Module Federation
```bash
# In both host and remote directories
npm install -D @originjs/vite-plugin-federation

# In remote only (for type generation)
npm install -D vite-plugin-dts
```

### 2. Configure Remote (vite.config.ts)
- Uncomment import statements
- Uncomment dts plugin
- Uncomment federation plugin with exposes
- Uncomment build configuration

### 3. Configure Host (vite.config.ts)
- Uncomment import statement
- Uncomment federation plugin with remotes
- Uncomment build configuration

### 4. Build Remote
```bash
cd remote
npm run build
npm run preview  # Terminal 1
npm run build:watch  # Terminal 2
```

### 5. Update Host Components
- Uncomment imports in App.tsx
- Update ErrorBoundary.tsx (use full implementation)
- Update RemoteComponent.tsx (use full implementation)

### 6. Demo 1: Error Boundary
- Uncomment RemoteComponent in Demo1
- Show component loading
- Stop remote server to trigger error
- Restart and show recovery

### 7. Demo 2: Live Changes
- Uncomment RemoteComponent in Demo2
- Edit Counter component in remote
- Show live updates

### 8. Demo 3: Shared Router
- Uncomment remote routes in App.tsx Routes
- Navigate to remote pages

### 9. Demo 4: Shared Context
- Uncomment UserProvider import and usage
- Wrap Demo4 content with UserProvider
- Show context sharing

### 10. Demo 5: Type Generation
- Run type sync in host:
```bash
cd host
npm run types:sync
```
- Show IntelliSense working
- Update tsconfig.json include path

## 🎯 Key Points to Emphasize
1. Independent deployment
2. Runtime integration
3. Type safety
4. Error resilience
5. Development experience
