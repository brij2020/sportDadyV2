import * as React from 'react'
import { Link, redirect } from 'react-router-dom';
import '../App.css';
import SimpleImageSlider from "react-simple-image-slider";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cricketimg1 from '../assets/images/cricketimg1.jpg';
import cricketimg2 from '../assets/images/cricketimg2.jpeg';
import flag1 from '../assets/icons/us.png';
import flag2 from '../assets/icons/nami.png';
import flag3 from '../assets/icons/flag1.png';
import flag4 from '../assets/icons/flag2.png';
import newzteam from '../assets/images/teams/newzteam.jpeg';
import usteam from '../assets/images/teams/usteam.jpg';
import abdev from '../assets/images/players/abdev.png';
import chris from '../assets/images/players/chris.png';
import david from '../assets/images/players/david.png';
import ResponsiveSlider from '../Components/Slider'
import ONE from '../assets/images/slides/one.jpg'
import TWO from '../assets/images/slides/two.jpg'

function Home() {

  const images = [
    { url: ONE },
    { url: TWO },
    { url: TWO },
    { url: TWO },
    { url: TWO },
    { url: TWO },
    { url: TWO },
  ];

  const Data = [
    {
      heading: 'SUN, NOV 27 2022'

    },
    {
      heading: 'SUN, NOV 27 2022'
    },

  ]

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

  return (
    <div style={{ marginBottom: 20 }}>
      <div id='top'>

        <ResponsiveSlider slides={images} />
        <marquee className='banner-heading'>Welcome to the Sport Daddy</marquee>
        <div style={{ display: 'flex', position: 'absolute', bottom: 300, left: 120, }}>
          <div className='banner-card'>
            See Schedule & Players Details of Every Match
          </div>
          <div className='banner-card'>
            See Live Score & Commentry of every second
          </div>
        </div>
      </div>

      <div className='bg-section' style={{ marginTop: "30px" }}>
        <h2 className='heading'>Live Cricket Score</h2>
        <marquee behavior="alternate">
          <div className='d-flex hello'>
            <div className='live-section'>
              <div className='live-card'>
                <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                  ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                </h4>
                <h3 style={{ fontWeight: "bold", color: 'GhostWhite', marginTop: 20 }}>
                  United States vs Namibia,
                </h3>
                <p style={{ color: 'GhostWhite' }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                <div className='flag-contain'>
                  <img src={flag1} width="15%" height="15%"></img>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <img src={flag2} style={{ paddingTop: 3 }} width="13%" height="13%"></img>
                </div>
              </div>
            </div>
            <div className='live-section'>
              <div className='live-card'>
                <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                  ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                </h4>
                <h3 style={{ fontWeight: "bold", color: 'GhostWhite', marginTop: 20 }}>
                  India vs Pakistan,
                </h3>
                <p style={{ color: 'GhostWhite' }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                <div className='flag-contain'>
                  <img src={flag3} width="15.7%" height="15.7%"></img>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <img src={flag4} width="15.7%" height="15.7%"></img>
                </div>
              </div>
            </div>
            <div className='live-section'>
              <div className='live-card'>
                <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                  ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                </h4>
                <h3 style={{ fontWeight: "bold", color: 'GhostWhite', marginTop: 20 }}>
                  United States vs Namibia,
                </h3>
                <p style={{ color: 'GhostWhite' }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                <div className='flag-contain'>
                  <img src={flag1} width="15%" height="15%"></img>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <img src={flag2} style={{ paddingTop: 3 }} width="13%" height="13%"></img>
                </div>
              </div>
            </div>
            <div className='live-section'>
              <div className='live-card'>
                <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                  ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                </h4>
                <h3 style={{ fontWeight: "bold", color: 'GhostWhite', marginTop: 20 }}>
                  United States vs Namibia,
                </h3>
                <p style={{ color: 'GhostWhite' }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                <div className='flag-contain'>
                  <img src={flag1} width="15%" height="15%"></img>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <img src={flag2} style={{ paddingTop: 3 }} width="13%" height="13%"></img>
                </div>
              </div>
            </div>
            <div className='live-section'>
              <div className='live-card'>
                <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                  ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                </h4>
                <h3 style={{ fontWeight: "bold", color: 'GhostWhite', marginTop: 20 }}>
                  United States vs Namibia,
                </h3>
                <p style={{ color: 'GhostWhite' }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                <div className='flag-contain'>
                  <img src={flag1} width="15%" height="15%"></img>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <img src={flag2} style={{ paddingTop: 3 }} width="13%" height="13%"></img>
                </div>
              </div>
            </div>
          </div>
        </marquee>
      </div>

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
        <h2 className='heading'>Cricket Schedule</h2>
        {Data.map((item) => (
          <div>
            <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold" }}>{item.heading}
            </h4>
            {Data2.map((item2) => (
              <div>
                <Row className='ml-3' style={{ marginLeft: "8px" }}>
                  <Col >
                    <h5>
                      {item2.matches}
                    </h5>
                  </Col>
                  <Col>
                    <h5>
                      New Zealand vs India, 2nd ODI
                    </h5>
                    <p style={{ color: "grey" }}>{item2.player}</p>
                  </Col>
                  <Col>
                    <h5>{item2.date}
                    </h5>
                    <p style={{ color: "grey" }}>
                      {item2.date_2}</p>
                  </Col>
                </Row>
                <br></br>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='bg-section' >
        <h2 className='heading'>Video Hub</h2>
        <div className='card-container'>
          <div className='home-card'>
            <iframe width="440" height="235" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='home-card'>
            <iframe width="440" height="235" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='home-card'>
            <iframe width="440" height="235" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
        </div>
        <Link to='video'>
          <h3 className='see-more-home'>See More</h3>
        </Link>
      </div>

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
        <h2 className='heading'>Quiz</h2>
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

      <div className='bg-section'>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className='p-gray'>Nov 26 2022</p>
                <p className='see-more'><Link>View More</Link></p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
        <h2 className='heading'>India National Cricket Team</h2>
        <Row className="mt-5">
          <Col xs={4}><img className='news-img' src={cricketimg2} width="80%" height="auto"></img>
          </Col>
          <Col xs={8}><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
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
      </div>

      <div className='bg-section'>
        <div className='d-flex justify-content-around'>
          <div className='see-more-home'>{" "}</div>
          <h2 className='heading'>Our Cricket Teams</h2>
          <Link>
            <h3 className='see-more-home'>See More</h3>
          </Link>
        </div>
        <div className='d-flex justify-content-around'>
          <div className='team-img' style={{ width: '100%', height: '100%', margin: 20 }}>
            <img src={cricketimg1} width="100%" height="100%"></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10 }}>Indian Cricket Team Players</h2>
          </div>

          <div className='team-img' style={{ width: '100%', height: '100%', margin: 20 }}>
            <img src={usteam} width="100%" height="100%"></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10 }}>Us Cricket Team Players</h2>
          </div>
          <div className='team-img' style={{ width: '100%', height: '100%', margin: 20 }}>
            <img src={newzteam} width="100%" height="100%"></img>
            <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10 }}>NewZeland Cricket Team Players</h2>
          </div>

        </div>
      </div>

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
        <div className='d-flex justify-content-around'>
          <div className='see-more-home'>{" "}</div>
          <h2 className='heading'>Cricket Players (Our Heroes)</h2>
          <Link>
            <h3 className='see-more-home'>See More</h3>
          </Link>
        </div>
        <Row className="mt-5" style={{ marginTop: 10 }}>
          <Col xs={4}>
            <div className='player-card'>
              <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
            </div>
            <div className='player-card'>
              <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
            </div>
            <div className='player-card'>
              <img src={david} width="75%" height="100%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>David warner</h3>
            </div>

          </Col>
          <Col xs={4}>
            <div className='player-card'>
              <img src={chris} width="70%" height="100%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Chris Jordanr</h3>
            </div>
            <div className='player-card'>
              <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
            </div>
            <div className='player-card'>
              <img src={david} width="75%" height="100%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>David warner</h3>
            </div>

          </Col>
          <Col xs={4}>
            <div className='player-card'>
              <img src={david} width="75%" height="100%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>David warner</h3>
            </div>
            <div className='player-card'>
              <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
            </div>
            <div className='player-card'>
              <img src={abdev} width="75%" height="110%" style={{ alignSelf: 'center' }}></img>
              <h3 style={{ alignSelf: 'center', color: '#fff', width: 70, }}>Ab de villiers</h3>
            </div>

          </Col>
        </Row>

      </div>

      <div className='bg-section'>
        <h2 className='heading'>Latest News and Articles</h2>

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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={newzteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={usteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={newzteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={usteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={newzteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={usteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={newzteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={usteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={newzteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={usteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
            <Col xs={4}><img className='news-img' src={usteam} width="80%" height="auto"></img>
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
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
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                <br /> <br />
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className='p-gray'>Nov 26 2022</p>
                <p className='see-more'><Link>View More</Link></p>
              </div>
            </Col>
          </Row>
        </div>

       
      </div>
    </div>
  );
}

export default Home;
