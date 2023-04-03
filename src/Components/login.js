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
            {/* <br /> <br /> <br /> <br /> <br /> */}
            <div className="routepage">
                {/* <i><h1>GİRİŞ SAYFASI</h1>  </i> */}
                {/* <br /> <br /> <br /> <br /> <br /> */}
                {/* deneme */}
                <section id='home' className='home'>
                    <div className="overlay"></div>
                    <video src={video} autoPlay loop muted type="video/mp4"></video>

                    <div data-aos="fade-down" className="homeContent container">
                        <div className="textDiv">
                            <span className="smallText">
                                LOGİN 
                            </span>
                            {/* <h1 data-aos="fade-down" className="homeTitle">
                                Search your Travel routes!
                            </h1> */}
                        </div>
                    </div>
                </section>

                <div>

                </div>





                {/* deneme */}
                <div className="login">
                    <h3> </h3>

                </div>
            </div>
            <Footer />

        </>


    )
}

export default Login