import { Link, redirect } from 'react-router-dom';
import '../App.css';
import SimpleImageSlider from "react-simple-image-slider";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cricketimg1 from '../assets/images/cricketimg1.jpg';
import cricketimg2 from '../assets/images/cricketimg2.jpeg';

function Home() {

  const images = [
    { url: 'https://resources.pulse.icc-cricket.com/ICC/photo/2017/01/30/44780aa2-2b6d-4048-897c-6606762b3d38/GettyImages-463485384_Cropped.jpg' },
    { url: "https://static.vecteezy.com/system/resources/previews/002/155/018/non_2x/cricket-championship-background-or-banner-free-vector.jpg" },
    { url: "https://images.thequint.com/thequint%2F2022-02%2F3dadaf2c-d7e1-4fa8-a5e2-e4f3406df5f5%2FFK5hP_FaIAUwOX9.jpg" },
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
        <SimpleImageSlider
          width={'100%'}
          height={280}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          style={{ marginTop: -21, zIndex: 2 }}
        />
        <h2 className='banner-heading'>Welcome to the Sport Daddy</h2>
        <div style={{ display: 'flex', position: 'absolute', bottom: 300, left: 120, }}>
          <div className='banner-card'>
            See Schedule & Players Details of Every Match
          </div>
          <div className='banner-card'>
            See Live Score & Commentry of every second
          </div>
        </div>
      </div>

      <div className='bg-section' style={{ marginTop: 125 }}>
        <h2 className='heading'>Live Cricket Score</h2>
        <div className='live-section'>
          <div style={{ marginRight: 40, width: '50%' }}>
            <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>
              ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
            </h4>
            <h3 style={{ fontWeight: "bold", marginLeft: "10px", }}>
              United States vs Namibia,
            </h3>
            <p style={{ color: "grey", marginLeft: "10px", }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
            <Card style={{ width: '26rem', background: "#f5f5f5" }}>
              <Card.Body>
                {/* <Card.Title>USA211-7 (50 Ovs)</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">USA211-7 (50 Ovs)</Card.Subtitle>
                <Card.Text style={{ fontWeight: "bold" }}>
                  USA211-7 (50 Ovs)
                </Card.Text>
                <Card.Link href="#">Morrisville Samp Army won by 8 wkts</Card.Link>

              </Card.Body>
            </Card>
          </div>
          <div style={{ width: '50%' }}>
            <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>
              ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
            </h4>
            <h3 style={{ fontWeight: "bold", marginLeft: "10px", }}>
              United States vs Namibia,
            </h3>
            <p style={{ color: "grey", marginLeft: "10px", }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
            <Card style={{ width: '26rem', background: "#f5f5f5" }}>
              <Card.Body>
                {/* <Card.Title>USA211-7 (50 Ovs)</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">USA211-7 (50 Ovs)</Card.Subtitle>
                <Card.Text style={{ fontWeight: "bold" }}>
                  USA211-7 (50 Ovs)
                </Card.Text>
                <Card.Link href="#">Morrisville Samp Army won by 8 wkts</Card.Link>

              </Card.Body>
            </Card>
          </div>
        </div>
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
            <iframe width="400" height="225" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='home-card'>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='home-card'>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
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
            <i className='fa fa-group text-dark'>{" "} 60k + Participants</i>
            <h4 className='light-h4'>TATA IPL 2022  Final Quiz.</h4>
            <p class="light-caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_right">
            <i className='fa fa-group'> {" "} 60k + Participants</i>
            <h4 className='h4'>T20 Match 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_left">
            <i className='fa fa-group text-dark'>{" "} 60k + Participants</i>
            <h4 className='light-h4'>TATA IPL 2022  Final Quiz.</h4>
            <p class="light-caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>
        </div>
      </div>

      <div className='bg-section'>
        <h2 className='heading'>Cricket News and Editorials</h2>
        <Row>
          <Col xs={4}><img src={cricketimg1} width="80%" height="auto"></img>
          </Col>
          <Col xs={7}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
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
              <br /> <br /> <br /> <br /> <br />
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className='p-gray'>Nov 26 2022</p>
              <p className='see-more'><Link to='news'>View More</Link></p>
            </div>
          </Col>
        </Row>
      </div>

      <div className='plain-section' style={{ boxShadow: '1px 2px 9px #323d94', }}>
        <h2 className='heading'>India National Cricket Team</h2>
        <Row className="mt-5">
          <Col xs={4}><img src={cricketimg2} width="80%" height="auto"></img>
          </Col>
          <Col xs={8}><h3 style={{ textAlign: "start", color: "black" }}>Rain threat looms large as India eye series-levelling win</h3>
            <p style={{ textAlign: "start", color: "grey" }}>
              Following their stunning victory in the first ODI, New Zealand will<br></br> be hoping to seal the series and fetch more valuable Super League points<br></br>
            </p>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className='p-gray'>Nov 26 2022</p>
              <p className='see-more'><Link to='team'>View More</Link></p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
