import React, { useEffect, useState } from 'react';
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import ProfileName from "./Components/Navbar/Navbar"
import video from './Assets/video.mp4'
// import { Splitter, SplitterPanel } from 'primereact/splitter';

// import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import 'aos/dist/aos.css'
import { BsFillStarFill } from 'react-icons/bs'
import 'aos/dist/aos.css'











const Profile = () => {

  const navigate = useNavigate()

  const [cookies, setCookies, removeCookie] = useCookies()

  const [profilename, setProfilename] = useState()



  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/")
      } else {
        const { data } = await axios.post(
          "http://localhost:4000", {},
          { withCredentials: true }
        )
        if (!data.status) {
          removeCookie("jwt");
          navigate("/")
        } else setProfilename(data.user)
      }
    }
    verifyUser();
  }, [cookies, navigate, removeCookie])



  return (
    <>
      <div>
        <div className="profilepage">
          <Navbar />
          <br />
          <br />
          <br></br>
          <div className='profil-arkaplan'>
            <div className="profil-üstsol">
              {/* <h3>  {profilename}'s Profile Page </h3> */}
              <div className='profilfoto'>
                {/* hacı buraya pofil ofotsu koyulacvak ona göre de css ayarlanacak */}
                sdgfsdgfsdgsg

              </div>
              <div className='profilfotoalt'>
              <br />
              Bilal
              </div>

            </div>
            <div className="profil-üstsağ">
              <div className="satır">
                <div className="içsatır">
                  <label >User ID</label>

                </div>
                <div className="içsatır">
                  <p>987654321676</p>
                </div>
              </div>

              <hr className='hr' />

              <div className="satır">
                <div className="içsatır">
                  <label >Name</label>
                </div>
                <div className="içsatır">
                  <p>{profilename}</p>
                </div>
              </div>
              <hr className='hr' />



              <div className="satır">
                <div className="içsatır">
                  <label >Email</label>
                </div>
                <div className="içsatır">
                  <p>sushant.gmail.com</p>
                </div>
              </div>
              <hr className='hr' />



              <div className="satır">
                <div className="içsatır">
                  <label >Phone</label>
                </div>
                <div className="içsatır">
                  <p>83444322771</p>
                </div>
              </div>
              <hr className='hr' />



              <div className="satır">
                <div className="içsatır">
                  <label >profession</label>
                </div>
                <div className="içsatır">
                  <p>Web developer</p>
                </div>
              </div>


            </div>
          </div>

          <br />
          <div className="profil-yorum">
            <br />
            <button
              type="submit"
              className="btn-yorum"
            >
              EDIT PROFILE
            </button>
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )

}

export default Profile