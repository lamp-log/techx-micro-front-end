import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RemoteRoutes from './components/remote/Routes'

// Components
import Layout from './components/Layout'
import Home from './components/Home'
import { Demo1, Demo2, Demo3, Demo4, Demo5 } from './components/demos'

function App() {
  return (
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
  )
}

export default App
