import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import video from './video.mp4'
import 'aos/dist/aos.css'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {MdOutlineTravelExplore} from 'react-icons/md'
//


//

const Register = () => {
    

    const navigate = useNavigate();
    
    const [values,  setValues] = useState({

        email: "",
        password: "",
        name:" ",
        surname:" ",
    })



    const generateError = (err) => toast.error(err, {position: "bottom-right"})
    
    const gotologin = () => {
        navigate("/")
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:4000/register", {
                ...values,

            }, {
                withCredentials:true,
            })
            console.log(data)
            if(data) {
                if(data.errors){
                    const {email, password } = data.errors
                    if(email) generateError(email);
                    else if (password) generateError(password);
                }else{
                    navigate("/")
                }
            }

        }
        catch (err){
            console.log(err)

        }
    }




    return (


        <>
{/* 
            <Navbar /> */}
            
            <div className="logpage">
                <div className="video-background-login">
                  <video src={video} autoPlay loop muted type="video/mp4"></video>
                </div>
                <div className="sonucv3">
                <h1 style={{color:'white',  textShadow: '.2em .1em 0 hsl(200 50% 30%)'}}><MdOutlineTravelExplore className='icon' /><b>Turmep.</b> </h1 >
                <h1  style={{color:'white',  textShadow: '.2em .1em 0 hsl(200 50% 30%)'}}> Welcome to Register Page!</h1>
                    <form onSubmit={(e) =>handleSubmit(e) } >
                    <br /> <br />
                        <input className="input-login"
                            type='text'
                            name='name'
                            placeholder="Name"
                            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}


                        />
                      
                        <br /> <br />
                        <input className="input-login"
                            type='text'
                            name='surname'
                            placeholder="Surname"
                            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}


                        />
                      
                    <br /> <br />
                        <input className="input-login"
                            type='email'
                            name='email'
                            placeholder="Email"
                            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}


                        />
                        <br /> <br />
                        <input className="input-login"
                            type='password'
                            name='password'
                            placeholder="Password"
                            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}

                        />
                       <br /> <br />
                        <button type="submit" className="btn-yorum" >REGISTER</button>
                        <br />  <br /> 
                        <div style={{color:'white',  textShadow: '.1em .1em 0 hsl(200 50% 30%)'}}>
                            <br/>
                           
                            Already have an account!    <button className="btn-yorum" onClick={gotologin}>Login!  </button> 
                        </div>
                        
                           

                       
                    </form>

                    <ToastContainer/>
                </div>

                    


            </div>


           






        </>


    )
}

export default Register