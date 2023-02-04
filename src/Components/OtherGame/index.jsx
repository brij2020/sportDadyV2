import * as React from "react";

import './index.css'
import FootBall from "../../assets/images/football.gif"
import Hockey from "../../assets/svg/1350146.avif"
import Kabbdi from "../../assets/svg/sports-kabaddi.svg"
import Tennis from "../../assets/svg/tennis.avif"







const OtherGame = (props) =>{
	return(
		<div class="main-other-game">

<div class="containerothergane">
  <div class="boxothergame">
    <div class="contentothergame">
     <img src={FootBall} alt="football" style={{ background: "white"}}/>
      <h2>Football<br /> <span>description</span></h2>
      <a href="#">View More</a>
    </div>
    
  </div>
</div>
<div class="containerothergane">
  <div class="boxothergame">
    <div class="contentothergame">
      <img src={Hockey} alt="hockey" style={{ background: "white"}}/>
      <h2>Hockey <br /> <span>hockey description</span></h2>
      <a href="#">View More</a>
    </div>
    
  </div>
</div>
  <div class="containerothergane">
  <div class="boxothergame">
    <div class="contentothergame">
     	<img src={Kabbdi} alt="kabbdi" style={{ background: "white"}} />
      <h2>Kabaddi<br /> <span>Kabaddi description</span></h2>
      <a href="#">View More</a>
    </div>
    
  </div>
</div>
<div class="containerothergane">
  <div class="boxothergame">
    <div class="contentothergame">
     <img src={Tennis} alt="tennis" style={{ background: "white"}}/>
      <h2>Tennis <br /> <span>tennis description</span></h2>
      <a href="#">View More</a>
    </div>
    
  </div>
</div>

    
  

</div>
)
}
export default OtherGame;