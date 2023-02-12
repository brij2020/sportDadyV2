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
import flagW from '../assets/icons/teamW.jpeg';


import newzteam from '../assets/images/teams/newzteam.jpeg';
import usteam from '../assets/images/teams/usteam.jpg';

import apple from '../assets/icons/apple.png';
import playstore from '../assets/icons/playstore.png';

import ResponsiveSlider from '../Components/Slider'
import ONE from '../assets/images/slides/banner.png'
import TWO from '../assets/images/slides/India-win.png'
import THREE from '../assets/images/slides/win.jpg'

import video from './cricket.mp4';
import LiveScoreComponet from '../Components/Home/LiveScore'
import AricleList from '../Components/Home/ArticleList'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ICCRanking from '../Components/IccRankings';
import Gamebox from '../Components/Home/Gamebox';


import MatchSchedule from "../Components/MatchSchdule";
import OtherGame from '../Components/OtherGame'
import TimeLine from '../Components/TimeLine'
import LiveScore from '../Components/LiveScore'
import CC from '../Components/LiveScoreSlider'

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

      {/* live */}
      {/*<LiveScoreComponet />*/}
      <div id='top'>
        <CC />

      </div>

      {/* Schedule */}

      <div className='plain-section'>
        <div class="divider"><span></span><span>Cricket Schedule</span><span></span></div>

        <MatchSchedule data={Data} />
      </div>




      {/* Latest News and Articles */}

      <div className='bg-section' style={{ background: '#323d94' }}>
        <div class="divider"><span></span><span>Latest News and Articles</span><span></span></div>
        <AricleList />
      </div>


      {/* video  */}

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', boxShadow: "none" }}>
        <div class="divider"><span></span><span>Video Hub</span><span></span></div>

        <div class="containerv">
          <div class="main-box">
            <div class="box one">
              <video
                poster={img3}
                height={'100%'}
                width={'100%'}
                src={video} controls>
              </video>
            </div>
            <div class="box two">
              <video
                poster={img4}
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

      <div className='bg-section' style={{ background: '#323d94' }}>
        <div class="divider"><span></span><span>Photos Gallery</span><span></span></div>
        <div class="containerv">
          <div class="main-box">
            <div class="box img-gal">
              <img src={cricketimg1}
                height={"100%"}
                width={"100%"}

              >
              </img>
              <div class="image-caption">
                <p>
                  This is an awesome caption about a picture. You could put anything here for someone to read. They would love reading more text about nothing.
                </p>
              </div>
            </div>
            <div class="box img-gal">
              <img src={cricketimg2}


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
              <img src={img3}


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
              <img src={img4}


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
              <img src={img7}


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
              <img src={img9}

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
              <img src={newzteam}


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



      {/* ranking  */}
      <div className='bg-section-time-line' >

        <div class="divider"><span></span><span>ICC Ranking</span><span></span></div>
        <ICCRanking />
      </div>


      {/* world timeline  */}

      <div className='bg-section-time-line' >

        <div class="divider"><span></span><span>ODI WORLD CUP TIMELINE</span><span></span></div>
        <TimeLine />

        <Link>
          <h3 className='see-more-home'>See More</h3>
        </Link>
      </div>



      <Gamebox />
      {/* End Other Game Section   */}
      {/* Quiz  */}

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>

        <div class="divider"><span></span><span>Quiz</span><span></span></div>
        <div className='quiz-section'>
          <div class="polaroid rotate_right">
            <i className='fa fa-group'> {" "} 60k + Participants</i>
            <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_left">
            <i className='fa fa-group '>{" "} 60k + Participants</i>
            <h4 className='light-h4'>TATA IPL 2022  Final Quiz.</h4>
            <p class="light-caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_right">
            <i className='fa fa-group'> {" "} 60k + Participants</i>
            <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_left">
            <i className='fa fa-group '>{" "} 60k + Participants</i>
            <h4 className='light-h4'>TATA IPL 2022  Final Quiz.</h4>
            <p class="light-caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_right">
            <i className='fa fa-group'> {" "} 60k + Participants</i>
            <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>
        </div>
      </div>



      {/*cricket news Editorials */}

      {/* <div className='bg-section'>
          <h2 className='heading'>Cricket News and Editorials</h2>
          <div className='new-part'>
            <Row>
              <Col xs={4}><img className='news-img' src={cricketimg1} width="80%" height="auto"></img>
              </Col>
              <Col xs={8}>
                <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                </Link>
                <p style={{ textAlign: "start", color: "grey", }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC,
                  <br />
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className='p-gray'>Nov 26 2022</p>
                  <p className='see-more'><Link>View More</Link></p>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
          <div className='new-part'>
            <Row>
              <Col xs={4}><img className='news-img' src={cricketimg2} width="80%" height="auto"></img>
              </Col>
              <Col xs={8}>
                <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                </Link>
                <p style={{ textAlign: "start", color: "grey", }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC,
                  <br />
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className='p-gray'>Nov 26 2022</p>
                  <p className='see-more'><Link>View More</Link></p>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}



      {/* India National Cricket Team */}

      {/* <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
          
          <div class="divider"><span></span><span>India National Cricket Team</span><span></span></div>
          <Row className="team-part">
            <Col xs={4}>
              <img className='news-img' src={cricketimg2} width="80%" height="auto"></img>
            </Col>
            <Col xs={8}>
              <p style={{ textAlign: "start", color: "grey" }}>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
                Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
              </p>
              <br /> <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className='p-gray'>Nov 26 2022</p>
                <p className='see-more'><Link to='team'>View More</Link></p>
              </div>
            </Col>
          </Row>
        </div> */}



      {/* Our Cricket Teams */}

      <div className='bg-section'>
        <div className='d-flex justify-content-around '>
          <div className='see-more-home'>{" "}</div>

          <div class="divider"><span></span><span>Our Cricket Teams</span><span></span></div>
          <Link>
            <h3 className='see-more-home'>See More</h3>
          </Link>
        </div>
        <div className='d-flex justify-content-around m-cr-team'>
          <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
            <img src={cricketimg1} width="100%" height="100%" ></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>Indian Cricket Team Players</h2>
          </div>

          <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
            <img src={usteam} width="100%" height="100%"  ></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>Us Cricket Team Players</h2>
          </div>
          <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
            <img src={newzteam} width="100%" height="100%"  ></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>NewZeland Cricket Team Players</h2>
          </div>

        </div>
      </div>


      {/* Other Games*/}

      <div className='bg-section' style={{ background: '#323d94' }}>
        <div class="divider"><span></span><span>Other Games</span><span></span></div>
        <OtherGame />
      </div>

      {/* download app section  */}
      {/* <AnimationOnScroll animateIn="animate__jackInTheBox" > */}
      <div className='bg-section'>
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
