import React, {useState, useEffect} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    
  const logout = () => {
    removeCookie("jwt");
    navigate("/");
  }
  
  const navigate = useNavigate()

  const [cookies, setCookies, removeCookie] = useCookies()
  
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
          } 
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
            <a href="/home" className="logo flex"><h1><MdOutlineTravelExplore className='icon' />  Turmep.</h1></a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <a href="/home" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="/routes" className="navLink">Routes</a>
              </li>
              <li className="navItem">
                <a href="/packages" className="navLink">Packages</a>
              </li>
              <li className="navItem">
                <a href="/about" className="navLink">About </a>
              </li>
              <li className="navItem">
                <a href="/forum" className="navLink">Forum</a>
              </li>
             
              <li className="navItem">
                <a href="/contact" className="navLink">Contact</a>
              </li>
              <button className="btn" onClick={logout}>
                <a href="/">LOGOUT</a>
              </button>

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