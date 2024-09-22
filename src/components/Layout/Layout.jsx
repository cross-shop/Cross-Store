import React from 'react'
import { Outlet } from 'react-router-dom'

import FooterCom from '../foooter/FooteCom'

import Foter from '../../pages/Foter'

function Layout() {
  return (
    <div>
      <Outlet />
      <Foter />
    </div>
  )
}

export default Layout
