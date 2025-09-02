import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (<>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )
}
