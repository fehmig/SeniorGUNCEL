import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {GrMap} from "react-icons/gr"
import {FaRoute} from "react-icons/fa"


const Packages = () => {

    return(
        <>
        
        <>
        
        <Navbar/>
       <br/> <br/> <br/> <br/> <br/>
                <div className="routepage">
                       <i><h1>POPÜLER ROTALAR, ROTA ÖNERİLERİ BURADA GÖZÜKECEK </h1>  </i>
                   <br/> <br/> <br/> <br/> <br/>


                   <div className="packages">
                       <h3>PACKAGE 1 </h3>
                   
                   </div>
                   
                   <div className="packages">  <h3>PACKAGE 2 </h3></div>
                  
                   <br/> <br/> 
                  
                   <div className="packages"> <h3>   PACKAGE 3</h3></div>
                    
                   <div className="packages"> <h3>  PACKAGE 4</h3></div>
               </div> 
      <Footer/>
               
       </>      
                
        </>                
        )
}

export default Packages