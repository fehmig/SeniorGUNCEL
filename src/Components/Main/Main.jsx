import React, { useEffect} from 'react'
import { useState } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiClipboardList, } from 'react-icons/hi'
import img from '../../Assets/img (12).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (13).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (14).jpg'
import img9 from '../../Assets/img (9).jpg'
import 'aos/dist/aos.css'
import Map from '../../Map/Map'
import { withScriptjs } from "react-google-maps"
import { FiMapPin } from "react-icons/fi"
import ReactModal from 'react-modal';
import video from '../../Assets/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineMenuUnfold, AiOutlineHeart } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import { GiCampingTent } from 'react-icons/gi'
import { GiTreeBranch } from 'react-icons/gi'
import {MdFastfood, MdMuseum } from 'react-icons/md'
import { FaMosque, FaUmbrellaBeach } from 'react-icons/fa'
import {BsFillStarFill} from 'react-icons/bs'
import {FaRoute} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Map2 from '../../Map/Map2'
import Map3 from '../../Map/Map3'

import bolu from '../../Assets/bolu.jpg'
import duzce from '../../Assets/düzce.jpg'
import bartın from '../../Assets/bartın.jpg'
import zonguldak from '../../Assets/zonguldak.jpg'
import rize from '../../Assets/rize.jpg'
import ordu from '../../Assets/ordu.jpg'
import trabzon from '../../Assets/trabzon.jpg'
import samsun from '../../Assets/samsun.jpg'
import sinop from '../../Assets/sinop.jpg'
import banner from './banner.jpg'

const Veri = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Black Sea',
    location: 'Turkey',
    grade: 'RATING',
    rating: 4.7,
    type: "CAMPING",
    fees: 700,
    btnValue: 1,
    date: "23.07.2023",
    description: "The area is north of Turkey. It takes its name from the Black Sea in the north. The Black Sea climatic conditions are effective in the region. It is rainy every season. The annual temperature difference is small. Summers are cool, winters are warm. The Black Sea is the highest rainfall areas of Turkey. Enjoy the green, enjoy your travel route!"

  },


  {
    id: 2,
    imgSrc: img8,
    destTitle: 'Eastern Anatolia',
    location: 'Turkey',
    grade: 'RATING',
    btnValue: 2,
    date: "04.03.2023",
    rating: 2.2,
    fees: 600,
    type: "ADVENTURE",
    description: 'Eastern Anatolia is a region in Turkey.It occupies the mountainous east of the country and has the harshest winters.Due to long distances of travel, if you are self-driving in the country; give a minimum ten days to explore this area as distances are long between both cities of interest in the are and the country from west to east'
  },


  // {
  //   id: 3,
  //   imgSrc: img7,
  //   destTitle: 'Mediterrenian',
  //   date: "18.06.2023",
  //   location: 'Turkey',
  //   grade: 'RATING',
  //   rating: 3.0,
  //   fees: '$700',
  //   type: "BEACH",
  //   description: 'The Mediterranean coast in Southern Europe is always a good idea! From blue sea panoramas, gorgeous beaches and cute seaside towns... The southern countries of Europe definitely deserve a spot on your to-visit list. Are you ready to dream away to your future trip along the beautiful Mediterranean coast?'
  // },


  {
    id: 4,
    imgSrc: img6,
    destTitle: 'Marmara',
    date: "05.04.2023",
    location: 'Turkey ',
    grade: 'RATING ',
    rating: 2.7,
    fees: 800,
    btnValue: 4,
    type: "ADVENTURE",
    description: 'The Marmara Region in northwestern Turkey is the countrys bridge and connection to Europe, with Turkeys largest city, Istanbul, at its heart. You can follow the major industrial developments and news in Turkey. Keep enjoy the travel route at the Turkeys important commercial region!'
  },


  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Aegean',
    date: "07.08.2023",
    location: 'Turkey',
    grade: 'RATING',
    rating: 3.5,
    fees: 1100,
    btnValue: 5,
    type: "BEACH",
    description: 'A land of beautiful vistas over the sea, lovely evening breezes, and majestic sunsets, Western part of the country,including the Aegean Sea coast across from a wide arch of Greek islands and the adjoining inland areas.'
  },


  {
    id: 6,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    date: "05.02.2023",
    location: 'Turkey',
    grade: 'RATING ',
    rating: 4.0,
    fees: 840,
    btnValue: 6,
    type: "HISTORICAL",
    description: 'Cappadocia (Turkish: Kapadokya) is an area in Central Anatolia in Turkey best known for its unique moon-like landscape, underground cities, cave churches and houses carved in the rocks. '
  },


  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Anatolia',
    date: "07.10.2023",
    location: 'Turkey',
    grade: 'RATING ',
    rating: 3.8,
    fees: 790,
    btnValue: 3,
    type: "CAMPING",
    description: ' Anatolia is a region in Turkey. Due to long distances of travel, if you are self-driving in the country; give a minimum ten days to explore this area as distances are long between both cities of interest in the are and the country from west to east.'
  },


  {
    id: 8,
    imgSrc: img9,
    destTitle: 'Southeastern Anatolia',
    date: "05.04.2023",
    location: 'Turkey',
    grade: 'RATING',
    rating: 1.1,
    fees: 900,
    btnValue: 8,
    type: "FOOD",
    description: 'Southeastern Anatolia is a region in Turkey. Due to long distances of travel, if you are self-driving in the country; give a minimum ten days to explore this area as distances are long between both cities of interest in the are and the country from west to east.'
  },


  {
    id: 9,
    imgSrc: img,
    destTitle: 'Göbeklitepe',
    location: 'Turkey',
    grade: 'RATING ',
    date: "10.11.2023",
    rating: 3.9,
    fees: 500,
    btnValue: 9,
    type: "HISTORICAL",
    description: 'Famed as the oldest temple in the world, Göbekli Tepe has changed the way that archaeologists look at history. Its existence pre-dates farming and settlements, and so it proves that man had religion before he even lived in a village or a town. Dated to 9000 BCE and listed by UNESCO'

  },
]

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 })
  }, [])





  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);



  const MapLoader = withScriptjs(Map);
  const MapLoader2 = withScriptjs(Map2);
  const MapLoader3 = withScriptjs(Map3);

  const [fees, setFees] = useState(0);
  const [rating, setRating] = useState(0);

  const handleInputFees = (e) => {
    setFees(e.target.value);
  }

  const handleInputRating = (e) => {
    setRating(e.target.value);
  }

  const [searchTerm, setSearchTerm] = useState("");


  const [Data, setData] = useState(Veri);
  const filterResult = (catItem) => {
    const result = Data.filter((curData) => {
      return curData.type === catItem;
    });
    setData(result);
  }





 


  return (
    <>
      <section id='home' className='home'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted type="video/mp4"></video>

        <div data-aos="fade-down" className="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-down" className="homeTitle">
              Search your Travel routes!
            </h1>
          </div>



          {/* FILTER KISMI */}
          <div data-aos="fade-down" className="pr">
                <img src={banner} className='banner'></img>
              
                

          </div>


          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL KISMI */}

      <ReactModal className="modal"
        isOpen={isOpen}

        onRequestClose={() => setIsOpen(false)}

      >
        <div className="route-card">
          <h3 className='title'>Black Sea Routes</h3>

          <div className='route-card-info'>
            <h4>Bolu<GrLocation /></h4>
            <div className='province-card'>
              <img src={bolu} />
            </div>
            <h4>Düzce<GrLocation /></h4>
            <div className='province-card'>
              <img src={duzce} />
            </div>
            <h4>Zonguldak<GrLocation /></h4>
            <div className='province-card'>
              <img src={zonguldak} />
            </div>
            <h4>Bartın <GrLocation /></h4>
            <div className='province-card'>
              <img src={bartın} />
            </div>
            <h4>Sinop<GrLocation /></h4>
            <div className='province-card'>
              <img src={sinop} />
            </div>
            <h4>Samsun<GrLocation /></h4>
            <div className='province-card'>
              <img src={samsun} />
            </div>
            <h4>Ordu<GrLocation /></h4>
            <div className='province-card'>
              <img src={ordu} />
            </div>
            <h4>Trabzon<GrLocation /></h4>
            <div className='province-card'>
              <img src={trabzon} />
            </div>
            <h4>Rize<GrLocation /></h4>
            <div className='province-card'>
              <img src={rize} />
            </div>
          </div>
        </div>
        <MapLoader className='haritalani'
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
          loadingElement={<div style={{ height: "500px" }} />}
        />

        {/* <button 
      className='buton-harita-kapama'
      onClick={() => setIsOpen(false)}
      >

        
       < AiFillCloseCircle className="icon"/>
      </button> */}
      </ReactModal>



      <ReactModal className="modal"
        isOpen={isOpen2}

        onRequestClose={() => setIsOpen2(false)}

      >
        <div className="route-card">
          <h3 className='title'> Eastern Anatolia Routes</h3>
          <br />
          <div className='route-card-info'>
          </div>
        </div>
        <MapLoader2 className='haritalani'
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzxgEQmpTKYtZQlFePgzZ9Fky7AgTWa-s"
          loadingElement={<div style={{ height: "500px" }} />}
        />


      </ReactModal>


      <ReactModal className="modal"
        isOpen={isOpen3}

        onRequestClose={() => setIsOpen3(false)}

      >
        <div className="route-card">
          <h3 className='title'> Mediterrenian Routes</h3>
          <br />
          <div className='route-card-info'>
          </div>
        </div>
        <MapLoader3 className='haritalani'
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzxgEQmpTKYtZQlFePgzZ9Fky7AgTWa-s"
          loadingElement={<div style={{ height: "500px" }} />}
        />

      </ReactModal>


      <section id='main' className='main section container'>
        <div className="secTitle">



          <h3 className="title">
            Most visited routes
          </h3>
        </div>

      {/* FİLTRELEME */}
        <div className='range-filter' >
          <div className='range-filter-one'>
            <h3> Min Cost: {fees}$</h3>
            <input type="range" onInput={handleInputFees} min="0" max="1500" step="10" />
          </div>
      
          <div className='range-filter-one'>
            
           <h3> Min Rating: {rating}</h3>
            <input type="range" onInput={handleInputRating} min="0" max="5" />
          </div>
          <div className='input-div'>
            <br/><br/><br/>
           
          <input 
                  className='input-search'
                  type="text"
                 placeholder='Search route here...'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  
                />
                
        </div>
        


        </div>

        <div className="type-filters">





          <button

            onClick={() => setData(Veri)}
            className="type-filters-btns">
            <h2><AiOutlineMenuUnfold className="icon" /></h2>
            ALL
          </button>

          <button


            onClick={() => filterResult('CAMPING')}
            className="type-filters-btns">
            <h2><GiCampingTent className="icon" /></h2>
            CAMPING


          </button>

          <button

            onClick={() => filterResult('ADVENTURE')}
            className="type-filters-btns">
            <h2><GiTreeBranch className="icon" /></h2>
            ADVENTURE  

          </button>

          <button

            onClick={() => filterResult('HISTORICAL')}
            className="type-filters-btns">
            <h2><FaMosque className="icon" /></h2>
            HISTORICAL
          </button>

          <button
            onClick={() => filterResult('FOOD')}
            className="type-filters-btns">
            <h2><MdFastfood className="icon" /></h2>
            FOOD
          </button>

          <button
            onClick={() => filterResult('BEACH')}
            className="type-filters-btns">
            <h2><FaUmbrellaBeach className="icon" /></h2>
            BEACH
          </button>
          </div>
          

        <br />


        {/* CARDS */}
        <div className="secContent grid">



          {

            Data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.destTitle.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return val;
                }
              })

              .filter((veri) => {
                if (veri.fees >= fees) {
                  return veri;
                } else return null
              })

              .filter((veri) => {
                if (veri.rating >= rating) {
                  return veri;
                } else return null
              })



              .map(({ id, imgSrc, destTitle, location, grade, fees, description, date, rating, type, btnValue }) => {
                return (


                  <div key={id} data-aos="fade-up" className="singleDestination">

                    <div className="imageDiv">
                      <a href='/routes'> <img src={imgSrc} ></img></a>
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">{destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                        <span className='date'>{date}</span>
                        <small><span className='traveltype'>{type}</span></small>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span><BsFillStarFill style={{color: "#fff700",}}/>  {rating}</span>
                        </div>


                        <div className="price">
                          <h5>${fees}</h5>
                        </div>

                      </div>


                      <div className="desc">
                        {description}
                      </div>


                      <button
                        className='btn '
                      >
                        <a href='/routes'>Details</a>
                        <HiClipboardList className="icon" />
                      </button>




                      <button

                        onClick={() => setIsOpen(true)}
                        className='btn-map '
                      >
                        Map
                        <FiMapPin classname="icon" />
                      </button>

                    </div>
                  </div>




                )
              })
          }
        </div>

      </section>
    </>
  )
}

export default Main