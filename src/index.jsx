import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelancers from './pages/Freelancers'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: 'survey/:qNumParam',
    element: <Survey />,
    errorElement: <Error />,
  },
  {
    path: 'results',
    element: <Results />,
    errorElement: <Error />,
  },
  {
    path: 'freelancers',
    element: <Freelancers />,
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
