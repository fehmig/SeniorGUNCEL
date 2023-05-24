import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Forum = () => {

    return (
        <>
            <>
                <Navbar />
                <br /> <br /> <br />
                <hr></hr>
                <div className="forum-page">
                    <div className="forum-üst">

                        <hr></hr>
                        <br></br>


                        Paketleri nasıl satın alabiliriz detaylı bir video var mı ? Teşekkürler.
                        <br></br>
                        <br></br>

                        <hr></hr>
                        <br></br>


                        Rotalar ile ilgil kullanıcı yorumlarını nereden görüntüleyebilirim ? Teşekkürler.
                        <br></br>
                        <br></br>

                        <hr></hr>
                        <br></br>


                        Kendi rotamızı nasıl oluştururuz? Teşekkürler.
                        <br></br>
                        <br></br>

                        <hr></hr>
                        {/* <svg height="100" width="100">
                            <line x1="0" y1="50" x2="100" y2="50" stroke="black" stroke-width="10" />
                        </svg> */}


                    </div>
                    <hr></hr>
                    <div className="forum-alt">
                        <div className="forum-sol">
                            <div className="forum-sol-sol">
                                <div><h1 style={{ color: "hsl(199, 100%, 33%)", textShadow: '1px 1px 0 hsl(200 50% 30%)' }}>KONU BAŞLIĞI AÇ!</h1></div>
                                <br />
                                <div className="forum-solalt-sol">

                                    <input
                                        className='input-sol-forum'
                                        type="text"
                                        placeholder='Name'


                                    />
                                    <br />

                                    <input
                                        className='input-sol-forum'
                                        type="text"
                                        placeholder='Surname'


                                    />
                                    <br />

                                    <input
                                        className='input-sol-forum'
                                        type="email"
                                        placeholder='E-Mail'


                                    />
                                </div>
                                <div className="forum-solalt-sağ">

                                    <textarea name="message" rows="4" cols="50"

                                        className="text-contact-forum"
                                        type='text'
                                        placeholder="Message here..."

                                    ></textarea>
                                    <br />
                                    <button className="btn-yorum">SEND</button>

                                </div>






                            </div>
                            <hr></hr>
                        </div>

                        <div className="forum-sağ">
                            <div className="forum-sağ-sağ">
                                <div><h1 style={{ color: "hsl(199, 100%, 33%)", textShadow: '1px 1px 0 hsl(200 50% 30%)' }}>SIKÇA SORULAN SORULAR</h1></div>
                                <br />



                                Paketleri nasıl satın alabiliriz detaylı bir video var mı ? Teşekkürler
                                &nbsp;&nbsp;&nbsp;<button className="btn-yorum">KONUYA GİT</button>
                                <br /><br />
                                <hr></hr>
                                <br />
                                Kendi rotamızı nasıl oluştururuz
                                &nbsp;&nbsp;&nbsp;<button className="btn-yorum">KONUYA GİT</button>
                                <br /><br />
                                <hr></hr>
                                <br />
                                Ücret iadesi ne zaman oluyor
                                &nbsp;&nbsp;&nbsp;<button className="btn-yorum">KONUYA GİT</button>
                                <br /><br />
                                <hr></hr>


                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <Footer />
            </>
        </>
    )
}

export default Forum