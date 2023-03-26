import * as React from 'react';
import "./quiz.css"
import 'animate.css';
import CircularProgressBar from "../../Components/ProgressBar"

import promoImage from '../../assets/images/bg/ze.jpg';

const quizeLitsS = [
			{
				quiz: '1. Virat Kohli Nick Name ?',
				id: "q1",
				isActive: true,
				options:[
				{	id:"a",
					ans: "Chahin",
				},
				
				{	id:"b",
					ans: "Mahi"
				}
				,
				{	id:"c",
					ans: "Chikoo"
				},
				{	id:"d",
					ans: "Master Blaster"
				}
				]
			},
			{
				quiz: '2. First Double Century Made By?',
				id: "q2",
				isActive: false,
				options:[
				{	id:"aa",
					ans: "Rohit Sharma",
				},
				
				{	id:"bb",
					ans: "Virendra Shehvag"
				}	
				,
				{	id:"ccc",
					ans: "Sachin"
				},
				{	id:"ddd",
					ans: "Ishan Kishan"
				}
				]
			},
			{
				quiz: '3. WWWC-2011 win by which country?',
				id: "q3",
				isActive: false,
				options:[
				{	id:"aaa",
					ans: "Austrelia",
				},
				
				{	id:"bba",
					ans: "West Indies"
				}
				,
				{	id:"cccc",
					ans: "India"
				},
				{	id:"dddd",
					ans: "Pakistan"
				}
				]
			},
			{
				quiz: '4. How many players in T20 Match?',
				id: "q4",
				isActive: false,
				options:[
				{	id:"aaaa",
					ans: "10",
				},
				
				{	id:"bbaa",
					ans: "11"
				}
				,
				{	id:"ccccc",
					ans: "14"
				},
				{	id:"ddddd",
					ans: "15"
				}
				]
			}
		]
const Quiz  = (props) => {
	const [quizeLits, setQuizList] = React.useState(quizeLitsS); 
	const [isNextBtn, setNextBtn] = React.useState(false);
	const [singleRender, setRenderCount] = React.useState(0);
	const [isComplete, setComplete] = React.useState(false);
	const [percentValue, setPercent] = React.useState(0);
	const [ quizCount, setQuizCount] = React.useState(1);
	
	const selectResponse = (qId, ans) => {
		let qList = quizeLits.map(q => {
			if(q?.id === qId) {
				q.options = q.options.map(o => { 
					if(o?.id === ans?.id) {  
						o['active'] = true;
						return o
					} else { 
						o['active'] = false;
						return o
					}
				});
				return q
			}
			return q
		})
		setNextBtn(true)
	}
	const handleNext = (quizI, id) => {
		setNextBtn(false);
		let totalQuize = quizeLits.length;
		let percent = Number(quizCount/totalQuize).toFixed(2) * 100;
		console.log("percent 000 ", quizCount/totalQuize )
		let nextId = 0;
		let mQuizList = quizeLits.slice().map((ob,i,list) =>{
			if(id == ob?.id) {
				nextId = list?.[i+1]?.id;
			}
			ob['isActive'] = false;
			return ob;
		})
		mQuizList = mQuizList.slice().map((qu) => {
			if(qu?.id === nextId) {
				
				qu['isActive'] = true
			}
			return qu
		})
		if(typeof nextId === 'undefined') {
			setComplete(!isComplete)
		} else {
			
			setQuizList(mQuizList)
		}
		console.log('nextId', nextId)
 		setPercent(percent);
		setQuizCount(quizCount+1)
		
	}
	console.log("isComplete", percentValue)
	return (
		<div className='plain-section'  style={{ 'margin-bottom': "100px", boxShadow: "3px 2px 7px 0px #999494"}}>
		<div className="quiz">
		<div id="circle-container" className="animate__animated animate__fadeInDownBig svg-percent">
	
		<CircularProgressBar
		    selectedValue={percentValue}
		    maxValue={100}
		    radius={100}
		    activeStrokeColor='#ff0000'
		    withGradient
		/>
		</div>
		<form action="">
			{
				quizeLits && quizeLits.map((q,i)=> {
					return(
						<fieldset className={`q q${i+1} ${q?.isActive ? '' : 'disabled'} animate__animated animate__fadeInDownBig`} key={i}>
							<div className="content">
								<legend>{q?.quiz}</legend>
								{
									q?.options?.map((ans,ii) => {
										return(<React.Fragment key={ii}>
											<input type="radio" name={`q${i+1}`} id={ans?.id} className="btnQ"  key={ii} onChange={e => selectResponse(q.id,ans) }/>
												<label htmlFor={ans?.id} className="btnQ" ><span>{ans?.ans}</span></label>
										</React.Fragment>)
									})
								}
								
								
							</div>
							<div className="button-space">
							{isNextBtn && !isComplete ? (<button type="button" onClick={e => handleNext(i,q.id) } className="next animate__animated  animate__bounceInLeft">Next</button>):(null)}
							
							</div>
						</fieldset>
					)
				})
			}
		</form>
	{isComplete ? <div class="end animate__animated animate__fadeInDownBig">Thanks for sharing...</div>:(null)}
		

	</div>
	</div>
	)
}

export default Quiz;