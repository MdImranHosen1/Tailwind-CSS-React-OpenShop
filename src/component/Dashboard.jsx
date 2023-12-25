import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
      This is Dashboard 
      <Link to='/products'>Go to products Page</Link>
    </div>
  )
}
