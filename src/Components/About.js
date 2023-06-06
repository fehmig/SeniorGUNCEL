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
                            <i>Fehmi Günay Ve
                                Bilal Berispak
                            </i>
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