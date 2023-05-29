import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './GlobalStyle'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './routes/Home'
import Skills from './routes/Skills'
import Projects from './routes/Projects'
import Contacts from './routes/Contacts'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
    },{
        path: "/skills",
        element: <Skills />
    },{
      path: "/projects",
      element: <Projects />
    },{
      path: "/contacts",
      element: <Contacts />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
