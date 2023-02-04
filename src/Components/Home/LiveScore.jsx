import * as React from 'react';

import '../../App.css';
import flag1 from '../../assets/icons/us.png';
import flag2 from '../../assets/icons/nami.png';
import flag3 from '../../assets/icons/flag1.png';
import flag4 from '../../assets/icons/flag2.png';
import { Link } from 'react-router-dom';

import { AnimationOnScroll } from 'react-animation-on-scroll';
const LiveScoreComponet = (props) => {

  return (
    <AnimationOnScroll animateIn="animate__bounceInLeft ">
      <div className='bg-section' id="live">
        <h2 className='heading' >Live Cricket Score</h2>
        <marquee behavior="alternate">
          <div className='d-flex mb-4'>

            <Link to="live-commentry">
              <div className='live-section'>
                <div className='live-card'>

                  <div className='d-flex justify-content-between'>
                    <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                      Live Match
                    </h4>
                    <i className='fa fa-bell text-light fs-2'></i>
                  </div>

                  <div className='flag-contain'>
                    <div className='d-flex'>
                      <img src={flag3} style={{ height: 50, width: 50 }}></img>
                      <div className='p-1'>
                        <p className='white-txt'>Ind</p>
                        <p className='white-txt' style={{ marginTop: -5 }}>173/3 (20)</p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='p-1'>
                        <p className='white-txt'>Pak</p>
                        <p className='yellow-txt' style={{ marginTop: -5 }}>Yet to bat</p>
                      </div>
                      <img src={flag4} style={{ height: 60, width: 60 }}></img>
                    </div>
                  </div>

                  <h4 className='status-text mt-4'>
                    India opt to bat
                  </h4>
                </div>
              </div>
            </Link>

            <Link to="live-commentry">
              <div className='live-section'>
                <div className='live-card'>

                  <div className='d-flex justify-content-between'>
                    <h4 className='white-title-text'>
                      Live Match
                    </h4>
                    <i className='fa fa-bell text-light fs-2'></i>
                  </div>

                  <div className='flag-contain'>
                    <div className='d-flex'>
                      <img src={flag1} style={{ height: 50, width: 50 }}></img>
                      <div className='p-1'>
                        <p className='white-txt'>Eng</p>
                        <p className='white-txt' style={{ marginTop: -5 }}>173/3 (20)</p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='p-1'>
                        <p className='white-txt'>Nam</p>
                        <p className='yellow-txt' style={{ marginTop: -5 }}>Yet to bat</p>
                      </div>
                      <img src={flag2} style={{ height: 50, width: 50 }}></img>
                    </div>
                  </div>

                  <h4 className='status-text mt-4'>
                    England opt to bat
                  </h4>
                </div>
              </div>
            </Link>

            <Link to="live-commentry">
              <div className='live-section'>
                <div className='live-card'>
                  <div className='d-flex justify-content-between'>
                    <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                      Live Match
                    </h4>
                    <i className='fa fa-bell text-light fs-2'></i>
                  </div>

                  <div className='flag-contain'>
                    <div className='d-flex'>
                      <img src={flag3} style={{ height: 50, width: 50 }}></img>
                      <div className='p-1'>
                        <p className='white-txt'>Ind</p>
                        <p className='white-txt' style={{ marginTop: -5 }}>173/3 (20)</p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='p-1'>
                        <p className='white-txt'>Pak</p>
                        <p className='yellow-txt' style={{ marginTop: -5 }}>Yet to bat</p>
                      </div>
                      <img src={flag4} style={{ height: 60, width: 60 }}></img>
                    </div>
                  </div>

                  <h4 className='status-text mt-4'>
                    India opt to bat
                  </h4>
                </div>
              </div>
            </Link>

            <Link to="live-commentry">
              <div className='live-section'>
                <div className='live-card'>

                  <div className='d-flex justify-content-between'>
                    <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                      2 days ago Match
                    </h4>
                    <i className='fa fa-bell text-light fs-2'></i>
                  </div>

                  <div className='flag-contain'>
                    <div className='d-flex'>
                      <img src={flag1} style={{ height: 50, width: 50 }}></img>
                      <div className='p-1'>
                        <p className='white-txt'>Eng</p>
                        <p className='white-txt' style={{ marginTop: -5 }}>173/3 (20)</p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='p-1'>
                        <p className='white-txt'>Nami</p>
                        <p className='yellow-txt' style={{ marginTop: -5 }}>138-5(19)</p>
                      </div>
                      <img src={flag2} style={{ height: 50, width: 50 }}></img>
                    </div>
                  </div>

                  <h4 className='status-text mt-4'>
                    England won by 5 wkts
                  </h4>
                </div>
              </div>
            </Link>

            <Link to="live-commentry">
              <div className='live-section'>
                <div className='live-card'>
                  <div className='d-flex justify-content-between'>
                    <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
                      2 days ago Match
                    </h4>
                    <i className='fa fa-bell text-light fs-2'></i>
                  </div>

                  <div className='flag-contain'>
                    <div className='d-flex'>
                      <img src={flag3} style={{ height: 50, width: 50 }}></img>
                      <div className='p-1'>
                        <p className='white-txt'>Ind</p>
                        <p className='white-txt' style={{ marginTop: -5 }}>173/3 (20)</p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='p-1'>
                        <p className='white-txt'>Pak</p>
                        <p className='yellow-txt' style={{ marginTop: -5 }}>138-5(19)</p>
                      </div>
                      <img src={flag4} style={{ height: 60, width: 60 }}></img>
                    </div>
                  </div>

                  <h4 className='status-text mt-4'>
                    India won by 5 wkts
                  </h4>
                </div>
              </div>
            </Link>

          </div>
        </marquee>
      </div>
    </AnimationOnScroll>
  )
}
export default LiveScoreComponet;