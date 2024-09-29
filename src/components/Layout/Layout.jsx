import React from 'react'
import { Outlet } from 'react-router-dom'

import FooteCom from "../foooter/FooteCom";


function Layout() {
  return (
    <div>
      <Outlet />
      <FooteCom />
    </div>
  )
}

export default Layout
