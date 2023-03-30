import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import MainPage from './MainPage'
import Navbar from './Components/Navbar/Navbar'
import Map from './Map/Map'
import MapPage from './MapPage'

import RoutePage from './Components/RoutePage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"





const App = () => {
  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/routes" element={<RoutePage/>} />
        
       
        
        
      </Routes>
    </Router>
  )
}

export default App