import * as React from 'react';

import '../../App.css';
import flag1 from '../../assets/icons/us.png';
import flag2 from '../../assets/icons/nami.png';
import flag3 from '../../assets/icons/flag1.png';
import flag4 from '../../assets/icons/flag2.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const LiveScoreComponet = (props) => {
  
	return(
  <AnimationOnScroll animateIn="animate__bounceInLeft ">
		<div className='bg-section  ' style={{ marginTop: "30px" }} id="live">
        <h2 className='heading ' >Live Cricket Score</h2>
  

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
                  <div>
                    <img src={flag3} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
                  </div>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <div>
                    <img src={flag2} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Innings Break</p>
                  </div>
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
                  <div>
                    <img src={flag1} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
                  </div>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <div>
                    <img src={flag4} style={{ height: 60, width: 60 }}></img>
                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Innings Break</p>
                  </div>
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
                  <div>
                    <img src={flag1} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
                  </div>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <div>
                    <img src={flag2} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Win by 174 (18)</p>
                  </div>
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
                  <div>
                    <img src={flag1} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3</p>
                  </div>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <div>
                    <img src={flag2} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Innings Break</p>
                  </div>
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
                  <div>
                    <img src={flag1} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>win by 175 (16)</p>
                  </div>
                  <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                  <div>
                    <img src={flag2} style={{ height: 50, width: 50 }}></img>
                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </marquee>
      </div>
      </AnimationOnScroll>
    )
}
export default LiveScoreComponet;