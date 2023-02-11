import * as React from 'react';
import "./index.css"

import IndiaFlag from "../../assets/svg/india.jpg"
import PakFlag  from "../../assets/icons/flag2.png"
const timeLine = [
{
	lable: "India wins by 10 runs",
	wcountry: "India",
	rcountry: "Pakistan",
	year: "2007",
	flag: IndiaFlag
},
{
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2009",
	flag: PakFlag
},
{
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2011",
	flag: PakFlag
}, {
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2013",
	flag: PakFlag
}, 
{
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2015",
	flag: PakFlag
}
]



const TimeLine = (props) => {
	const [cricketTimeLine, setCricketTimeLine] = React.useState(timeLine);
	return(
	<div className="page">
	  <div className="views">
	  {
	  	cricketTimeLine &&  cricketTimeLine.map((yearSlide, i) => {
	  		return(
		  			<div className="view view--1">
		      <div className="view__inner">
		        <h2 style={{"font-size": "100px"}}>{yearSlide?.year}</h2>
		        <div>
		        <lable>{yearSlide?.lable}</lable>
		        </div>
		      </div>
		    </div>
	  			)
	  	})
	  }
	  
	    
	  
	  </div>
	  <div className="timeline__wrapper">
	    <div className="timeline">
	    {/*<a className="timeline__all-cars" href="#">All cars</a> */}
	      <ul className="timeline__list">

	      {
	      	cricketTimeLine && cricketTimeLine.map((slide,i) => {
	      		return(<li className={ `timeline__item ${ i == 0 ? 'timeline__item--active' : '' }` } key={i}>
	        	<a className="timeline__link" href="#">
	            	<div className="timeline__item__point"></div>
	            </a>
		          <div className="timeline__item__content">
		          		<img className="timeline__item__thumb" src={slide?.flag}/>
		          		<div className="timeline__item__shadow"></div>       
				</div>
				 <div id="wrapper" class={`arrow-wrapper`}>
					  <div id="wrapper-inner">
						<div id="scroll-down">
					  <span class="arrow-down">
					 
					  </span>
					  <span id="scroll-title">
					    
					  </span>
						</div>
					  </div>
		          </div>
		          <div className="timeline__item__year">{slide?.year}</div>
	        </li>)
	      	})
	      }
	        
	     
	     
	      </ul>
	      {/*<a className="timeline__exit" href="#">Exit</a>*/}
	      <div className="timeline__path">
	        <div className="timeline__path__triangle timeline__path__triangle--moving"></div>
	        <div className="timeline__path__triangle timeline__path__triangle--static-1"></div>
	        <div className="timeline__path__triangle timeline__path__triangle--static-2"></div>
	        <div className="timeline__path__triangle timeline__path__triangle--static-3"></div>
	      </div>
	    </div>
	  </div>
	</div>)
}
export default TimeLine;
