import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PropertyPage from './pages/PropertyPage.jsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path:'/property',
    element: <PropertyPage/>
  },
  {
    path: '/*',
    element: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
