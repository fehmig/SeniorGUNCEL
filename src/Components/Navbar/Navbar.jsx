import React, {useState, useEffect} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {BiPowerOff} from "react-icons/bi"
import {FaRegUser} from "react-icons/fa"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [cookies, setCookies, removeCookie] = useCookies()
  const logout = () => {
    removeCookie("jwt")
    navigate("/");
    toast(`Çıkış Yapıldı!`, {theme:"dark"})
  }
  
  const navigate = useNavigate()


  
  const [profilename, setProfilename] = useState()

  const [isLogged, setIsLogged] = useState(false);

  useEffect(()=> {
    const verifyUser = async () => {
        if(!cookies.jwt){
          setIsLogged(false)
        } else {
          const {data} = await axios.post (
            "http://localhost:4000", {}, 
            {withCredentials: true}
          )
          if(!data.status) {
            removeCookie("jwt");
            setIsLogged(false)
          } else {
            setProfilename(data.user)
            setIsLogged(true)
            toast(`Giriş Yapıldı... Hello! ${data.user}`, {theme:"dark"})
            
          }
        }
    }
    verifyUser();
  }, [cookies, navigate, removeCookie])


const goToRoutes = () => {
  if(isLogged === true) {
    navigate("/routes")
  } else
  toast(`Rota Detaylarını Görüntülemek İçin Giriş Yapınız!`, {theme:"dark"})
            
}


const goToForm = () => {
  if(isLogged === true) {
    navigate("/forum")
  } else
  toast(`Forum Detaylarını Görüntülemek İçin Giriş Yapınız!`, {theme:"dark"})
            
}



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
            <Link to="/" className="logo flex"><h1><MdOutlineTravelExplore className='icon' />  Turmep.</h1></Link>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">Home</Link>
              </li> 
              {/* <li onClick={goToRoutes}  className="navItem">
               Routes
              </li> */}
              {/* <li className="navItem">
                <a href="/packages" className="navLink">Packages</a>
              </li> */}
              <li className="navItem">
                <Link to="/about" className="navLink">About </Link>
              </li>
              <li onClick={goToForm}  className="navItem">
                Forum
              </li>
             
              <li className="navItem">
                <Link to="/contact" className="navLink">Contact</Link>
              </li>
                 
              
              
              < li className="navItem" >
              {isLogged ? (
                <>
                  <Link to="/profile" className="navLink"><FaRegUser className='icon'/>{profilename} </Link>
                  <Link><BiPowerOff className="icon" onClick={logout} /></Link>
                  </>
                ) : (
                  <Link to="/login"><button className='btn-login'>LOGIN</button></Link>  

                  )}
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