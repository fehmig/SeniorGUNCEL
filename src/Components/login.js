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
                <h1  style={{color:'white',  textShadow: '.2em .1em 0 hsl(200 50% 30%)'}}> Welcome to Login Page!</h1>
                    <form action="POST">
                    <br /> <br />
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

                        <div style={{color:'white',  textShadow: '.1em .1em 0 hsl(200 50% 30%)'}}>
                            <br/>
                           
                            Do not have an account? Register!
                        </div>
                    </form>

            
                </div>

                    


            </div>


           






        </>


    )
}

export default Login