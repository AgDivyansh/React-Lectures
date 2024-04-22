import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

const router = createBrowserRouter ([

  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "" ,
        element :<Home/>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
