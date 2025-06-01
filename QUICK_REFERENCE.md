# Quick Reference - Module Federation Setup

## 1. Install Dependencies
```bash
npm install -D @originjs/vite-plugin-federation
```

## 2. Remote Configuration (vite.config.ts)
```typescript
import federation from "@originjs/vite-plugin-federation"

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

## 3. Host Configuration (vite.config.ts)
```typescript
import federation from "@originjs/vite-plugin-federation"

federation({
  name: "host",
  remotes: {
    remote: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
})
```

## 4. Build Configuration
Add to both vite.config.ts:
```typescript
build: {
  modulePreload: false,
  target: "esnext",
  minify: false,
  cssCodeSplit: false,
}
```

## 5. Import Remote Components
```typescript
// Dynamic import
const Button = lazy(() => import("remote/Button"))

// With error boundary
<ErrorBoundary>
  <Suspense fallback={<div>Loading...</div>}>
    <Button />
  </Suspense>
</ErrorBoundary>
```
