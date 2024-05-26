import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelancers from './pages/Freelancers'
import Footer from './components/Footer'
import { SurveyProvider, ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'

const headerAndElement = (element) => (
  <>
    <Header />
    {element}
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: headerAndElement(<Home />),
    errorElement: headerAndElement(<Error />),
  },
  {
    path: 'survey/:qNumParam',
    element: headerAndElement(<Survey />),
    errorElement: headerAndElement(<Error />),
  },
  {
    path: 'results',
    element: headerAndElement(<Results />),
    errorElement: headerAndElement(<Error />),
  },
  {
    path: 'freelancers',
    element: headerAndElement(<Freelancers />),
    errorElement: headerAndElement(<Error />),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
        <Footer />
      </SurveyProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
