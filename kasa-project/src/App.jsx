
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import './App.scss'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import PropertyPage from './pages/PropertyPage'

function App() {


  return (
    <>
    <HeaderComponent/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/property" element={<PropertyPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    <FooterComponent/>
    </>
    
  )
}

export default App
