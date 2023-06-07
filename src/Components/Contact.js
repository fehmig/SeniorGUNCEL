import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BannerSlider from "../BannerSlider";
import { MdOutlineTravelExplore } from 'react-icons/md'
import contact12 from '../Assets/contact12.png'
import contact11 from '../Assets/contact11.png'
import contact10 from '../Assets/contact10.png'
const Contact = () => {


    const images = [
        contact11, contact10, contact12,

    ];
    return (

        <>
            <Navbar />
            <div className="contact-page">
                <div className="contact-sol">
                    <div className="contact">
                        <div><h1 style={{ color: "hsl(199, 100%, 33%)", textShadow: '1px 1px 0 hsl(200 50% 30%)' }}>!CONTACT US</h1></div>
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
                        <button className="btn-yorum" style={{ width: "40%", margin: "0 auto", fontSize: "1.1em" }}>SEND</button>

                    </div>
                </div>
                <div className="contact-sag">
                    <div className="contact-adres">
                        <div>
                            <b>ADRES:</b> Karabük Üniversitesi <br /> Demir-Çelik Kampüsü Mühendislik Fakültesi Balıklarkayası Mevkii <br />
                            78050  KARABÜK
                        </div>
                        <br /> <br />
                        <div className="contact-image">
                            <BannerSlider images={images} duration={2500} />
                        </div>
                        <div >
                            <h1><MdOutlineTravelExplore /><b>Turmep.</b> </h1><h3> ©2023</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>


    )
}

export default Contact