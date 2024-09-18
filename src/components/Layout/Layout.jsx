import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterCom from '../foooter/FooteCom'

function Layout() {
  return (
    <div>
      <Outlet />
      <FooterCom />
    </div>
  )
}

export default Layout
