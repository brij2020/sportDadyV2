import * as React from 'react';
import teamI from '../../assets/images/hdImage/india-team.jpg';
import teamSA from '../../assets/images/hdImage/teamSA.jpg';
import teamAus from '../../assets/images/hdImage/teamAus.jpg';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../Heading"
const Team  = (props) => {
    const [divRef, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;
  
    React.useEffect(() => {
      console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
    }, [isVisible])
    return(<>
    
        <section class="video-home-section" style={{ "padding": "10px;" }} ref={divRef}>
            <Heading primaryHeading={'Our Cricket Teams'} ballImageLeftPercent={10} visibility={isVisible} />

            <div className='d-flex justify-content-around m-cr-team'>
            <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
                <img src={teamI} width="100%" height="100%" style={{ objectFit: 'contain', }}></img>
                <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>Indian Cricket Team Players</h2>
            </div>

            <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
                <img src={teamSA} width="100%" height="100%" style={{ objectFit: 'contain', }} ></img>
                <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>South Africa Cricket Team Players</h2>
            </div>
            <div className='team-img ourteam' style={{ width: '100%', height: '100%', marginTop: 10 }}>
                <img src={teamAus} width="100%" height="100%" style={{ objectFit: 'contain', }} ></img>
                <h2 style={{ color: '#000', padding: 5, textAlign: 'center', paddingTop: 10, color: "#fff" }}>NewZeland Cricket Team Players</h2>
            </div>

            </div>
            <div className="more-news">
            <a href="/videos">More Cricket Team</a></div>
            <noscript></noscript>

    </section>
    </>)
}
export default Team;