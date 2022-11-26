import { Link, redirect } from 'react-router-dom';
import '../App.css';
import SimpleImageSlider from "react-simple-image-slider";

function Home() {

  const images = [
    { url: 'https://resources.pulse.icc-cricket.com/ICC/photo/2017/01/30/44780aa2-2b6d-4048-897c-6606762b3d38/GettyImages-463485384_Cropped.jpg' },
    { url: "https://media.istockphoto.com/id/180868820/photo/cricket-batsman-about-to-strike-ball.jpg?s=612x612&w=0&k=20&c=xRiAIk3RA6cmm1FtI2S-YK8Pei9qSkqxhX-JUbTI2Cs=" },
    { url: "https://lagatar24.com/wp-content/uploads/2022/02/1088580.jpg" },
    { url: "https://images.hindustantimes.com/img/2022/11/03/550x309/ANI-20221103271-0_1667481529739_1667481529739_1667481544353_1667481544353.jpg" },
    { url: "https://images.thequint.com/thequint%2F2022-02%2F3dadaf2c-d7e1-4fa8-a5e2-e4f3406df5f5%2FFK5hP_FaIAUwOX9.jpg" },
  ];

  return (
    <div>
      <div>
        <SimpleImageSlider
          width={'100%'}
          height={280}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
        />
        <div>
          <h2 style={{ padding: 10, paddingTop: 25, position: 'absolute', top: 45, right: 25, }}>Welcome to the Sport Daddy</h2>
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 220, left: 120, }}>
          <div className='banner-card'>
            See Schedule & Players Details of Every Match
          </div>
          <div className='banner-card'>
            See Live Score & Commentry of every second
          </div>
        </div>
      </div>

      <div className='bg-section' style={{ marginTop: 120 }}>
        <h2 style={{ textAlign: 'center' }}>Video Hub</h2>
        <div className='card-container'>
          <div className='home-card'>
            <iframe width="340" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='home-card'>
            <iframe width="340" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='home-card'>
            <iframe width="340" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
        </div>
        <Link to='video'>
        <h3 className='see-more'>See More</h3>
        </Link>
      </div>

      <div className='plain-section'>
        <h2 style={{ textAlign: 'center' }}>Video Hub</h2>
        <div className='quiz-section'>
          <div class="polaroid rotate_right">
            <i className='fa fa-group'> {" "} 60k + Participants</i>
            <h4>T20 Match 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_left">
            <i className='fa fa-group'>{" "} 60k + Participants</i>
            <h4>TATA IPL 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_right">
            <i className='fa fa-group'> {" "} 60k + Participants</i>
            <h4>T20 Match 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>

          <div class="polaroid rotate_left">
            <i className='fa fa-group'>{" "} 60k + Participants</i>
            <h4>TATA IPL 2022  Final Quiz.</h4>
            <p class="caption">Sint quia Recusandae officiees neque maiores is cupiditate tempora quiz</p>
          </div>
        </div>
      </div>

      <div className='bg-section'>
        <h2 style={{ textAlign: 'center' }}>Video Hub</h2>
        <div className='card-container'>
          <div className='card'>
            <iframe width="340" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='card'>
            <iframe width="340" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
          <div className='card'>
            <iframe width="340" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='video'>
            </iframe>
            <p className='w-text'>2022- The Year of the Cricket World Cup</p>
            <p className='p-text'>01 Jan 2022</p>
          </div>
        </div>
        <h3 style={{ textAlign: 'right' }}>See More</h3>
      </div>
      <Link to="/series">ajhgjag</Link>
    </div>
  );
}

export default Home;
