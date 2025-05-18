import React from 'react'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div>
      <h1>Its root page</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
