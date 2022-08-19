import React from 'react'
import { Link } from 'react-router-dom'

// Fazliddin
function Home() {
  return (
    <div
      style={{
        background: '#1d1d1d',
        color: 'gray',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}
    >
      Fazliddin
      <Link
        to="/profile"
        style={{ color: '#1d1d1d', background: '#fff', padding: '10px 25px' }}
      >
        Akmal
      </Link>
      <Link
        to="/product"
        style={{ color: '#1d1d1d', background: '#fff', padding: '10px 25px' }}
      >
        Ixtiyor
      </Link>
    </div>
  )
}

export default Home
