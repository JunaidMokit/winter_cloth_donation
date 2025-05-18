import React from 'react'
import Navbar from '../AnotherComponent/Navbar'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div>
      <h2>Root Page</h2>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
