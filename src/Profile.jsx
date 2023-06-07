import React, { useEffect, useState } from 'react';
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import ProfileName from "./Components/Navbar/Navbar"
import video from './Assets/video.mp4'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import 'aos/dist/aos.css'
import { BsFillStarFill } from 'react-icons/bs'
import 'aos/dist/aos.css'











const Profile = () => {

  const navigate = useNavigate()

  const [cookies, setCookies, removeCookie] = useCookies()

  const [profilename, setProfilename] = useState("")
  const [profilenamepic, setProfilenamepic] = useState("")
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        if (response.data.status) {
          setUser(response.data.user);
          setProfilename(response.data.user.name);
          setProfilenamepic(response.data.user.name.slice(0, 2));
        } else {
          removeCookie("jwt");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        removeCookie("jwt");
        navigate("/login");
      }
    };
  
    fetchUser();
  }, []);
  


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
              <div className="profilfoto">
  <span className="profilenamepic">{profilenamepic}</span>
</div>
<div className="profilfotoalt">
  <br />
  {user && <span style={{ color: "white" }}>{user.name}</span>}
</div>


            </div>
            <div className="profil-üstsağ">
              <div className="satır">
                <div className="içsatır">
                  <label >User ID</label>

                </div>
                <div className="içsatır">
                {user && <span style={{ color: "black" }}>{user.id}</span>}
                </div>
              </div>

              <hr className='hr' />

              <div className="satır">
                <div className="içsatır">
                  <label >Name</label>
                </div>
                <div className="içsatır">
                  <p >{profilename}</p>
                </div>
              </div>
              <hr className='hr' />

              <div className="satır">
                <div className="içsatır">
                  <label >Surname</label>
                </div>
                <div className="içsatır">
                  <p> {user && <span style={{ color: "black" }}>{user.surname}</span>}</p>
                </div>
              </div>
              <hr className='hr' />

              <div className="satır">
                <div className="içsatır">
                  <label >Email</label>
                </div>
                <div className="içsatır">
                  <p>{user && <span style={{ color: "black" }}>{user.email}</span>}</p>
                </div>
              </div>
              <hr className='hr' />

            </div>
          </div>

          <br />
          <div className="profil-yorum">
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