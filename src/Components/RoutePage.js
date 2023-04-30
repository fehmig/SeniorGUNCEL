import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { GrMap } from "react-icons/gr"
import { FaRoute, FaRegCommentDots } from "react-icons/fa"
import Map2 from '../Map/Map2'
import { withScriptjs } from "react-google-maps"
const RoutePage = () => {

    const MapLoaderR = withScriptjs(Map2);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const addComment = (comment) => {
        setComments([...comments, comment]);
        setNewComment(''); // yeni yorumu temizle
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(newComment);
    };
    return (
        <>

            <>

                <Navbar />
                <br /> <br /> <br />
                <div className="routepage">
                    {/* <i><h1>ROTA DETAYLARI BURADA YER ALACAK </h1>  </i> */}
                    <br />
                    <div className="route-soltaraf">
                        
                        <div className="route-durum">
                        <h3><FaRoute />  ROTA BİLGİLERİ, DURUMU </h3>
                        
                        </div>
                        
                        <div className="route-yorum-goruntule"> <h3><u></u></h3>
                        <hr></hr>
                            <br />
                            <div className="yorumlar">
                            

                                <div>
                                    <ul>
                                        <li><b>Kullanıcı Adı: </b>Deneme Yorum</li>
                                        <li><b>Kullanıcı Adı: </b>Deneme Yorum</li>
                                        <li><b>Kullanıcı Adı: </b>Deneme Yorum</li>
                                        {comments.map((comment, index) => (
                                            <li key={index}><b>Kullanıcı Adı: </b>{comment}

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



                        </div>

                        <br /><br /><br /><br /><br />



                    </div>
                    <div className="route-sagtaraf">
                        <MapLoaderR className='route-sagtaraf-map'
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
                            loadingElement={<div style={{ height: "1000px" }} />}
                        />



                    </div>

                </div>


                <Footer />

            </>

        </>
    )
}

export default RoutePage