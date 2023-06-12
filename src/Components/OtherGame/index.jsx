import * as React from "react";

import './index.css'
import FootBall from "../../assets/svg/football.avif"
import Hockey from "../../assets/svg/hockey.png"
import Kabbdi from "../../assets/svg/sports-kabaddi.svg"
import Tennis from "../../assets/svg/tennis.png"





import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../../Components/Heading"


const OtherGame = (props) => {
  const [divRef, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    React.useEffect(() => {
        console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
    }, [isVisible])
  return (
    <section className="video-home-section" style={{ padding: "10px 10px 10px", "border-raduis": "10px" }} ref={divRef}>
       <Heading primaryHeading={'Others Game'}   ballImageLeftPercent={5}  visibility={isVisible}/>
        <div className='bg-section' style={{
          "background": '', backgroundSize: "cover", "height": "auto",
          "max-width": "100%",
          "max-height": "100%"
        }}>
      
          <div class="main-other-game">

            <div class="containerothergane">
              <div class="boxothergame">
                <div class="contentothergame">
                  <img src={FootBall} alt="football" style={{ background: "white" }} />
                  <h2>Football<br /> <span>description</span></h2>
                  <a href="#">View More</a>
                </div>

              </div>
            </div>
            <div class="containerothergane">
              <div class="boxothergame">
                <div class="contentothergame">
                  <img src={Hockey} alt="hockey" style={{ background: "white" }} />
                  <h2>Hockey <br /> <span>hockey description</span></h2>
                  <a href="#">View More</a>
                </div>

              </div>
            </div>
            <div class="containerothergane">
              <div class="boxothergame">
                <div class="contentothergame">
                  <img src={Kabbdi} alt="kabbdi" style={{ background: "white" }} />
                  <h2>Kabaddi<br /> <span>Kabaddi description</span></h2>
                  <a href="#">View More</a>
                </div>

              </div>
            </div>
            <div class="containerothergane">
              <div class="boxothergame">
                <div class="contentothergame">
                  <img src={Tennis} alt="tennis" style={{ background: "white" }} />
                  <h2>Tennis <br /> <span>tennis description</span></h2>
                  <a href="#">View More</a>
                </div>

              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
export default OtherGame;