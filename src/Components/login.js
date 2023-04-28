import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import video from './video.mp4'
import 'aos/dist/aos.css'
import Register from "./register";
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



const Login = () => {

    const navigate = useNavigate();
    
    const [values,  setValues] = useState({

        email: "",
        password: "",
    })



    const generateError = (err) => toast.error(err, {position: "bottom-right"})
    



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:4000/login", {
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
                    navigate("/home")
                }
            }

        }
        catch (err){
            console.log(err)

        }
    }




    return (


        <>

            <Navbar />
            <br/> 
           
            <div className="routepage">
                <div className="video-background-login">
                  <video src={video} autoPlay loop muted type="video/mp4"></video>
                </div>
                <div className="sonucv2">
                <h1  style={{color:'white',  textShadow: '.2em .1em 0 hsl(200 50% 30%)'}}> Welcome to Login Page!</h1>
                    <form  onSubmit={(e) =>handleSubmit(e) }>
                    <br /> <br />
                        <input className="input-login"
                            type='email'
                            placeholder="Email"
                            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
                            name='email'
                        />
                        <br /> <br />
                        <input className="input-login"
                            type='password'
                            placeholder="Password"
                            onChange={(e) => setValues({...values, [e.target.name]: e.target.value})}
                            name='password'
                        />
                        <br />  <br />
                        <button type="submit" className="btn-yorum">LOGIN</button>

                        <div style={{color:'white',  textShadow: '.1em .1em 0 hsl(200 50% 30%)'}}>
                            <br/>
                           
                            Do not have an account?   <a href="/register">Register!</a>  
                        </div>
                    </form>

            
                </div>

                    


            </div>


           






        </>


    )
}

export default Login