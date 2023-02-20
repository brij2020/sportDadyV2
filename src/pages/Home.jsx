import * as React from 'react'
import react, { useState } from 'react';

import { Link, redirect } from 'react-router-dom';
import '../App.css';
import SimpleImageSlider from "react-simple-image-slider";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cricketimg1 from '../assets/images/cricketimg1.jpg';
import cricketimg2 from '../assets/images/cricketimg2.jpeg';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.jpg';
import img7 from '../assets/images/img7.jpg';
import img9 from '../assets/images/img9.jpg';
import flag1 from '../assets/icons/us.png';
import flag2 from '../assets/icons/nami.png';
import flag3 from '../assets/icons/flag1.png';
import flag4 from '../assets/icons/flag2.png';
import flagW from '../assets/icons/teamW.png';

import teamI from '../assets/images/hdImage/india-team.jpg';
import teamSA from '../assets/images/hdImage/teamSA.jpg';
import teamAus from '../assets/images/hdImage/teamAus.jpg';




import photoGal1 from '../assets/images/hdImage/sl.jpg';
import photoGal2 from '../assets/images/hdImage/vk.jpg';
import photoGal3 from '../assets/images/hdImage/dw.jpg';
import photoGal4 from '../assets/images/hdImage/dgb.jpg';
import photoGal5 from '../assets/images/hdImage/wo.jpg';
import photoGal6 from '../assets/images/hdImage/wp.jpg';
import photoGal7 from '../assets/images/hdImage/vkw.jpg';








import newzteam from '../assets/images/teams/newzteam.jpeg';
import usteam from '../assets/images/teams/usteam.jpg';

import apple from '../assets/icons/apple.png';
import playstore from '../assets/icons/playstore.png';

import ResponsiveSlider from '../Components/Slider'
import ONE from '../assets/images/slides/sd2.png';
import TWO from '../assets/images/slides/sd1.png';
import THREE from '../assets/images/slides/sd4.png';

import video from './cricket.mp4';
import LiveScoreComponet from '../Components/Home/LiveScore'
import AricleList from '../Components/Home/ArticleList'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ICCRanking from '../Components/IccRankings';
import Gamebox from '../Components/Home/Gamebox';


import MatchSchedule from "../Components/MatchSchdule";
import OtherGame from '../Components/OtherGame';
import TimeLine from '../Components/TimeLine';
import LiveScore from '../Components/LiveScore';
import CC from '../Components/LiveScoreSlider';
import img10 from '../assets/images/bg/pk.jpg';
import img11 from '../assets/images/bg/tt.jpg';
import img12 from '../assets/images/bg/5172658.jpg';

function Home() {

  const [team, setTeam] = useState(true)
  const [batting, setBatting] = useState(false)
  const [bowling, setBowling] = useState(false)
  const [allRounder, setAllRounder] = useState(false)

  const images = [
    { url: ONE },
    { url: TWO },
    { url: THREE },
    { url: ONE },
    { url: TWO },
    { url: THREE },
    { url: TWO },
  ];

  const Data = [
    {
      heading: 'SUN, NOV 23 2022',
      matches: 'India vs Pakistan, 2nd ODI',
      player: 'Rohit Sharma, Baber Azam',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
      img: flagW,
      img2: flag4,

    },
    {
      heading: 'TUE, NOV 22 2023',
      matches: 'India vs Pakistan, 2nd ODI',
      player: 'Rohit Sharma, Baber Azam',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
      img: flag3,
      img2: flag4,

    },
    {
      heading: 'MON, NOV 21 2022',
      matches: 'India vs Pakistan, 2nd ODI',
      player: 'Rohit Sharma, Baber Azam',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
      img: flag3,
      img2: flagW,

    },

  ]
  React.useEffect(() => {
    let xButtonTop = document.querySelector('#topBtn');
    if (xButtonTop) {
      xButtonTop.click()
    }
  }, [])

  const Data2 = [
    {
      matches: 'New Zealand vs India, 2nd ODI',
      player: 'Seddon Park, Hamilton',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
    },
    {
      matches: 'New Zealand vs India, 2nd ODI',
      player: 'Seddon Park, Hamilton',
      date_2: '01:30 AM GMT / 02:30 PM LOCAL',
      date: '7:00 AM',
    },
  ]

  const Data3 = [
    {
      srNo: '1',
      img: flag3,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'India'
    },
    {
      srNo: '2',
      img: flag4,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'Pakistan'
    },
    {
      srNo: '3',
      img: flag1,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'America'
    },
    {
      srNo: '4',
      img: flag4,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'England'
    },
    {
      srNo: '5',
      img: flag3,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'New Zealand'
    },
    {
      srNo: '6',
      img: flag3,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'West Indies'
    },
    {
      srNo: '7',
      img: flag2,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'Banladesh'
    },
    {
      srNo: '8',
      img: flag2,
      matches: '19',
      points: '2,418',
      rating: '128',
      country: 'Namibia'
    },
  ]

  return (


    
    <div style={{ marginBottom: 20 }} id="main-app" >
      
      <div id='top'>

        <LiveScore slides={images} />
      </div>
      <div class="grad-bar"></div>
      {/* live */}
      {/*<LiveScoreComponet />*/}      
      <div id='top'>
        <CC />

      </div>

      {/* Schedule */}
      
      {/* <div className='plain-section bg-m-plain-section'> */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Cricket Schedule</h2></div>
        <MatchSchedule data={Data} />
      ?
      {/* Schedule End */}


      {/* ranking  */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>ICC Ranking</h2></div>
      <div className='bg-section-time-line' >
        <ICCRanking />
      </div>
      {/* END */}
      
      {/* video  */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Video Hub</h2></div>
      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94' }}>
      

        <div class="containerv">
        <div ><a href='#'><p class="see-more"><u>View More</u></p></a></div>
          <div class="main-box">
            <div class="box one">
              <video
                poster={img9}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video>
            </div>
            <div class="box two">
              <video
                poster={img7}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video></div>
            <div class="box three">  <video
              poster={img7}
              height={'100%'}
              width={'100%'}
              src={video} controls>
            </video></div>
            <div class="box four">  <video
              poster={img9}
              height={'100%'}
              width={'100%'}
              src={video} controls>
            </video></div>
            <div class="box five">  <video
              poster={usteam}
              height={'100%'}
              width={'100%'}
              src={video} controls>
            </video></div>
            <div class="box six">  <video
              poster={newzteam}
              height={'100%'}
              width={'100%'}
              src={video} controls>
            </video></div>
            <div class="box six">  <video
              poster={cricketimg1}
              height={'100%'}
              width={'100%'}
              src={video} controls>
            </video></div>
          </div>
        </div>

      </div>


      {/* photos  */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Photos Gallery</h2></div>
      <div className='bg-section' style={{ "background":'linear-gradient(0deg, #000, #ff0000)' ,backgroundSize: "cover" }}>
      <div ><a href='#'><p class="see-more"><u>View More</u></p></a></div>
        <div class="containerv">
          <div class="main-box">
            <div class="box img-gal">
              <img src={photoGal1}
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover", backgroundPosition: 'center'}}
              >
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box img-gal">
              <img src={photoGal2}

                style={{ objectFit: "cover", backgroundPosition: 'center'}}
                height={"100%"}
                width={"100%"}>
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box img-gal">
              <img src={photoGal3}

              style={{ objectFit: "cover", backgroundPosition: 'center'}}
                height={"100%"}
                width={"100%"}>
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box img-gal">
              <img src={photoGal4}

                style={{ objectFit: "cover",backgroundPosition: 'center'}}
                height={"100%"}
                width={"100%"}>
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box five img-gal">
              <img src={photoGal5}
                style={{ objectFit: "cover",backgroundPosition: 'center'}}


                height={"100%"}
                width={"100%"}>
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box six img-gal">
              <img src={photoGal6}
                style={{ objectFit: "cover",backgroundPosition: 'center'}}
                height={"100%"}
                width={"100%"}>
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box six img-gal">
              <img src={photoGal7}


                height={"100%"}
                width={"100%"}>
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grad-bar"></div>


      {/* Our Cricket Teams */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Our Cricket Teams</h2></div>
      <div className='bg-section' >
      <div ><a href='#'><p class="see-more"><u>View More</u></p></a></div>
        {/* <div className='d-flex justify-content-around '>
          <div className='see-more-home'>{" "}</div>

          
          <Link>
            <h3 className='see-more-home'>See More</h3>
          </Link>
        </div> */}
        <div className='d-flex justify-content-around m-cr-team'>
          <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
            <img src={teamI} width="100%" height="100%" style={{ objectFit: 'contain', }}></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>Indian Cricket Team Players</h2>
          </div>

          <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
            <img src={teamSA} width="100%" height="100%"  style={{ objectFit: 'contain', }} ></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>South Africa Cricket Team Players</h2>
          </div>
          <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
            <img src={teamAus} width="100%" height="100%" style={{ objectFit: 'contain', }} ></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>NewZeland Cricket Team Players</h2>
          </div>

        </div>
      </div> 
      

      {/* world timeline  */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>ODI World Cup Timeline</h2></div>
      <div className='bg-section-time-line' >

        
        <TimeLine />

        <Link>
          <h3 className='see-more-home'>See More</h3>
        </Link>
      </div>
      {/* End Other Game*/}



     
{/* Other Games*/}
<div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Others Game</h2></div>
      <div className='bg-section' style={{ "background":'',backgroundSize: "cover", "height": "auto",
    "max-width": "100%",
    "max-height": "100%" }}>
        
        <OtherGame />
      </div>
       {/* Latest News and Articles */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Latest News and Articles</h2></div>
       <div className='bg-section' style={{ "background": 'linear-gradient(0deg, #000, #ff0000)',backgroundSize: "cover" }}> 
       <div ><a href='#'><p class="see-more"><u>View More</u></p></a></div>
        <AricleList />
      </div>
<div class="grad-bar"></div>
      

      {/* Start Quiz card form section  */}
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Participate in Lucky Draw</h2></div>
       <div class="container">
    <div class="card">
      <h2>IPL</h2>
      <i class="fas fa-arrow-right"></i>
      <p>Participet in IPL.</p>
      <div class="pic"></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
     
      <button>
      </button>
    </div>
      <div class="card card2">
      <h2>World Cup</h2>
      <i class="fas fa-arrow-right"></i>
      <p>Participet in World Cup.</p>
      <div class="pic"></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
     
      <button>
      </button>
    </div>
    
  </div> 
  

{/*Start download app section  */}

      {/* <AnimationOnScroll animateIn="animate__jackInTheBox" > */}
      <div className='bg-section'>
      <div class="section-title"><h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>Download the Android & iOS App</h2></div>
        <div class="wrapper">
          <a href="https://www.apple.com/in/app-store/" target={'_blank'} class="link-wrapper">
            <div class="img-wrapper">
              <img src={apple} />
            </div>
            <div class="content-wrapper">
              <h6 style={{ paddingTop: 6, color: '#fff' }}>Download in the</h6>
              <p style={{ color: '#fff' }}>App Store</p>
            </div>
          </a>

          <a href="https://play.google.com/store/apps" target={'_blank'} class="link-wrapper">
            <div class="img-wrapper">
              <img src={playstore} />
            </div>
            <div class="content-wrapper">
              <h6 style={{ paddingTop: 6, color: '#fff' }}>Android app on</h6>
              <p style={{ color: '#fff' }}>Google Play</p>
            </div>
          </a>
        </div>
      </div>
      {/*</AnimationOnScroll>*/}

    </div>
  );
}

export default Home;

