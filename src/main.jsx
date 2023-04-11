import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Routes from './Components/Routes/Routes';

import Blogs from './Components/Blogs/Blogs';
import Statistics from './Components/Statistics/Statistics';
import Details from './Components/Applied/Details';


const router = createBrowserRouter([
 {
  path: '/',
  element: <Routes></Routes>,
  children: [
    {
      path:'/',
      element: <App></App>,
      loader: ()=> fetch('featured.json')
    },
   
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blogs></Blogs>
    },
    {
      path:'details',
      element: <Details></Details>
    }
   
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
