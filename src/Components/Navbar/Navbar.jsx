import React, {useState, useEffect} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {BiPowerOff} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    
  const logout = () => {
    removeCookie("jwt");
    navigate("/");
  }
  
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






  const [active, setActive]  = useState('navBar')
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  return (
    <section className='navBarSection'>
       <header className="header flex">
        
          <div className="logoDiv">
            <Link to="/home" className="logo flex"><h1><MdOutlineTravelExplore className='icon' />  Turmep.</h1></Link>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <Link to="/home" className="navLink">Home</Link>
              </li> 
              <li className="navItem">
                <Link to="/routes" className="navLink">Routes</Link>
              </li>
              {/* <li className="navItem">
                <a href="/packages" className="navLink">Packages</a>
              </li> */}
              <li className="navItem">
                <Link to="/about" className="navLink">About </Link>
              </li>
              <li className="navItem">
                <Link to="/forum" className="navLink">Forum</Link>
              </li>
             
              <li className="navItem">
                <Link to="/contact" className="navLink">Contact</Link>
              </li>
                 
              <li className="navItem">
                <Link to="/profile" className="navLink"><CgProfile className='icon'/>{profilename}</Link>
              </li>
              < li className="navItem" >
                <Link to="/"><BiPowerOff className="icon"/></Link>
              </li>
           

            </ul>
              <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
       </header>
    </section>
  )
}

export default Navbar