import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {GrMap} from "react-icons/gr"
import {FaRoute, FaRegCommentDots} from "react-icons/fa"


const RoutePage = () => {

    const[yorum, setYorum]=useState("")
    const[message, setMessage] = useState("")
    const handleChange = (event) => {
        setMessage(event.target.value);
  
      
      };

      const yorumyap = () => {
        setYorum(message)
      }

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
                  
                   <br/>   <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/>  <br/> <br/> 
                  
                   <div className="route-yorum"> <div><span><h3>BİZİMLE YORUMUNU PAYLAŞ<FaRegCommentDots className="icon" /></h3></span><span></span></div>
                   <input
                   
                   className="input-yorum"
                    type='text'
                    placeholder="Yorum yapabilirsiniz..."
                    value={message} onChange={handleChange}
                    />
                   <button
                    className="btn-yorum"
                    onClick={yorumyap}
                   >
                        YORUM YAP

                   </button>
                            <br/> <br/>
                       
                            
                        
                   </div>
                   <br/>
                   <div className="route-yorum-goruntule"> <h3><u></u></h3>
                  
                            <br/> 
                        <div className="yorumlar">
                        
                                <div>
                                    <b>Kullanıcı1 :</b>
                                    <br/>
                                    <i>Çok güzel!</i>
                                    <br/><br/>
                                    <b>Kullanıcı2 :</b>
                                    <br/>
                                    <i>Keinlikle tavsiye ettiğim bir rotadır.</i>
                                    <br/><br/>
                                    <b>Kullanıcı3 :</b>
                                    <br/>
                                    <i>Tekrar görüşmek üzere!</i>
                                    <br/><br/>
                                    <b>Kullanıcı4 :</b>
                                    <br/>
                                    <i>Sırada Akdeniz var...</i>
                                    <br/><br/>
                                    <b>Kullanıcı5 :</b>
                                    <br/>
                                    <i>Yol durumunun belirtilmesi sayesinde rotamızın süresi azaldı!</i>
                                    <br/><br/>
                                    <b>Test Kullanıcı :</b>
                                    <br/>
                                    <i>{yorum}</i>
                                </div>
                        </div>
                            
                        
                   </div>
               </div> 
      <Footer/>
               
       </>      
                
        </>                
        )
}

export default RoutePage