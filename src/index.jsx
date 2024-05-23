import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelancers from './pages/Freelancers'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   div {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
   }
`

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Header />
        <Error />
      </>
    ),
  },
  {
    path: 'survey/:qNumParam',
    element: (
      <>
        <Header />
        <Survey />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Header />
        <Error />
      </>
    ),
  },
  {
    path: 'results',
    element: (
      <>
        <Header />
        <Results />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Header />
        <Error />
      </>
    ),
  },
  {
    path: 'freelancers',
    element: (
      <>
        <Header />
        <Freelancers />
      </>
    ),
    errorElement: (
      <>
        {' '}
        <Header />
        <Error />
      </>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
