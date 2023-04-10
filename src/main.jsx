import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Jobs from './Components/Joblist/Jobs';
import Test from './Components/fd/Test';
import Routes from './Components/Routes/Routes';
import Orderedjob from './Components/OrderedJob/Orderedjob';
import Blogs from './Components/Blogs/Blogs';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Routes></Routes>,
  children: [
    {
      path:'/',
      element: <App></App>
    },
    {
      path:'orderd',
      element: <Orderedjob></Orderedjob>
    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blogs></Blogs>
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
