import React from 'react'
import { Outlet } from 'react-router-dom'

function Planets() {
  return (
    <div className="card">
      <div className="card-body">
        <Outlet />
      </div>
    </div>
  )
}

export default Planets