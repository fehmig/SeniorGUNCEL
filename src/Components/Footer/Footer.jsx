import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import {FiSend} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {MdOutlineTravelExplore} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
const Footer = () => {
   useEffect(()=>{
      Aos.init({duration: 2000})
   }, [])
  return (
    <section id='footer'className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
     <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" data-aos-duration="2000" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>
        <div className="inputDiv flex">
          <input data-aos="fade-up" data-aos-duration="2000" type="text" placeholder='Enter Email Address' />
          <button data-aos="fade-up" data-aos-duration="3000" className='btn flex'  type='submit'>SEND  <FiSend className="icon"/></button>
        </div>
      </div>
       
       <div className="footerCard flex">
         <div className="footerIntro flex">
         <div className="logoDiv">
            <a href="#" className="logo flex"><h1><MdOutlineTravelExplore className='icon' />  Turmep.</h1></a>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000"  className="footerParagraph">
          This project was made for the university senior project. It has no commercial purpose... For now :)
          </div>

          <div data-aos="fade-up" data-aos-duration="3000"  className="footerSocials flex">       
          <AiOutlineTwitter className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          <FaTripadvisor className="icon"/>
          </div>

         </div>

         <div className="footerLinks grid">
          {/* Group One */}
           <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
               <span className="groupTitle">
                OUR AGENCY
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
               </li>
           </div>

          {/* Group Two */}
           <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
               <span className="groupTitle">
               PARTNERS
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tatil Sepeti
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  En Uygun
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Ets
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trivago
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Obilet
               </li>
           </div>

          {/* Group three */}
           <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
               <span className="groupTitle">
                LAST MINUTE
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  İstanbul
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Ankara
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  İzmir
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bursa
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Adana
               </li>
           </div>
         </div>

         <div className="footerDiv flex">
           <small>KARABUK UNIVERSITY - İlker TÜRKER</small>
           <small>COPYRIGHTS RESERVED -  Fehmi GÜNAY & Bilal BERİSPAK 2022</small>
         </div>
       </div>

     </div>

    </section>
  )
}

export default Footer