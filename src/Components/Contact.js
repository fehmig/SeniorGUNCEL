import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BannerSlider from "../BannerSlider";
import { MdOutlineTravelExplore } from 'react-icons/md'
import banner1 from '../Assets/banner1.png'
import banner2 from '../Assets/banner2.png'
import banner3 from '../Assets/banner3.png'
const Contact = () => {


    const images = [
        banner1, banner2, banner3
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
                        <button className="btn-yorum">SEND</button>


                    </div>
                </div>
                {/* <div class="vertical-line"></div>  dikey çizgi deneme çabası*/}


                <div className="contact-sag">
                    <div className="contact-adres">
                        <div>
                            <b>ADRES:</b> Karabük Üniversitesi <br /> Demir-Çelik Kampüsü Mühendislik Fakültesi Balıklarkayası Mevkii <br />
                            78050  KARABÜK
                        </div>
                        <br /> <br />
                        <div className="contact-image">
                            {/* <img src={contactimage} style={{ width: "100%", height: "400px" }}></img> */}
                            <BannerSlider images={images} duration={2000} />

                        </div>
                        <div >
                            <h1><MdOutlineTravelExplore className='icon' /><b>Turmep.</b> </h1><h3> ©2023</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>


    )
}

export default Contact