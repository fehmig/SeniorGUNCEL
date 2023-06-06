import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { FaRoute, FaRegCommentDots } from "react-icons/fa";
import Map2 from '../Map/Map2';
import Map3 from '../Map/Map3';
import Map4 from '../Map/MapIstanbulDetail';
import Map5 from '../Map/map5';
import { withScriptjs } from "react-google-maps";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Veri } from "./Main/Main";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import BannerSlider from '../BannerSlider'
import bolu from '../Assets/bolu.jpg'
import bartın from '../Assets/bartın.jpg'
import trabzon from '../Assets/trabzon.jpg'
import RouteSlider from "../RouteSlider";




const RoutePage = () => {


    const [veri, setVeri] = useState(Veri);
    const { id } = useParams();
    const myVeri = Veri.find(v => v.id === parseInt(id));
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
    const [sendID, setSendID] = useState('');


    const filteredData = Veri.filter((veri) => {
        return veri.tags.some((tag) => myVeri.tags.includes(tag)) && veri.id !== myVeri.id;
    });



    const MapLoaderBlackSea = withScriptjs(Map2);
    const MapLoaderAegean = withScriptjs(Map3);
    const MapLoaderIstanbul = withScriptjs(Map4);
    const MapLoaderCappadocia = withScriptjs(Map5);

    const whichMap = () => {
        if (myVeri.id === 1) {
            return <MapLoaderBlackSea className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "100%" }} />}
            />;
        } else if (myVeri.id === 5) {
            return <MapLoaderAegean className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "100%" }} />}
            />;
        } else if (myVeri.id === 4) {
            return <MapLoaderIstanbul className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "100%" }} />}
            />;
        } else if (myVeri.id === 6) {
            return <MapLoaderCappadocia className='route-sagtaraf-map'
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                loadingElement={<div style={{ height: "100%" }} />}
            />;
        }
    };


    const [profilename, setProfilename] = useState("");
    const [commentText, setCommentText] = useState("");
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/comments/${myVeri.id}`);
            setComments(response.data);
        } catch (error) {
            console.error('Yorumlar getirilemedi:', error);
        }
    };


    useEffect(() => {

        const verifyUser = async () => {
            if (!cookies.jwt) {
                navigate("/");
            } else {
                const { data } = await axios.post(
                    "http://localhost:4000",
                    {},
                    { withCredentials: true }
                );
                if (!data.status) {
                    removeCookie("jwt");
                    navigate("/");
                } else {
                    setProfilename(data.user.name);
                    fetchComments()

                }
            }
        };
        verifyUser();
    }, [cookies, navigate, removeCookie]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!text.trim()) {
            return;
        }
        try {
            const newComment = { text, username: profilename, cardId: myVeri.id };
            const response = await axios.post(`http://localhost:4000/api/comments/${myVeri.id}`, newComment);
            setComments([...comments, response.data]);
            setText('');
            setUsername('');
        } catch (error) {
            console.error('Yorum gönderilemedi:', error);
        }
    };

    // const handleCommentSubmit = (event) => {
    //     event.preventDefault();
    //     if (commentText.trim() === "") {
    //         return;
    //     }
    //     // Save the comment in the backend or update the state accordingly
    //     const updatedVeri = [...veri];
    //     const myVeriIndex = updatedVeri.findIndex((v) => v.id === parseInt(id));
    //     updatedVeri[myVeriIndex].yorumlar.push(commentText);
    //     setVeri(updatedVeri);
    //     setCommentText("");
    // };


    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="routepagetamami">
                <div className="routepage">
                    <div className="route-soltaraf">
                        <br></br>
                        <div className="route-durum">
                            <hr></hr>
                            <div className="route-slider" style={{ width: '100%', height: '400px', overflowX: 'hidden' }}>
                                <RouteSlider images={myVeri.imgRoute} captions={myVeri.yorumlar} />
                            </div>

                        </div>
                        <div className="route-yorum-goruntule">
                            <hr></hr>

                            {/* <div className="yorumlar">

                                <ul>
                                    {comments.map((comment) => (
                                        <li key={comment._id}>
                                            <strong>{comment.username}:</strong> {comment.text}
                                        </li>
                                    ))}
                                </ul>
                                <br />
                            </div> */}
                            <div className="yorumlar">
                            <h1 style={{ textAlign: 'center' }}>{myVeri.destTitle}</h1>
                                <ul>
                                    <li>
                                        <h5>{myVeri.hakkında}</h5>
                                    </li>
                                </ul>
                            </div>
                            <hr></hr>
                        </div>
                        <br />
                    </div>
                    <div className="route-sagtaraf">
                        {whichMap()}
                    </div>
                </div>
                <div className="route-alttaraf">
                    <h1 style={{ textAlign: 'center' }}>RECOMMENDED ROUTES</h1>
                    <section id='main' className='main section container'>
                        <div className="secContent grid">
                            {filteredData.map(({ id, imgSrc, destTitle, location, grade, fees, description, date, rating, type, btnValue, tags, info }) => (
                                <div key={id} data-aos="fade-up" className="singleDestination">
                                    <div className="imageDiv">
                                        <Link to={`/routes/${id}`} style={{ color: 'white' }}>
                                            <img src={imgSrc} alt={`Görsel ${id}`} />
                                        </Link>
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
                                        <div className="fees2 flex">
                                            <div className="tags">
                                                {tags.map((tag, index) => (
                                                    <span key={index} className="tag">#{tag} </span>
                                                ))}
                                            </div>
                                            <div className="info">
                                                <span style={{ color: " hsl(1, 10%, 10%)", fontSize: "1.2rem" }}>{info}</span>
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

                    <div className="appslider">

                    </div>
                </div>
                <div className="route-yorum2">
                    <br />
                    <hr></hr>
                    <br />
                    <h3>BİZİMLE YORUMUNU PAYLAŞ<FaRegCommentDots className="icon" /></h3>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            name="message"
                            rows="4"
                            cols="50"
                            className="input-yorum"
                            type="text"
                            placeholder="Yorum yapabilirsiniz..."
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        ></textarea>

                        <button type="submit" className="btn-yorum">
                            YORUM YAP
                        </button>
                    </form>
                    <br />
                    <hr></hr>
                </div>
                <div className="route-yorum-goruntule2">
                    <br />
                    {/* <hr></hr> */}
                    <div className="yorumlar2">

                        <ul>
                            {comments.map((comment) => (
                                <li key={comment._id}>
                                    <strong>{comment.username}:</strong> {comment.text}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <br />

                        <hr></hr>
                        <br />

                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default RoutePage;
