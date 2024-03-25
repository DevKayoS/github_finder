import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/home.tsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
