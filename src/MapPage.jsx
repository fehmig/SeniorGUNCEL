import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Map from './Map/Map'
import {withScriptjs} from "react-google-maps"

const MapLoader = withScriptjs(Map);

const MapPage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <div 
      className='haritalani'>
     <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzxgEQmpTKYtZQlFePgzZ9Fky7AgTWa-s"
      loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
    <Main/> 
   <Footer/>
    </>
  )
}

export default MapPage