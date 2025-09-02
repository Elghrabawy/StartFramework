import { useState } from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import NotFound from './pages/NotFound'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './Pages/Contact'

function App() {
  const router = createBrowserRouter([
    {path: "", element: <Layout/>, children: [
      {path: "*", element: <NotFound/>},
      {path: "", element: <Home />},
      {path: "about", element: <About/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "contact", element: <Contact/>},
    ]}
  ])

  return <RouterProvider router={router}></RouterProvider>
  
}

export default App
