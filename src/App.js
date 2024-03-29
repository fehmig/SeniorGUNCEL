import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import MainPage from './MainPage'
import Navbar from './Components/Navbar/Navbar'
import Map from './Map/Map'
import MapPage from './MapPage'
import Packages from './Components/Packages'
import RoutePage from './Components/RoutePage'
import About from './Components/About'
import Forum from './Components/Forum'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from './Components/Contact'
import Login from './Components/login'
import Register from './Components/register'
import "react-toastify/dist/ReactToastify.css"
import Profile from './Profile'
import ReactModal from 'react-modal'
import CreateRoute from './CreateRoute'
import DenemeMap from './Map/denemeMap'

ReactModal.setAppElement('#root');

const App = () => {
  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/routes/:id" element={<RoutePage/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login/>} />      
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />     
        <Route path="/create" element={<CreateRoute/>} />    
      </Routes>
    </Router>
  )
}

export default App