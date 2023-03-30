import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {GrMap} from "react-icons/gr"
import {FaRoute} from "react-icons/fa"


const RoutePage = () => {

    return(
        <>
        
        <>
        
        <Navbar/>
       <br/> <br/> <br/> <br/> <br/>
                <div className="routepage">
                       <i><h1>ROTA DETAYLARI BURADA YER ALACAK </h1>  </i>
                   <br/> <br/> <br/> <br/> <br/>
                   <div className="route-harita">
                       <h3><GrMap/>  HARİTA</h3>
                   
                   </div>
                   
                   <div className="route-durum"> <h3><FaRoute/>  ROTA BİLGİLERİ, DURUMU </h3></div>
                  
                   <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/> 
                  
                   <div className="route-yorum"> <h3>   YORUMLAR</h3></div>
               </div> 
      <Footer/>
               
       </>      
                
        </>                
        )
}

export default RoutePage