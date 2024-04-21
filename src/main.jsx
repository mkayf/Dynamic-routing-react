import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Blogpage from './Blogpage'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import BlogDetails from './BlogDetails'
import Error404 from './Error404'
import Form from './Form'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Blogpage/>
  },
  {
    path : 'blogpage/:id',
    element : <BlogDetails/>
  },
  {
    path : '*',
    element : <Error404/>
  },
  {
    path : 'form',
    element : <Form/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
