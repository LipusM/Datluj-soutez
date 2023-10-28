import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import HomePage from './components/HomePage/index.jsx'
import Stage from './components/Stage/index.jsx'
import StageTime from './components/StageTime/index.jsx'
import StatisticTime from './components/StatisticTime/index.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/hra",
        element: <Stage />,
      },
      {
        path: "/hra-na-cas",
        element: <StageTime />,
      },
      {
        path: "/hra-na-cas/statistika",
        element: <StatisticTime />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
