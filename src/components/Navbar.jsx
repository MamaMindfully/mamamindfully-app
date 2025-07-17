// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default function Navbar(){
  const user = auth.currentUser

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <nav>
      <Link to="/">Home</Link> | 
      {user ? (
        <>
          <Link to="/planner">Planner</Link> | 
          <Link to="/journal">Journal</Link> | 
          <Link to="/gratitude">Gratitude</Link> | 
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <Link to="/signin">Sign In</Link> | 
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  )
}
