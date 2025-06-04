import { lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './components/Home'
import Layout from './components/Layout'
import RemoteRoutes from './components/remote/Routes'

const Demo1 = lazy(() => import('./components/demos/Demo1'))
const Demo2 = lazy(() => import('./components/demos/Demo2'))
const Demo3 = lazy(() => import('./components/demos/Demo3'))
const Demo4 = lazy(() => import('./components/demos/Demo4'))
const Demo5 = lazy(() => import('./components/demos/Demo5'))

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo1" element={<Demo1 />} />
            <Route path="/demo2" element={<Demo2 />} />
            <Route path="/demo3" element={<Demo3 />} />
            <Route path="/demo4" element={<Demo4 />} />
            <Route path="/demo5" element={<Demo5 />} />
            <Route path="/remote/*" element={<RemoteRoutes />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
