import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-pf" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/react-pf/about" element={<About />} />
          <Route path="/react-pf/contact" element={<Contact />} />
          <Route path="/react-pf/portfolio" element={<Portfolio />} />
          <Route path="/react-pf/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App