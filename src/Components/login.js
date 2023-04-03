import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import video from './video.mp4'
import 'aos/dist/aos.css'

//


//

const Login = () => {

    return (


        <>

            <Navbar />
            <br/> <br/> <br/> <br/> <br/>
           
            <div className="routepage">
                <div className="video-background-login">
                  <video src={video} autoPlay loop muted type="video/mp4"></video>
                </div>
                <div className="sonucv2">
                <h1>Turmep LOGIN </h1>
                    <form action="POST">
                        <input className="input-login"
                            type='text'
                            placeholder="Username"


                        />
                        <br /> <br />
                        <input className="input-login"
                            type='password'
                            placeholder="Password"


                        />
                        <br />  <br />
                        <button type="submit" className="btn-yorum">LOGIN</button>
                    </form>

            
                </div>

                    


            </div>


           






        </>


    )
}

export default Login