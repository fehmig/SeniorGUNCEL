import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

import {FiSend} from 'react-icons/fi'
import contactimage from '../Assets/contact.png'

const Contact = () => {

    return (


        <>

            <Navbar />
            <br /> <br /> <br />
            <div className="contact-page">
            <div className="contact-sol">
                <div className="contact">
                    <div><h1 style={{color:"hsl(199, 100%, 33%)",textShadow: '1px 1px 0 hsl(200 50% 30%)'}}>!CONTACT US</h1></div>
                    <br />
                    <input
                        className='input-contact'
                        type="text"
                        placeholder='Name'


                    />
                    <br /><br />

                    <input
                        className='input-contact'
                        type="text"
                        placeholder='Surname'


                    />
                    <br /><br />

                    <input
                        className='input-contact'
                        type="email"
                        placeholder='E-Mail'


                    />
                    <br /><br />
                   
                    <textarea name="message" rows="4" cols="50"

                        className="text-contact"
                        type='text'
                        placeholder="Message here..."
                       
                    ></textarea>
   <br />
<button  className="btn-yorum">SEND</button>


                </div>
                </div>

                <div className="contact-sag">
                    <div className="contact-adres">
                        <div>
                        <b>ADRES:</b> Karabük Üniversitesi <br/> Demir-Çelik Kampüsü Mühendislik Fakültesi Balıklarkayası Mevkii <br/>
                         78050  KARABÜK
                        </div>
                        <br/> <br/>
                        <div className="contact-image">
                            <img src={contactimage} style={{width:"600px", height:"400px"}}></img>
                   
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>


    )
}

export default Contact