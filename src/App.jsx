// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar          from './components/Navbar'
import ProtectedRoute  from './components/ProtectedRoute'
import Home            from './pages/Home'
import Planner         from './pages/Planner'
import Journal         from './pages/Journal'
import Gratitude       from './pages/Gratitude'
import SignUp          from './pages/SignUp'
import SignIn          from './pages/SignIn'

export default function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/signup"    element={<SignUp />} />
        <Route path="/signin"    element={<SignIn />} />
        <Route 
          path="/planner" 
          element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/journal" 
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/gratitude" 
          element={
            <ProtectedRoute>
              <Gratitude />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}
