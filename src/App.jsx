import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Index from './Pages/index'

function App() {
  return (
    <Router>
      <header className="flex gap-2">
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
