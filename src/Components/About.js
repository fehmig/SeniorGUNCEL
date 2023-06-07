import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const About = () => {

    return (
        <>
            <>
                <Navbar />
                <br /> <br />
                <div className="fees flex">
                    <div className="about-page">
                        <br /><br />
                        <i><h1>HAKKIMIZDA</h1>  </i>

                        <div className="about">
                            <hr></hr>
                            <br /><br />

                            <p>Fehmi Günay Ve Bilal Berispak</p>
                            <p>Karabük Üniversitesi Bilgisayar Mühendisliği Öğrencileri</p>
                            <p>2023 - 2022</p>
                            <br /><br />

                            <hr></hr>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </>
    )
}

export default About