import * as React from 'react';

import './ArticleList.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, redirect } from 'react-router-dom';
import cricketimg1 from '../../assets/images/cricketimg1.jpg';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.jpg';
import img7 from '../../assets/images/img7.jpg';
import img9 from '../../assets/images/img9.jpg';
const AricleList = () => {
  return (

    <div class="grid-container">
      <div class="grid-item">
        <img src={cricketimg1} width="100%" height="50%"></img>
        <div>
          <p className='news-heading'>India vs Bangladesh 2nd Test Day 3 Live Updates: Litton Das, Taskin Ahmed Revive Bangladesh's Innings; Lead Goes Over 120</p>
          <p className='news-para'>India vs Bangladesh Live: Bangladesh have lost seventh wickets against India on Day 3 of the ongoing second Test against India in Mirpur</p>
          <p className='news-para'>India vs Bangladesh Live: Bangladesh have lost seventh wickets against India on Day 3 of the ongoing second Test against India in Mirpur</p>
        </div>
      </div>
      <div class="grid-item">
        <img src={img7} width="90%" height="100%"></img>
        <div>
          <p className='news-heading'>India vs Bangladesh 2nd Test Day 3 Live Updates: Litton Das, Taskin Ahmed Revive Bangladesh's Innings; Lead Goes Over 120</p>
          <p className='news-para'>India vs Bangladesh Live: Bangladesh have lost seventh wickets against India on Day 3 of the ongoing second Test against
            India in Mirpur India vs Bangladesh Live: Bangladesh have lost n Mirpur India vs Bangladesh Live: Bangladesh have lost seventh wickets
          </p>
        </div>

      </div>
      <div class="grid-item"></div>
      <div class="grid-item">
        <div>
          <p className='news-para'>India vs Bangladesh Live: Bangladesh have lost seventh wickets against India on Day 3 of the ongoing second Test against
            India in Mirpur India vs Bangladesh India on Day 3 of the ongoing second Test against India in Mirpur</p>
        </div>
      </div>
      <div class="grid-item">
        <div>
          <img src={cricketimg1} width="100%" height="100%"></img>
        </div>
        <div style={{width: '80%'}}>
          <p className='news-heading'>India vs Bangladesh 2nd Test Day 3 Live Updates: Litton Das, Taskin Ahmed Revive Bangladesh's Innings; Lead Goes Over 120</p>
          <p className='news-para'>India vs Bangladesh Live: Bangladesh have lost seventh wickets against India on Day 3 of against India in Mirpur</p>
        </div>
      </div>

    </div>
  )
}

export default AricleList;


