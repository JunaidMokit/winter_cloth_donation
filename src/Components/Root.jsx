import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Root() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
