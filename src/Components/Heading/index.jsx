import * as React from 'react';

import "./heading.css"
import FIREBALL from "../../assets/logo/ball3.png"
import Intersection from "../Intersection"
const Heading = props => {
	const { primaryHeading = "Sport Dady", suHeading = "", ballImageLeftPercent=49} = props;
	console.log("test ", ballImageLeftPercent, `${ballImageLeftPercent}% !important`)
	return(
		<Intersection>
		<div class="section-title">
			<h2 style={{textAlign:"center",fontSize:"28px",fontWeight:"700", color:"#000"}}>{primaryHeading}</h2>

			<span> 
				<img src={FIREBALL} alt="fireball"   
				style={{ 
						width: "50px",
    					height: "50px",
   						"right":`${ballImageLeftPercent}%`
    				}}/>
			</span>
		</div>
		</Intersection>
	)
}

export default Heading;
