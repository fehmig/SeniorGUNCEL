import React, { useEffect } from 'react'
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
import img34 from '../../Assets/img34.jpg'
import img33 from '../../Assets/img33.jpg'
import img38 from '../../Assets/img38.jpg'
import img37 from '../../Assets/img37.jpg'
import img36 from '../../Assets/img36.jpeg'
import img35 from '../../Assets/img35.jpg'

import 'aos/dist/aos.css'
import Map from '../../Map/Map'
import { withScriptjs } from "react-google-maps"
import { FiMapPin } from "react-icons/fi"
import ReactModal from 'react-modal';
import video from '../../Assets/video.mp4'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineMenuUnfold, AiOutlineHeart } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { GiCampingTent, GiCaravan, GiPalmTree, GiSuspensionBridge, GiTvTower } from 'react-icons/gi'
import { GrTrain, } from 'react-icons/gr'

import { MdFastfood, MdMuseum, MdOutlineMuseum, MdOutlineCastle } from 'react-icons/md'
import { FaMosque, FaUmbrellaBeach, FaCaravan, FaShoppingCart, FaCocktail, FaRegSnowflake, } from 'react-icons/fa'
import { BiCableCar, BiTrain } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import { FaSkiing } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import bolu from '../../Assets/bolu.jpg'
import duzce from '../../Assets/düzce.jpg'
import bartın from '../../Assets/bartın.jpg'
import zonguldak from '../../Assets/zonguldak.jpg'
import rize from '../../Assets/rize.jpg'
import ordu from '../../Assets/ordu.jpg'
import trabzon from '../../Assets/trabzon.jpg'
import samsun from '../../Assets/samsun.jpg'
import sinop from '../../Assets/sinop.jpg'
import banner from './banner.png'
import banner4 from '../../Assets/banner4.png'
import banner5 from '../../Assets/banner5.png'
import banner6 from '../../Assets/banner6.png'
import anasayfa3 from '../../Assets/anasayfa3.png'
import anasayfa2 from '../../Assets/anasayfa2.png'
import anasayfa4 from '../../Assets/anasayfa4.png'
import anasayfa7 from '../../Assets/anasayfa7.png'
import anasayfa8 from '../../Assets/anasayfa8.png'
import anasayfa9 from '../../Assets/anasayfa9.png'
import BannerSlider from '../../BannerSlider'
import side from '../../Assets/side.jpeg'
import egirdir from '../../Assets/egirdir.jpg'
import aspendos from '../../Assets/aspendos.jpg'
import adana from '../../Assets/adana.jpg'
import kızılkule from '../../Assets/kızılkule.jpg'
import kleopatra from '../../Assets/kleopatra.jpg'
import mersinaynalıgöl from '../../Assets/mersinaynalıgöl.jpeg'
import ayasofya from '../../Assets/ayasofya.jpg'
import yerebatansarnıcı from '../../Assets/yerebatansarnıcı.jpg'
import kızkulesi from '../../Assets/kızkulesi.jpg'
import galata from '../../Assets/galata.jpg'
import peribacaları from '../../Assets/peribacaları.jpg'
import yeraltışehri from '../../Assets/yeraltışehri.jpg'
import balonturu from '../../Assets/balonturu.jpg'
import Map4 from '../../Map/MapIstanbulDetail'
import Map5 from '../../Map/map5'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams } from "react-router-dom"
import MapIstanbulModal from "../../Map/MapIstanbulModal"
import MapKapModal from "../../Map/MapKapModal"
import MapMeditModal from "../../Map/MapMeditModal"

const images = [
  anasayfa2, anasayfa4, anasayfa3,
];

export const Veri = [
  {
    id: 1,
    imgSrc: img33,
    destTitle: 'Black Sea',
    location: 'Turkey',
    grade: 'RATING',
    rating: 4.3,
    type: "CAMPING",
    fees: 700,
    btnValue: 1,
    date: "23.07.2023",
    tags: ["forest", "sea", "food", "rain"],
    info: [<BiCableCar className="icon" />, <FaCaravan className="icon" />],
    imgRoute: [bolu, duzce, zonguldak, bartın, sinop, samsun, ordu, trabzon, rize],
    yorumlar: ["Gölcük / Bolu","Efteni Gölü / Düzce","Ereğli / Zonguldak","Amasra / Bartın", "Hamsilos Koyu / Sinop", "Onur Anıtı / Samsun","Ulugöl Tabiat Parkı / Ordu","Sümela Manastırı / Trabzon","Pokut Yaylası / Rize"],
    hakkında: [
      "Trabzon: Atatürk Köşkü",
      "Uzungöl",
      "Sümela Manastırı",
      "Trabzon Kalesi",
      "Hagia Sophia Müzesi",
      "Rize: Ayder Yaylası",
      "Çamlıhemşin",
      "Kaçkar Dağları",
      "Rize Kalesi",
      "Zilkale",
      "Artvin: Karagöl-Sahara Milli Parkı",
      "Şavşat Karagöl",
      "Borçka Karagöl Tabiat Parkı",
      "Hopa",
      "Artvin Kalesi",
      "Amasya: Amasya Kalesi",
      "Yalıboyu Evleri",
      "Sultan II. Bayezid Külliyesi",
      "Hazeranlar Konağı",
      "Gümüşköy Köyü",
      "Sinop: Sinop Kalesi",
      "Boyabat Kalesi",
      "İnceburun Feneri",
      "Sinop Cezaevi Müzesi",
      "Erfelek Şelaleleri",
      "Samsun: Atatürk Anıtı",
      "Bandırma Vapuru Müzesi",
      "Piazza Alışveriş Merkezi",
      "Amisos Tepesi",
      "Samsun Sahil Bandı",
      "Ordu: Boztepe",
      "Ordu Teleferik",
      "Gölköy",
      "Perşembe Yaylası",
      "Taşbaşı Kültür ve Turizm Festivali"
    ],
    description: "The area is north of Turkey. It takes its name from the Black Sea in the north. The Black Sea climatic conditions are effective in the region. It is rainy every season. The annual temperature difference is small. Summers are cool, winters are warm. The Black Sea is the highest rainfall areas of Turkey. Enjoy the green, enjoy your travel route!"

  },
  {
    id: 6,
    imgSrc: balonturu,
    destTitle: 'Cappadocia',
    date: "05.02.2023",
    location: 'Turkey',
    grade: 'RATING ',
    rating: 4.0,
    fees: 150,
    btnValue: 6,
    type: "HISTORICAL",
    tags: ["architectural", "historical"],
    info: [< GiCampingTent className="icon" />, <FaCaravan className="icon" />],
    imgRoute: [peribacaları, balonturu, yeraltışehri],
    yorumlar: ["Peri Bacaları / Göreme", "Balon Turu / Ürgüp", "Yeraltı Şehri / Derinkuyu"], 
     hakkında: [
    "Kapadokya'da Gezilecek Yerler:",
    "1. Peri Bacaları.",
    "2. Göreme Açık Hava Müzesi.",
    "3. Kaymaklı Yeraltı Şehri.",
    "4. Açıksaray.",
    "5. Balon Turları.",
    "Kapadokya Konaklanacak Yerler:",
    "1. Museum Hotel",
    "2. Argos in Cappadocia",
    "3. Kayakapı Premium Caves",
    "4. Cappadocia Cave Suites",
    "5. Sultan Cave Suites ",
    "6. Kelebek Special Cave Hotel",
    "Kapadokya ayrıca yöresel lezzetleri, el sanatları ve şaraplarıyla da ünlüdür. Bu bölgede yer alan şirin köyleri ziyaret ederek yerel kültürü ve yaşam tarzını deneyimleyebilirsiniz. Kapadokya, doğal ve tarihi güzellikleriyle birlikte mistik bir atmosfere sahiptir. Bu nedenle, ziyaretçiler için benzersiz ve unutulmaz bir destinasyondur."
  ],
    description: 'Cappadocia (Turkish: Kapadokya) is an area in Central Anatolia in Turkey best known for its unique moon-like landscape, underground cities, cave churches and houses carved in the rocks, Cappadocia (Turkish: Kapadokya) is an area in Central Anatolia in Turkey best known for its unique moon-like landscape. Kapadokya. Also Kapadokya has  a lot of different places '
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
    imgSrc: img34,
    destTitle: 'İstanbul',
    date: "05.04.2023",
    location: 'Turkey ',
    grade: 'RATING ',
    rating: 4.7,
    fees: 250,
    btnValue: 4,
    type: "ADVENTURE",
    tags: ["architectural", "cultural"],
    info: [<GiSuspensionBridge className="icon" />, <FaShoppingCart className="icon" />],
    yorumlar: ["Ayasofya / Fatih", "Yerebatan Sarnıcı / Fatih","Kız Kulesi / Üsküdar","Galata / Beyoğlu"],
    hakkında:["Gezilecek Yerler: ",
    "1. Ayasofya: İstanbul'un sembollerinden biri olan tarihi Ayasofya Cami, Osmanlı ve Bizans dönemlerine ait izleriyle büyüleyici bir yapıdır.",
    "2. Topkapı Sarayı: Osmanlı İmparatorluğu'nun merkezi olan Topkapı Sarayı, muhteşem bahçeleri, sarayın içindeki zenginlikleri ve harem bölümüyle büyüleyici bir ziyaret noktasıdır.",
    "3. Kapalıçarşı: Dünyanın en eski ve en büyük çarşılarından biri olan Kapalıçarşı, binlerce dükkanıyla alışveriş yapmak isteyenler için ideal bir yerdir.",
    "4. Sultanahmet Camii (Mavi Camii): İstanbul'un simgesi haline gelmiş olan Sultanahmet Camii, muhteşem mavi seramiklerle süslenmiş iç mekanıyla dikkat çeker.",
    "5. Galata Kulesi: İstanbul Boğazı ve şehrin panoramik manzarasını sunan Galata Kulesi'ne çıkarak muhteşem bir manzara keyfi yaşayabilirsiniz.",
    "6. Taksim Meydanı ve İstiklal Caddesi: Şehrin modern yüzü olan Taksim Meydanı ve İstiklal Caddesi, restoranlar, kafeler, mağazalar ve gece hayatıyla canlı bir bölgedir.",
    "7. Dolmabahçe Sarayı: Boğaz manzarası eşliğinde muhteşem bir tarihi saray olan Dolmabahçe Sarayı, göz alıcı iç mekanlarıyla görülmeye değerdir.",
    "",],
    imgRoute: [ayasofya, yerebatansarnıcı, kızkulesi, galata],
    description: 'The Marmara Region in northwestern Turkey is the countrys bridge and connection to Europe, with Turkeys largest city, Istanbul, at its heart. You can follow the major industrial developments and news in Turkey. Keep enjoy the travel route at the Turkeys important commercial region! The Beautiful city in Marmara. İStanbul has a lot of culturel and historical places.'
  },
  {
    id: 5,
    imgSrc: side,
    destTitle: 'Mediterrenian',
    date: "07.08.2023",
    location: 'Turkey',
    grade: 'RATING',
    rating: 4.3,
    fees: 500,
    btnValue: 5,
    type: "BEACH",
    tags: ["beach", "sea", "sun"],
    info: [<FaCocktail className="icon" />, <FaUmbrellaBeach className="icon" />, <GiPalmTree className="icon" />],
    yorumlar: ["Eğirdir / Isparta", "Side / Manavgat","Aspendos / Serik","Kızılkule / Alanya","Kleopatra Plajı / Alanya","Aynalı Göl / Mersin","Merkez Park / Adana",],
    hakkında:["denemeeee"],
    imgRoute: [egirdir, side, aspendos, kızılkule, kleopatra, mersinaynalıgöl, adana],
    description: 'A land of beautiful vistas over the sea, lovely evening breezes, and majestic sunsets, Western part of the country,including the Aegean Sea coast across from a wide arch of Greek islands and the adjoining inland areas.A land of beautiful vistas over the sea,A land of beautiful vistas over the sea,A land of beautiful vistas over the sea'
  },
  {
    id: 8,
    imgSrc: img35,
    destTitle: 'Southeastern Anatolia',
    date: "05.04.2023",
    location: 'Turkey',
    grade: 'RATING',
    rating: 4.1,
    fees: 800,
    btnValue: 8,
    type: "FOOD",
    tags: ["forest", "sea", "food"],
    info: <MdOutlineMuseum className="icon" />,
    imgRoute: [bolu, duzce, bartın],
    yorumlar: ["yorum8", "Günedoğu Anadolu deneme yorum"],
    hakkında:["denemeeee"],

    description: 'Southeastern Anatolia is a region in Turkey. Due to long distances of travel, if you are self-driving in the country; give a minimum ten days to explore this area as distances are long between both cities of interest in the are and the country from west to east.Southeastern Anatolia is a region in Turkey. Also there are a lot of places.'
  },
  {
    id: 3,
    imgSrc: img36,
    destTitle: 'Anatolia',
    date: "07.10.2023",
    location: 'Turkey',
    grade: 'RATING ',
    rating: 3.8,
    fees: 700,
    btnValue: 3,
    type: "CAMPING",
    tags: ["historical", "food"],
    info: [<MdOutlineCastle className="icon" />, <GiTvTower className="icon" />],
    imgRoute: [bolu, duzce, bartın],
    yorumlar: ["yorum3", "Anadolu deneme yorum"],
    hakkında:["denemeeee"],

    description: ' Anatolia is a region in Turkey. Due to long distances of travel, if you are self-driving in the country; give a minimum ten days to explore this area as distances are long between both cities of interest in the are and the country from west to east. Anatolia is a region in Turkey. Due to long distances of travel, if you are self-driving in the country.'
  },
  {
    id: 2,
    imgSrc: img37,
    destTitle: 'Eastern Anatolia',
    location: 'Turkey',
    grade: 'RATING',
    btnValue: 2,
    date: "04.03.2023",
    rating: 3.5,
    fees: 600,
    type: "ADVENTURE",
    tags: ["traditional", "historical"],
    info: [<BiTrain className="icon" />, <FaRegSnowflake className="icon" />],

    imgRoute: [bolu, duzce, bartın],
    yorumlar: ["yorum2", "Doğu Anadolu deneme yorum"],
    hakkında:["denemeeee"],

    description: 'Eastern Anatolia is a region in Turkey.It occupies the mountainous east of the country and has the harshest winters.Due to long distances of travel, if you are self-driving in the country; give a minimum ten days to explore this area as distances are long between both cities of interest in the are and the country from west to east'
  },
  {
    id: 9,
    imgSrc: img38,
    destTitle: 'Göbeklitepe',
    location: 'Turkey',
    grade: 'RATING ',
    date: "10.11.2023",
    rating: 4.0,
    fees: 200,
    btnValue: 9,
    type: "HISTORICAL",
    tags: ["mysterious", "architectural", "historical"],
    info: <MdOutlineMuseum className="icon" />,

    imgRoute: [bolu, duzce, bartın],
    yorumlar: ["yorum9", "GöbekliTepe deneme yorum"],
    hakkında:["denemeeee"],

    description: 'Famed as the oldest temple in the world, Göbekli Tepe has changed the way that archaeologists look at history. Its existence pre-dates farming and settlements, and so it proves that man had religion before he even lived in a village or a town. Dated to 9000 BCE and listed by UNESCO. Göbeklitepe has a lot of historical mausoleum. '

  },
]

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 })
  }, [])
  const { id } = useParams();
  const myVeri = Veri.find(v => v.id === parseInt(id));
  const navigate = useNavigate()
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cookies, setCookies, removeCookie] = useCookies()

  // useEffect(()=> {
  //   const verifyUser = async () => {
  //       if(!cookies.jwt){
  //         navigate("/")
  //       } else {
  //         const {data} = await axios.post (
  //           "http://localhost:4000", {}, 
  //           {withCredentials: true}
  //         )
  //         if(!data.status) {
  //           removeCookie("jwt");
  //           navigate("/") 
  //         } else toast(`Hello! ${data.user} `, {theme:"dark"} )
  //       }
  //   }
  //   verifyUser();
  // }, [cookies, navigate, removeCookie])

  const verifyUser = async () => {
    if (!cookies.jwt) {
      toast(`Rota Detaylarını Görüntülemek İçin Giriş Yapmalısın!`, { theme: "dark" })
    } else {
      const { data } = await axios.post(
        "http://localhost:4000", {},
        { withCredentials: true }
      )
      if (!data.status) {
        removeCookie("jwt");
        toast(`Rota Detaylarını GÖrüntülemek İçin Giriş Yapmalısın!`, { theme: "dark" })
      } else navigate(`/routes/${myVeri.id}`)
    }
  }

  const logout = () => {
    removeCookie("jwt");
    navigate("/");
  }
  const gotoroutes = () => {
    navigate("/routes");
  }
  const goToCreate = () => {
    navigate("/create")
  }
  const [isOpen, setIsOpen] = useState(false);
  const MapLoader = withScriptjs(Map);
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
  const openModal = () => {
    setIsOpen(true);
    console.log(selectedCardId)
  };


  const selectedCard = Veri.find((card) => card.id === selectedCardId);
  const MapLoaderBlackSea = withScriptjs(Map);
  const MapLoaderAegean = withScriptjs(MapMeditModal);
  const MapLoaderIstanbul = withScriptjs(MapIstanbulModal);
  const MapLoaderCappadocia = withScriptjs(MapKapModal)
  const whichModalMap = () => {
    if (selectedCardId === 1) {
      return <MapLoaderBlackSea className='haritalani'
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
        loadingElement={<div style={{ height: "500px" }} />}
      />
    } else if (selectedCardId === 5) {
      return <MapLoaderAegean className='haritalani'
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
        loadingElement={<div style={{ height: "500px" }} />}
      />
    } else if (selectedCardId === 4) {
      return <MapLoaderIstanbul className='haritalani'
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
        loadingElement={<div style={{ height: "500px" }} />}
      />
    } else if (selectedCardId === 6) {
      return <MapLoaderCappadocia className='haritalani'
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw"
        loadingElement={<div style={{ height: "500px" }} />}
      />
    } else return <div>ROTA MEVCUT DEĞİL</div>
  }

  return (
    <>
      <section id='home' className='home'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted type="video/mp4"></video>

        <div data-aos="fade-down" className="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              TURMEP.
            </span>
            <h1 style={{ fontSize: "35px" }}> Search Your Travel Routes !</h1>
          </div>

          {/* FILTER KISMI */}

          <div data-aos="fade-down" className="pr">
            {/* <img src={banner} className='banner'></img> */}
            <BannerSlider images={images} duration={2500} />
          </div>
          <div data-aos="fade-up" className="homeFooterIcons flex">
            <br></br>
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL KISMI */}

      <ReactModal className="modal"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        {selectedCard && (
          <>
            <div className="route-card">
              <h3 className='title'>{selectedCard.destTitle}</h3>

              <div className='route-card-info'>
                {selectedCard.imgRoute.map((src, index) => (
                  <img style={{ width: '95%', height: '20%' }} key={index} src={src} alt={`Görsel ${index + 1}`} />
                ))}
              </div>
            </div>
            <div className='haritalani'>
              {whichModalMap()}
            </div>
          </>
        )}

      </ReactModal>

      <section id='main' className='main section container'>
        <div className="secTitle">
          <h1 style={{ fontSize: "30px" }}> Most visited routes</h1>
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
          <div className='createButton'>
            <Link to="/create"><button className='btn-create'>
              + See Your Own Route
            </button>
            </Link>
          </div>
          <div className='input-div'>
            <br /><br /><br />
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
            <h2><FaSkiing className="icon" /></h2>
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
        <div>
          <ToastContainer />
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

              .map(({ id, imgSrc, destTitle, location, grade, fees, description, date, rating, type, btnValue, tags, info }) => {
                return (

                  <div key={id} data-aos="fade-up" className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgSrc} ></img>
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
                          {/* <h6>{info}</h6> */}
                          <span style={{ color: " hsl(1, 10%, 10%)", fontSize: "1.2rem" }}>{info}</span>

                        </div>
                      </div>
                      <div className="desc">
                        {description}
                      </div>
                      <div className='butons-card'>
                        <button
                          className='btn-card-details'
                          onClick={verifyUser}
                        >
                          <Link to={`/routes/${id}`} style={{ color: 'white' }}>Details</Link>
                          <HiClipboardList className="icon-details" />
                        </button>

                        <button
                          onClick={() => { setSelectedCardId(id); openModal(); }}
                          className='btn-card-map'
                        >
                          Map
                          <FiMapPin classname="icon" />
                        </button>
                      </div>
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