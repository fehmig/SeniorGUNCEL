import React, { useEffect, useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import ProfileName from "./Components/Navbar/Navbar"
import video from 'C:/Users/bilalberispak/Desktop/SENIOR/SeniorGUNCEL/src/Assets/video.mp4'

const Profile = () => {
 
  const navigate = useNavigate()

  const [cookies, setCookies, removeCookie] = useCookies()
  
  const [profilename, setProfilename] = useState()


  useEffect(()=> {
    const verifyUser = async () => {
        if(!cookies.jwt){
          navigate("/")
        } else {
          const {data} = await axios.post (
            "http://localhost:4000", {}, 
            {withCredentials: true}
          )
          if(!data.status) {
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
        <Navbar/>
        
                <br /> <br /> <br /><br />
                
        {profilename}'s Profile Page
        <video src={video} autoPlay loop muted type="video/mp4"></video>
        </div>
    </>
  );
}

export default Profile