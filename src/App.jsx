import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter([
    {path: "", element: <Layout/>, children: [
      {path: "*", element: <NotFound/>},
      {path: "", element: <Home />},
      {path: "home", element: <Navigate to="/" replace/>},
      {path: "about", element: <About/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "contact", element: <Contact/>},
    ]}
  ])

  return <RouterProvider router={router}></RouterProvider>
  
}

export default App
