import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { GrMap } from "react-icons/gr"
import { FaRoute, FaRegCommentDots } from "react-icons/fa"
import Map2 from '../Map/Map2'
import Map3 from '../Map/Map3'
import Map4 from '../Map/MapIstanbulDetail'
import Map5 from '../Map/map5'
import { withScriptjs } from "react-google-maps"
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { Veri } from "./Main/Main";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {BsFillStarFill} from "react-icons/bs"


const RoutePage = () => {


    const { id } = useParams();
    const myVeri = Veri.find(v => v.id === parseInt(id));


    const filteredData = Veri.filter((veri) => {
        return veri.tags.some((tag) => myVeri.tags.includes(tag)) && veri.id !== myVeri.id;
    });



    const MapLoaderBlackSea = withScriptjs(Map2);
    const MapLoaderAegean = withScriptjs(Map3);
    const MapLoaderIstanbul = withScriptjs(Map4);
    const MapLoaderCappadocia = withScriptjs(Map5)

    const whichMap = () => {
        if (myVeri.id === 1) {
            return <MapLoaderBlackSea className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "1000px" }} />}
            />
        } else if (myVeri.id === 5) {
            return <MapLoaderAegean className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "1000px" }} />}
            />
        } else if (myVeri.id === 4) {
            return <MapLoaderIstanbul className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "1000px" }} />}
            />
        } else if (myVeri.id === 6) {
            return <MapLoaderCappadocia className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "1000px" }} />}
            />
        }
    }

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const addComment = (comment) => {
        const updatedVeri = Veri.map((veri) => {
            if (veri.id === parseInt(id)) {
                return {
                    ...veri,
                    yorumlar: [...veri.yorumlar, comment]
                };
            }
            return veri;
        });
        setComments([...comments, comment]);
        setNewComment('');

    };


    const [profilename, setProfilename] = useState()
    const navigate = useNavigate()
    const [cookies, setCookies, removeCookie] = useCookies()
    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(newComment);
    };

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

            <>

                <Navbar />

                <br /> <br />
                <div className="routepage">
                    {/* <i><h1>ROTA DETAYLARI BURADA YER ALACAK </h1>  </i> */}
                    <br />
                    <div className="route-soltaraf">
                        <br></br>
                        <div className="route-durum">
                            <hr></hr>

                            <h1><FaRoute />  {myVeri?.destTitle}</h1>
                            {myVeri.imgRoute.map((src, index) => (
                                <img style={{ width: '400px', height: '200px' }} key={index} src={src} alt={`Görsel ${index + 1}`} />
                            ))}
                        </div>


                        <div className="route-yorum-goruntule"> <h3><u></u></h3>

                            <br /> <br />
                            <hr></hr>

                            <br />
                            <div className="yorumlar">
                                <div>
                                    <ul>
                                        {myVeri.yorumlar.map((comment, index) => (
                                            <li key={index}>
                                                <b>{profilename}: </b>
                                                {comment}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>


                        </div>


                        <br />
                        <div className="route-yorum">
                            <hr></hr>
                            <br />
                            <h3>BİZİMLE YORUMUNU PAYLAŞ<FaRegCommentDots className="icon" /></h3>
                            <form onSubmit={handleSubmit}>
                                <textarea name="message" rows="4" cols="50"

                                    className="input-yorum"
                                    type='text'
                                    placeholder="Yorum yapabilirsiniz..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="btn-yorum"

                                >
                                    YORUM YAP

                                </button>
                                <br />
                            </form>
                            <br /> <br />
                            <hr></hr>



                        </div>

                        <br /><br />



                    </div>
                    <div className="route-sagtaraf">

                        {whichMap()}
                        {/* <MapLoaderBlackSea className='route-sagtaraf-map'
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                            loadingElement={<div style={{ height: "1000px" }} />}
                        /> */}



                    </div>

                </div>
                <br /><br />
                <div className="route-alttaraf">
                    <h1 style={{ textAlign: 'center' }}>RECOMMENDED ROUTES</h1>

                    <section id='main' className='main section container'>

                        <div className="secContent grid">

                            {filteredData.map(({ id, imgSrc, destTitle, location, grade, fees, description, date, rating, type, btnValue,tags }) => (
                                <div key={id} data-aos="fade-up" className="singleDestination">
                                    <div className="imageDiv">

                                    <Link to={`/routes/${id}`} style={{color:'white'}}> <img src={imgSrc} ></img></Link>   
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">

                                            <span className="name"><HiOutlineLocationMarker className="icon" />{location}</span>
                                            <span className='date'>{date}</span>
                                            <small><span className='traveltype'>{type}</span></small>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span><BsFillStarFill style={{ color: " hsl(199, 100%, 33%)", fontSize: "1.5rem" }} /> <b style={{ color: " hsl(199, 100%, 33%)", fontSize: "1.2rem" }}> {rating}</b></span>
                                            </div>


                                            <div className="price">
                                                <h5>${fees}</h5>
                                            </div>

                                        </div>
                                        {/* hem üstüne hem altına çiziyor */}
                                        <div className="fees flex">

                                            <div className="tags">
                                                {tags.map((tag, index) => (
                                                    <span key={index} className="tag">#{tag} </span>
                                                ))}
                                            </div>
                                        </div>


                                        <div className="desc">
                                            {description}
                                        </div>

                                    </div>
                                    </div>
                            ))}

                                </div>
                    </section>
                    <br /><br /><br /><br /><br />
                </div>
                <Footer />

            </>

        </>
    )
}

export default RoutePage