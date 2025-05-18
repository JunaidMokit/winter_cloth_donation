import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
