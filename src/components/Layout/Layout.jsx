import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import FooteCom from "../Footer/FooteCom";


function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <FooteCom />
    </div>
  )
}

export default Layout
