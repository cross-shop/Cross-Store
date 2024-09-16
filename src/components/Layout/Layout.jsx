import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../foooter/Footer'


function Layout() {
  return (
    <div>
      <Outlet />
        <Footer />      
      

    </div>
  )
}

export default Layout
