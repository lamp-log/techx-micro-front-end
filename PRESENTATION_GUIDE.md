# TechX Micro Frontend Presentation Guide

## 🎯 Overview
This guide combines all presentation materials for demonstrating Micro Frontend architecture using Module Federation with React, TypeScript, and Vite.

---

## 📋 Pre-Presentation Setup

### Environment Check
- [ ] Both applications ready (host:5000, remote:5001)
- [ ] Clear browser cache
- [ ] Code editor open with both projects
- [ ] Terminal windows ready (3 terminals needed)

### Initial State Verification
```bash
# Terminal 1 - Remote Build & Watch
cd remote && npm run build:watch

# Terminal 2 - Remote Preview
cd remote && npm run preview

# Terminal 3 - Host Dev
cd host && npm run dev
```

Verify both apps are accessible:
- **Host**: http://localhost:5000
- **Remote**: http://localhost:5001

---

## 🚀 Live Implementation Steps

### Step 1: Install Module Federation

Show the installation process:
```bash
# In both host and remote directories
npm install -D @originjs/vite-plugin-federation

# In remote only (for type generation)
npm install -D vite-plugin-dts
```

### Step 2: Configure Remote Application

Update `remote/vite.config.ts`:
```typescript
import federation from "@originjs/vite-plugin-federation"
import dts from "vite-plugin-dts"

// Add to plugins array:
dts({
  insertTypesEntry: true,
  outDir: "dist/@mf-types",
  include: ["src/**/*.ts", "src/**/*.tsx"],
  exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
}),
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

// Add build configuration:
build: {
  modulePreload: false,
  target: "esnext",
  minify: false,
  cssCodeSplit: false,
}
```

### Step 3: Configure Host Application

Update `host/vite.config.ts`:
```typescript
import federation from "@originjs/vite-plugin-federation"

// Add to plugins array:
federation({
  name: "host",
  remotes: {
    remote: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
})

// Add build configuration:
build: {
  modulePreload: false,
  target: "esnext",
  minify: false,
  cssCodeSplit: false,
}
```

### Step 4: Build and Serve Remote

Switch to the build & watch mode:
```bash
# Terminal 1 - Build & Watch
cd remote
npm run build:watch

# Terminal 2 - Serve Remote
cd remote
npm run preview

# Terminal 3 - Host Dev
cd host
npm run dev
```

### Step 5: Update Host Components

1. **Update ErrorBoundary.tsx** - Use full implementation
2. **Update RemoteComponent.tsx** - Use full implementation with lazy loading
3. **Update App.tsx** - Uncomment imports and demo components

---

## 🎮 Demo Scenarios

### Demo 1: Error Boundary (Resilience)
**Key Points:**
- Component isolation
- Graceful error handling
- Recovery mechanisms

**Steps:**
1. Show RemoteComponent loading Button from remote
2. Stop remote server (Ctrl+C in Terminal 2)
3. Demonstrate error boundary catches the failure
4. Restart remote server (`npm run preview`)
5. Click "Try again" to show recovery

### Demo 2: Live Component Updates (Development Experience)
**Key Points:**
- Hot Module Replacement across apps
- Independent development
- Real-time updates

**Steps:**
1. Show Counter component in host
2. Edit `remote/src/components/Counter.tsx`
3. Watch automatic rebuild in Terminal 1
4. See live updates in host without refresh

### Demo 3: Shared Routing (Composition)
**Key Points:**
- Route ownership by teams
- Seamless integration
- Navigation consistency

**Steps:**
1. Navigate to Demo 3
2. Show remote routes in navigation
3. Click remote page links
4. Demonstrate URL changes and routing

### Demo 4: Shared Context (State Management)
**Key Points:**
- Cross-app state sharing
- Context provider from remote
- TypeScript support

**Steps:**
1. Show UserContext usage
2. Login with sample user
3. Show state persists across demos
4. Logout and show state clearing

### Demo 5: Type Generation (Developer Experience)
**Key Points:**
- Automatic type generation
- IntelliSense support
- Type safety across apps

**Steps:**
1. Show TypeScript errors initially
2. Run type generation:
   ```bash
   cd host
   npm run types:sync
   ```
3. Show generated `remotes.d.ts`
4. Demonstrate IntelliSense working
5. Update `tsconfig.json` if needed

---

## 🔧 Quick Reference

### Module Federation Configuration
```typescript
// Remote - Exposes
federation({
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./ComponentName": "./src/path/to/Component",
  },
  shared: ["react", "react-dom"],
})

// Host - Consumes
federation({
  name: "host",
  remotes: {
    remote: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
})
```

### Import Pattern
```typescript
// Dynamic import with error boundary
const RemoteButton = lazy(() => import("remote/Button"))

<ErrorBoundary>
  <Suspense fallback={<div>Loading...</div>}>
    <RemoteButton />
  </Suspense>
</ErrorBoundary>
```

---

## 💡 Key Messages

### Benefits to Emphasize
1. **Team Autonomy**: Independent development and deployment
2. **Technology Flexibility**: Different versions/frameworks possible
3. **Fault Isolation**: Errors don't cascade
4. **Incremental Migration**: Adopt gradually
5. **Developer Experience**: Type safety and HMR maintained

### Architecture Advantages
- Runtime integration (not build-time)
- No monolithic builds
- Independent CI/CD pipelines
- Smaller, focused codebases
- Clear ownership boundaries

---

## 🚨 Troubleshooting

### Common Issues & Solutions

**"Failed to fetch dynamically imported module"**
- Check remote is running on correct port
- Clear browser cache
- Verify CORS headers in remote vite.config

**Types not syncing**
- Ensure remote is built first
- Check `dist/@mf-types` exists
- Run `npm run types:sync` in host

**Module not found**
- Verify exposed paths in vite.config
- Check shared dependency versions
- Rebuild both applications

**Hot reload not working**
- Use `build:watch` in remote
- Keep preview server running
- Check terminal for build errors

---

## 📝 Presentation Flow

### Opening (2 min)
- Problem statement: Monolithic frontend challenges
- Solution: Micro Frontends with Module Federation
- What we'll demonstrate today

### Setup Demo (5 min)
- Show initial project structure
- Install Module Federation
- Configure both applications

### Feature Demos (15 min)
- Demo 1: Error Boundary (3 min)
- Demo 2: Live Updates (3 min)
- Demo 3: Shared Routing (3 min)
- Demo 4: Shared Context (3 min)
- Demo 5: Type Generation (3 min)

### Conclusion (3 min)
- Recap benefits
- Use cases
- Q&A

---

## 🎤 Speaker Notes

### Transitions
- "Now let's see what happens when things go wrong..."
- "But what about the development experience?"
- "How do we maintain type safety?"

### Emphasis Points
- This is runtime, not build-time integration
- Each team owns their deployment
- No coordination needed for releases
- Type safety is maintained automatically

### Audience Engagement
- Ask about current frontend challenges
- Show real-time editing
- Encourage questions during demos

---

## ✅ Post-Presentation

1. Share GitHub repository
2. Provide this guide as reference
3. Offer follow-up discussions
4. Share additional resources