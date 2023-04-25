'use client';

import { useState, useEffect } from 'react'

function Dashboard() {
  const [loading, setLoading] = useState(true)

  
  if (loading) {
    return <h2>Loading...</h2>
  }
  return <h1>Dashboard page</h1>
}

export default Dashboard