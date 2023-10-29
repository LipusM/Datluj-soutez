import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import HomePage from './components/HomePage/index.jsx'
import Stage from './components/Stage/index.jsx'
import StageTime from './components/StageTime/index.jsx'
import StatisticTime from './components/StatisticTime/index.jsx'
import TimeGameRules from './components/TimeGameRules/index.jsx'
import GameRules from './components/GameRules/index.jsx'

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
        path: "/hra/pravidla",
        element: <GameRules />,
      },
      {
        path: "/hra-na-cas",
        element: <StageTime />,
      },
      {
        path: "/hra-na-cas/statistika",
        element: <StatisticTime />,
      },
      {
        path: "/hra-na-cas/pravidla",
        element: <TimeGameRules />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
